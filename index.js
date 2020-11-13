/**
 * @format
 */
import React from 'react'
import {Provider} from 'react-redux'
import {AppRegistry} from 'react-native';
import App1 from './App';
import {name as appName} from './app.json';
import Store from './container/store';

const store = Store();

const ReduxApp = () => (
  <Provider store={store}>
    <App1 />
  </Provider>
  )

AppRegistry.registerComponent(appName, () => ReduxApp);