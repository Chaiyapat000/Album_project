import React ,{ Component } from 'react';
import { View, Text,Button } from 'react-native';



export default class Rootcompoment extends Component{
    render(){
        return(
        <View style={{ flex: 1, alignItems: 'center',justifyContent: 'center' }}>
            <Text style={{fontSize :30}}>select music</Text>
            <Button
            title="Go to Home"
            onPress={() => this.props.navigation.goBack()}
            />
        </View>
        )
    }
}