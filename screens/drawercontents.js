import React, { useState, useEffect} from 'react';
import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../components/context';
import AsyncStorage from '@react-native-community/async-storage';
import { TabActions } from '@react-navigation/native';
import axios from 'axios';

export function DrawerContent(props) {
  const paperTheme = useTheme();

  const {signOut, toggleTheme} = React.useContext(AuthContext);
  const [data, setData] = ([
    {id:1, name: "dio", email: "a@abc.com", avatar:"https://images.app.goo.gl/tSWm3p8kswjgAntz5"},
    {id:2, name: "carter", email: "b@abc.com", avatar:"avartarimage2"},
    {id:3, name: "damien", email: "c@abc.com", avatar:"avartarimage3"}
  ])


// const [email,setEmail] = useState("loading")

// useEffect(() => {
//   setTimeout(async() => {
//     // setIsLoading(false);
//     let userToken;
//     userToken = null;
//     try {
//       userToken = await AsyncStorage.getItem('userToken');
//     } catch(e) {
//       console.log(e);
//     }
   
//   }, 1000);
// }, []);

// const [email,setEmail] = useState("loading")
// const Boiler = async ()=>{
//  const token = await AsyncStorage.getItem("token")
//  fetch('http://192.168.1.241:1337',{
//  headers:new Headers({
//  Authorization:"Bearer "+token
//  })
//  }).then(res=>res.json())
//  .then(data=>{
//    console.log(data)
//   //  setEmail(data.email)
//  }
//  )
// }
// useEffect(()=>{
// Boiler()
// },[])

// Request API.
const token = 'YeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTU5OTA0MDI2MywiZXhwIjoxNjAxNjMyMjYzfQ.u7-NwW2xJCLb0FYMn_UaY9FlwiyYopVVuoSd0U_mCqY';
axios
  .get('http://192.168.1.241:1337/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(response => {
    // Handle success.
    console.log('Data: ', response.data);
    
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });

  

 
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/img/bgReg.png')}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <ImageBackground
            style={styles.userInfoSection}
            source={require('../assets/img/drawerImage.png')}>
            <View style={{flexDirection: 'row', marginTop: 70}}>
              <Avatar.Image
                source={data.avatar}
                size={70}
              />
             
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  Carter
                </Paragraph>
                <Caption style={styles.caption}> dio</Caption>
              </View>
              
            </View>
          </ImageBackground>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Users"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            
            />
             <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Visual Agent"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
           
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Messages"
              onPress={() => {
                props.navigation.navigate('BookmarkScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="settings-outline" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate('SettingScreen');
              }}
            />
           
             <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
          </Drawer.Section>
          
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
       
        <Image
            style={styles.userInfoSection}
            source={require('../assets/img/NouweLogo.png')} style={{height:50, width: 150, marginLeft:55}}/>
      </Drawer.Section>
    </ImageBackground>
  );

  
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    marginTop: -50,
    height:180
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color:'#fff'
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color:'#fff'
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
    color:'#fff'
  },
  drawerSection: {
    marginTop: 15,
    
    
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
