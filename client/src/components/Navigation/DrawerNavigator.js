import React, {Component} from 'react'; 
import { createDrawerNavigator, createAppContainer } from 'react-navigation'; 
import StackNavigator from './StackNavigator'; 
import Sc_Welcome1 from '../screens/Welcome'; 
import Sc_Login1 from '../screens/Register_Login/Login'; 
import Sc_Register1 from '../screens/Register_Login/Register'; 

const MyDrawerNavigator = createDrawerNavigator({ 
    Home: { screen: StackNavigator }, 
    Sc_Login: { screen: Sc_Login1 }, 
    Sc_Register: { screen: Sc_Register1 }
},
{ 
    initialRouteName: 'Home', 
    drawerWidth: 300, 
    drawerPosition: 'left', 
}
); 

const AppContainer = createAppContainer(MyDrawerNavigator); 

export default class DrawerNavigator extends Component{
    render() { 
        return <AppContainer />; 
    }
}
