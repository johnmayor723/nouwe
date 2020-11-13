import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <ImageBackground
      source={require('../assets/img/bgloginsetpassword.png')}
      style={styles.container}>
      <StatusBar backgroundColor="#222831" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="3000"
          source={require('../assets/img/NouweLogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text
          style={{
            margin: -55,
            color: 'white',
            fontSize: 14,
          }}>
          VISUALLY CONNECTING PEOPLE, PLACES & THINGS
        </Text>
      </View>
      <Animatable.View style={[styles.footer]} animation="fadeInUpBig">
      <View style={styles.containerButton}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonLogin}
                onPress={()=>navigation.navigate('signin')}
               >
                <Text style={styles.buttonTextLogin}>LOGIN</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonRegister}
                onPress={()=>navigation.navigate('signup')}
                >
                <Text style={styles.buttonTextRegister}>REGISTER</Text>
              </TouchableOpacity>
            </View>
          </View>
       
       
    </Animatable.View>
    </ImageBackground>
  );
};

export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000302',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLogin: {
    backgroundColor: '#ffffff',
    margin:5,
    padding: 20,
    borderRadius: 3,
    width: 150,
  },
  buttonRegister: {
    backgroundColor: '#f50057',
    margin:5,
    padding: 20,
    borderRadius: 3,
    width: 150,
  },
  buttonTextLogin: {
    color: '#000000',
    textAlign: 'center',
  },
  buttonTextRegister: {
    color: '#ffffff',
    textAlign: 'center',
  },
  footer: {
    flex: 1,

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 30,
    justifyContent: 'center',
  },
  signIn: {
   
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
