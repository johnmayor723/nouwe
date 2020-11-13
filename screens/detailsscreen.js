import * as React from 'react';
import { Button, View, Text } from 'react-native';


function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>details Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default DetailsScreen;