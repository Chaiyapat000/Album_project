import { createStackNavigator } from 'react-navigation';
import Rootcompoment from '../component/Rootcomponent';
import Albumlist from '../component/Albumlist';
import Detail from '../component/Detail'; 
import Body from '../component/Body';
import Bodyshow from '../component/Bodyshow';

const Rootstack= createStackNavigator({
    Home:{
        screen : Rootcompoment,
        navigationOptions: {
            headerTitle: 'Home', // เพิ่ม title ให้ส่วนหัวเป้นคำว่า Home
            headerStyle: {
                backgroundColor: '#69c790',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
              },
        },
        },
    
    Detail:{
        screen:Detail,
        navigationOptions: {
            headerTitle: 'Detail', // เพิ่ม title ให้ส่วนหัวเป้นคำว่า Home
        }
    },
    Albumlist:{
    screen:Albumlist,
    navigationOptions: {
        headerTitle: 'Albumlist', // เพิ่ม title ให้ส่วนหัวเป้นคำว่า Home
    },
    }, 
    Body:{
        screen:Body,
        navigationOptions: {
            headerTitle: 'Albumlist', 
        },
    },
    Bodyshow:{
        screen:Bodyshow,
        navigationOptions: {
            headerTitle: 'Album', 
        },
    }},

    {
        initialRouteName: 'Home',
    }
);

export default Rootstack;