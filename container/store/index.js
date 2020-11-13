import {createStore , applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducer from '../reducers/index'


const log = createLogger({diff: true, collapsed:true});

export default (initialState ={}) =>{
    const middleware = [thunk,log];
    const enhancers =[];

    const Store = createStore(
        RootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(...middleware),
            ...enhancers
        )
    );
    return Store;
}