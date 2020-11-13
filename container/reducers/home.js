import update from 'react-addons-update'
import constants from '../actions/actiontypes'
import {Dimensions }  from 'react-native'
import Geolocation from 'react-native-geolocation-service';




const { GET_CURRENT_LOCATION }= constants;

const {width, height} = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA

export function getCurrentLocation(){
    return (dispatch)=>{
        Geolocation.getCurrentPosition(
            (position)=>{
                dispatch({
                    type:GET_CURRENT_LOCATION,
                    payload:position
                })
            },
            (error)=> console.log(error.message),
            {enableHighAccuracy: true, timeout:2000, maximumAge:1000}
        )
        
    }
}

function handleGetCurrentlocation(state, action){
       return update(state, {
           region:{
               latitute: {$set:action.payload.coords.latitude},
               longitude: {$set:action.payload.coords.longitude},
               latitudeDelta:{$set:LATITUDE_DELTA},
               longitudeDelta:{$set:LONGITUDE_DELTA}
           }
       })
 }

const ACTION_HANDLERS ={
    
    GET_CURRENT_LOCATION : handleGetCurrentlocation
}

const  initialstate = {
    region : {}
}

const HomeReducer = (state =initialstate, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler?handler(state,action):state
}

export default HomeReducer;