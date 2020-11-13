import * as React from 'react';
import { View, Text, Button} from 'react-native';


function SplashScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text><Button
        title="sign up"
        onPress={() => navigation.navigate('signup')}
      />
      <Button
        title="sign in"
        onPress={() => navigation.navigate('signin')}
      />

    </View>
  );
}
 export default SplashScreen
