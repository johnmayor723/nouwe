// In App.js in a new project

import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import {setName } from '../reducers/home'

class Home extends Component {
  componentDidMount(){
    this.props.setName()
  }
  render(){

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Hello {this.props.name}</Text>
        </View>
      );
  }
}

const mapStateToProps = (state) => ({
  name : state.HomeReducer.name,
  user : state.userReducer.name
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setName,
  }, dispatch)
);

//export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Home);