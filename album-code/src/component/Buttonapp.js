import React, { Component } from 'react';
import { Alert, 
        Button, 
        StyleSheet, 
        View,
        } from 'react-native';


/*export default class Buttonapp extends Component{
    
    /*handleClick = () => {
        Linking.canOpenURL(this.props.urllink).then(supported => {
          if (supported) {
            Linking.openURL(this.props.urllink);
          } else {
            console.log("Don't know how to open URI: " + this.props.urllink);
          }
        });
      };

render(){
    return(
         <Button
            //onPress={onPress}
            title="Buy Now"
            color="#841584"
            size={50}
          />

       
        );
    }
}*/


const Buttonapp = ({ onPress, children }) => {
    //const { buttonStyle, textStyle } = styles;
    return (

    <View style={styles.buttonstyle}> 
        <Button onPress={onPress} title={children} color='#8b699e' />
     </View>  
    );
  };

   const styles = StyleSheet.create({
    buttonstyle: {
      width:400,
      height:50 ,
      margin: 0,
      marginTop :2
    },
  });   

export default Buttonapp;
