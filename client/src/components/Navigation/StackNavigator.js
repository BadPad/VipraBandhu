import React, {Component} from 'react'; 
import { createAppContainer, DrawerActions } from 'react-navigation'; 
import { createStackNavigator } from '@react-navigation/stack';
import Sc_Welcome from '../screens/Welcome'; 
import Sc_Login from '../screens/Register_Login/Login'; 
import Sc_Register from '../screens/Register_Login/Register'; 

const MyStackNavigator = createStackNavigator({ 
    Home: { screen: Sc_Welcome }, 
    Sc_Login: { screen: Sc_Login }, 
    Sc_Register: { screen: Sc_Register } 
},
{ 
    initialRouteName: 'Home', 
    defaultNavigationOptions: {
        headerStyle: {height:55, backgroundColor: 'orange'},
        headerTitleStyle: {fontWeight:'bold', color:'white'}
    }
}
); 

const AppContainer = createAppContainer(MyStackNavigator); 

export default class StackNavigator extends Component{
    render() { 
        return <AppContainer screenProps={{openDraw: () => this.props.navigation.dispatch(DrawerActions.openDrawer())}} />; 
    }
}
