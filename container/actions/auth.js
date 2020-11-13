import {SET_CURRENT_USER} from './actiontypes'
import apiCall from '../services/api'

export function setCurrentUser(user){
    return {
        type :SET_CURRENT_USER,
        user
    }
}

export function signUpUser(email,password){
    const user = {
        email,
        password
    }
    console.log(user + 'signed up') 
}

/*export function signUpUser (email,password){

    //const {email,password} = userData
    dispacth => {
        return new Promise((resolve, reject)=>{
            return apiCall('post', `/api/auth/signup`,{email,password})
            .then(({token, ...user}))
            localStorage.setItem('jwtToken', token)
            //dispatch(setCurrentUser(user))
            //resolve()
            console.log(user)
        })
    }
}*/

export function signInUser (userData){
    dispacth => {
        return new Promise((resolve, reject)=>{
            return apiCall('post', `/api/auth/signin`,userData)
            .then(({token, ...user}))
            localStorage.setItem('jwtToken', token)
            dispatch(setCurrentUser(user))
            resolve()
        })
    }
}