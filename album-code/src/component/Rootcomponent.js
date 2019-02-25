import React ,{ Component } from 'react';
import { View, Text,Button,StyleSheet, } from 'react-native';



export default class Rootcompoment extends Component{
    render(){
        return(
        <View style={{ flex: 1, alignItems: 'center',justifyContent: 'center' }} >
            <View style={styles.separator}>
            <Text style={{fontSize :30}}>Welcome to music store</Text>
            <View style={{marginBottom:5}}>
                <Button
                title="Go to Albumlist"
                onPress={() => this.props.navigation.navigate('Body')}/>
            </View>
            <View style={{marginBottom:5}}>
            <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.navigate('Detail',{itemid:600})}/>
            </View>
            </View>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    separator: {
      borderBottomColor: '#bbb',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });