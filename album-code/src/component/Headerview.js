import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Header,
} from 'react-native';


export default class Headerview extends Component {
  
    render() {
      return (
      /*  <View>
         centerComponent={{ text: this.props.name, style: { color: '#fff' } }}/>
        </View> */
        <View> 
            <Text style={styles.header} >
              {this.props.name}
            
            </Text>
            <View style={{ width: 1000, height: 20, backgroundColor: '#4c6eb6'}} />
         </View> 
        
      );
    }
  }

  

  const styles = StyleSheet.create({
    header: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#656565',
      height:100,
      backgroundColor: '#4c91b6'
    },
  });
  