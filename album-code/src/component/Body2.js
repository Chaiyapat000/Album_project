import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
//import Bodyshow from './Bodyshow';
import Bodyshow2 from './Bodyshow2';
import axios from 'axios';

export default class Body2 extends Component {
state = {
        body2: []
}
   // https://rallycoding.herokuapp.com/api/music_albums
componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ body2: response.data }));
}

render() {
    
    return (
        
        this.state.body2.map(p2 => (
             <View>
                <Bodyshow2 key={p2.title} data1={p2} />
            </View>
            )
        )
        
    );
}
}

