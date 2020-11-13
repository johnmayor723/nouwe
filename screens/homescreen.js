import * as React from 'react';
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
import GooglePlacesInput 
from './googleplaceinputscreen';
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import MapView, { PROVIDER_GOOGLE , Marker} from 'react-native-maps';
import {getCurrentLocation} from '../container/reducers/home'


class HomeScreen extends React.Component{

  componentDidMount(){
    this.props.getCurrentLocation()
  }
render() {
  
  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  }
  const markerRegion = {
    latitude: this.props.region.latitude,
    longitude: this.props.region.longitude
    
  }
  const imgMarker = require('../assets/img/person-marker.png')

  
    return (
      <View style={styles.container}>       
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={this.props.region}
        
      >
        <Marker
        coordinate={markerRegion}
        image={imgMarker}
        />
        
        <GooglePlacesInput/>
      
      
      </MapView>
      <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {registerHandle(data.email,data.password)}}>
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
                  Book A Tour
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
      </View>
      );
                }    
  }


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    ...StyleSheet.absoluteFillObject,
    
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  signIn: {
    bottom:5,
    right:0,
    width: 370,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
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
 
 const mapStateToprops = (state) =>({
   region : state.HomeReducer.region,
   user : state.userReducer.user
 })
 const mapDispatchToProps={
   getCurrentLocation
 }
 /*const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getCurrentLocation,
  }, dispatch)
);*/

export default connect(mapStateToprops, mapDispatchToProps)(HomeScreen);