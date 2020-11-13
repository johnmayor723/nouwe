import 'react-native-gesture-handler';
// In App.js in a new project

import * as React from 'react';
import {View} from 'react-native'
import {useState, useEffect} from 'react'
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer"
//import Home from './container/screens/home'


import MainTabScreen from './screens/maintabscreen'

import RootStackScreen from './screens/rootstackscreen'
import { ActivityIndicator } from 'react-native-paper';

const Drawer = createDrawerNavigator()

function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    //console.log(user)
    if (initializing) setInitializing(false);
    return(user)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //console.log(subscriber)
    return subscriber; // unsubscribe on unmount
  }, []);
  
  /*if(initializing) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }*/
    
  return (

    

    <NavigationContainer>
     { !user?(
           <RootStackScreen />
           
     ) :
      (<Drawer.Navigator> 
        <Drawer.Screen name='OVERVIEW' component={MainTabScreen}/>
      </Drawer.Navigator>)
    }
    </NavigationContainer>
  );
}

export default App;