import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Button
} from 'react-native';
import Bodyshow from './Bodyshow';
import Buttonapp from './Buttonapp';
import {albumset,sendUrl} from '../actions/index';
import { connect } from 'react-redux';
//import { Table, Row, Rows } from 'react-native-table-component';

class Body extends Component {
state = {
      Body: []
}
// https://rallycoding.herokuapp.com/api/music_albums
componentDidMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseJson) => this.setState({Body:responseJson}))
  }
componentDidUpdate(){
    this.props.albumset(this.state.Body)
}



render() {
    return (
         /*  this.state.Body.map((p) =>( */
          this.props.updateAlbum.map((p) =>(
            <View  key={p.title} style={{ alignItems: 'center',justifyContent: 'center' }}>
              {/* <Bodyshow  data={p}/>  */}
                  <Buttonapp style={{fontSize :25}} onPress={() => this.props.navigation.navigate('Bodyshow',{albumdata:p})}>
                    {p.title}
                  </Buttonapp> 
              {/*<Buttonapp onPress={() => {Linking.openURL(p.url); this.props.sendUrl(p.url)}}>
                  Buy
                </Buttonapp>*/}
            </View>
            
        ))        
        
    );
  }
}



const mapStateToProps = (state) => {
  // console.log('------------------------------------'+state.album_in_store)
  // console.log('*****************************'+state.url_in_store)
  
  return {
      updateAlbum : state.album_in_store
      
  }
}
const mapDispatchToProps= dispatch =>({
      albumset : (Body) => dispatch(albumset(Body)),
      sendUrl : (Body) =>dispatch(sendUrl(Body))
    });

export default connect(mapStateToProps,mapDispatchToProps)(Body)

  

  