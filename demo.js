import 'react-native-gesture-handler';
// In App.js in a new project

import * as React from 'react';
import {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer"
//import Home from './container/screens/home'


import MainTabScreen from './screens/maintabscreen'

import RootStackScreen from './screens/rootstackscreen'

const Drawer = createDrawerNavigator()

function App() {
  return (
    <NavigationContainer>
           <RootStackScreen />
      {/*
      <Drawer.Navigator> 
        <Drawer.Screen name='OVERVIEW' component={MainTabScreen}/>
      </Drawer.Navigator>
      */}
    </NavigationContainer>
  );
}

export default App;