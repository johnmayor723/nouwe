import {combineReducers } from 'redux'
import userReducer from './users'
import HomeReducer from './home'


 const RootReducer = combineReducers({
         userReducer,
         HomeReducer
    });


export default RootReducer