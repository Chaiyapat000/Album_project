import React from 'react';
import {View,StyleSheet} from 'react-native';

const titlesection = (props)=>{
    return(
        <View style={styles.titlestyl}>
            {props.children}
        </View>
    );
};



const styles = StyleSheet.create({
    titlestyl: {
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        borderWidth: 1,
        padding: 3,

    }
});

export default titlesection;