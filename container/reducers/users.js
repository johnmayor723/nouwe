import {SET_CURRENT_USER} from '../actions/actiontypes'

const initialState = {
    isAUthenticated :false,
    user: {}
}


const userReducer = (state= initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: Object.keys(action.user).length > 0,
                user: action.user
            }
        default:
            return state    
    }
}

export default userReducer;