import * as React from 'react';
import { View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


function SignInScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SignUp Screen</Text>
      <Button
        title="sign up"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />

    </View>
  );
}

export default SignInScreen