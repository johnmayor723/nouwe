import React from 'react';
import { GooglePlacesAutocomplete } 
from 'react-native-google-places-autocomplete';
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth';


import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    Animated,
    Image,
    TouchableOpacity,
    Dimensions,
    Platform,
  } from "react-native";
import { useState } from 'react';


const GooglePlacesInput = () => {
  

 
  const getUser = firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      //var user = {displayName, email, photoURL, uid, isAnonymous, providerData}
      return user
    } else {
      var user = {}
      return user
      // ...
    }
  });
  
  //const current_user = getUser()
   

  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        //let user = firebase.auth.currentUser
        const current_user = getUser()
        console.log(current_user)
        console.log(data.description)}}
      query={{
        key: 'AIzaSyCAD37i2JqGDruvekEG6WshJ0KDTjljKuU',
        language: 'en',
        components: 'country:us',
      }}
      
    />
  );
};
 
export default GooglePlacesInput;


const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      ...StyleSheet.absoluteFillObject,
      
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    searchBox: {
      position:'absolute', 
      marginTop: Platform.OS === 'ios' ? 40 : 20, 
      flexDirection:"row",
      backgroundColor: '#fff',
      width: '90%',
      alignSelf:'center',
      borderRadius: 5,
      padding: 10,
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
   