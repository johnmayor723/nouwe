import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { bindActionCreators } from 'redux';
import { connect , useDispatch} from 'react-redux';
import {signUpUser} from '../container/actions/auth'
import {useTheme} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const SignUpScreen = (props) => {
  const [data, setData] = React.useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    isConfirmedValidPassword: true,
    errorMessage: '',
  });
   const dispatch = useDispatch()
  const {signUpUser}= props
 const signUp = (email, password) => {
   const user ={
     email,
     password
   }
   Alert.alert('signed up')
   console.log(user)
  }
  //const {signUp} = React.useContext(AuthContext);

  const usernameInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };


  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };


  

  const handleConfirmPasswordChange = (val) => {
    setData({
        ...data,
        confirm_password: val
    });
}

    

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const registerHandle = (username,email, password) => {
    auth()
  .createUserWithEmailAndPassword(email,password)
  .then(
    (user)=>{
   // here you can use either the returned user object or       firebase.auth().currentUser. I will use the returned user object
      if(user){
        user.updateProfile({
           displayName: username,
           photoURL: ''
        })
      }
  })
  
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  };

  return (
    <ImageBackground
      source={require('../assets/img/bgReg.png')}
      style={styles.container}>
      <StatusBar backgroundColor="#222831" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../assets/img/NouweLogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
        <Text style={styles.text_footer}>USERNAME</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#84a9ac" size={20} />
            <TextInput
              placeholder="Enter Username"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => usernameInputChange(val)}
              
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={styles.text_footer}>EMAIL</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#84a9ac" size={20} />
            <TextInput
              placeholder="Enter Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => textInputChange(val)}
              
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {data.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Email must be 4 characters long.
              </Text>
            </Animatable.View>
          )}
          <Text
            style={[
              styles.text_footer,
              {
                color: '#008c3a',
                fontSize: 13,
                marginTop: 35,
              },
            ]}>
            PASSWORD
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#84a9ac" size={20} />
            <TextInput
              placeholder="Enter Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          )}

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            CONFIRM PASSWORD
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#84a9ac" size={20} />
            <TextInput
              placeholder="Re-enter Password"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {data.isConfirmedValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Confirmed password must be 8 characters long.
              </Text>
            </Animatable.View>
          )}
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By registering you agree to our
            </Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Privacy policy
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {registerHandle(data.username, data.email,data.password)}}>
              <LinearGradient
                colors={['#008c3a', '#008c3a']}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </ImageBackground>
  );
};


      
const mapStateToProps = (state) => ({
  name : state.HomeReducer.name,
  user : state.userReducer.name
})



export default connect(mapStateToProps, {signUpUser})(SignUpScreen);

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#008c3a',
    fontSize: 13,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
});
