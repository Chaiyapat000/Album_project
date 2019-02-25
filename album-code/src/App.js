/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  ActivityIndicator,
  Image,
  ScrollView,
  Text
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {applyMiddleware} from "redux";
import {createLogger} from 'redux-logger'
import {createStackNavigator} from 'react-navigation';
import Headerview from './component/Headerview';
import  Body from './component/Body';
import reducers from './reducers';
//import  Body2 from './component/Body2';
import Rootstack from './Appnavigate/Rootstack';



export default class App extends Component {

  render() {
    return (
     <Provider store={createStore(reducers, applyMiddleware(createLogger()))}>
      { /* <Provider store={createStore(reducers)}>   
       <ScrollView>
        <View  style={{ backgroundColor: 'powderblue'}}>
          <View style={styles.container}>           
            <Headerview name="Select Albums"/>
            <Body/>
          </View>
        </View> 
      </ScrollView> */ } 
      <Rootstack/>  
    </Provider> 
     
        
    
      );
    }
}




 const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop :5
  },
}); 
