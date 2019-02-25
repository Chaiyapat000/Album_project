import React ,{ Component } from 'react';
import { View, Text ,Button} from 'react-native';



export default class Detail extends Component{
    
    
    render(){
        const itemid=this.props.navigation.getParam('itemid', 'NO-ID');

        return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detail screen</Text>
            <Text>itemId: {JSON.stringify(itemid)}</Text>
            <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
                />
        </View>
        )
    }
}