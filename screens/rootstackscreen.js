import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './splash'
import SignUpScreen from './signup'
import SignInScreen from './signin'

const Stack = createStackNavigator();


const  RootStackScreen = () => (
<Stack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
 }}>
    <Stack.Screen name="HOME" component={SplashScreen} 
       options={{ title: 'NOUWE' }}
    />
    <Stack.Screen name='signin' component={SignInScreen} />
    <Stack.Screen name="signup" component={SignUpScreen} />
</Stack.Navigator>

)
export default RootStackScreen;