import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
} from 'react-native';
import Titlesection from './Titlesection';
import Buttonapp from './Buttonapp';


/*const Bodyshow =() =>{
    return(
        <View>
            <Text>  
                {this.props.data}
            </Text>
        </View>    
    );
};
export default Bodyshow;*/


export default class Bodyshow extends Component{

render(){

    const { navigation } = this.props;
    const data = navigation.getParam('albumdata', 'NO-ID');
        return(
            <View style={{ alignItems: 'center',justifyContent: 'center' }}>
                <Titlesection> 
                    <Image source={{uri: data.thumbnail_image}}
                        style={{width: 75, height: 75, marginBottom:5}} />
                    <View style={{flexDirection:'column',padding:3,paddingLeft:10}}>
                        <Text style={styles.textstyl}> 
                            {data.title}
                        </Text>
                        <Text style={styles.textstyl}> 
                            {data.artist}
                        </Text>
                    </View>
                    
                </Titlesection> 
                <Image source={{uri: data.image}}
                        style={{width: 400, height: 400}} />
                <Buttonapp onPress={() => {Linking.openURL(data.url); this.props.sendUrl(data.url)}}>
                        Buy
                </Buttonapp>
            </View>
            );
        }



}


const styles = StyleSheet.create({
    textstyl: {
      marginTop: 0,
      fontSize: 20,
      textAlign: 'left',
      color: '#656565'
    }
  });