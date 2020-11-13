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
import { set } from 'react-native-reanimated';

const SignUpScreen = (props) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const  [confirm_password, setConfirmPassword] = React.useState('')
  
   
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

  const handleEmailChange = e => {
    const email = e.target.value;
    setEmail(email)
  };

  const handlePasswordChange = e => {
    const password = e.target.value
    setPassword(password)
  };

  const handleConfirmPasswordChange = e => {
    const confirm_password = e.target.value
    
      setConfirmPassword(confirm_password)
    };
  

  const registerHandle = (e) => {
    e.preventDefault()
    const data = e.target.value
    setData = (data)

    
     //signUp(data.email,data.password)
     //const userData = {'email':data.email,'password': data.password}
     //const email = data.email
     //const password = data.password
    signUpUser({email,password})
    //return navigation.pop()
    //Alert.alert('signed up')
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
          <Text style={styles.text_footer}>EMAIL</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#84a9ac" size={20} />
            <TextInput
              placeholder="Enter Email"
              style={styles.textInput}
              autoCapitalize="none"
              value={email}
              onChangeText={email => setEmail(email)}
            />
            
          </View>
          
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
              style={styles.textInput}
              autoCapitalize="none"
              value={password}
              onChangeText={password => setPassword(password)}
            />
            
          </View>
          

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
              
              style={styles.textInput}
              autoCapitalize="none"

              onChangeText={confirm_password => setConfirmPassword(confirm_password)}
            />
            
          </View>
          
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
              onPress={() => {dispatch(signUpUser({email,password}))}}>
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