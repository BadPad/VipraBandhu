import React from 'react';
import { StyleSheet, Text, View, Button, Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Register from '../screens/Register_Login/Register';
import Login from '../screens/Register_Login/Login';

import Welcome from '../screens/Welcome';

const Stack = createStackNavigator();

showHeaders = (route) => {
  console.log(route)
}

function getHeaderTitle(route) {
  const routeName = route.state ? route.state.routes[route.state.index].name : 'Welcome';
  
  switch(routeName) {
    case 'Welcome' || 'Register' || 'Login':
      return false
    default:
      return true
  }
}

shouldHeaderBeShowm = (route) => {
  const routeName = route.state ? route.state.routes[route.state.index].name : 'Welcome';

  switch(routeName) {
    case 'Welcome' || 'Register' || 'Login':
      return false
    default:
      return routeName
  }
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
        headerMode="float"
        animation="fade"
      >
        <Stack.Screen 
          options={({route}) => ({
            title: getHeaderTitle(route),
            headerShown: shouldHeaderBeShowm(route)
          })}
          name="Welcome" 
          component={Welcome} 
        />
        <Stack.Screen 
          options={({route}) => ({
            title: getHeaderTitle(route),
            headerShown: shouldHeaderBeShowm(route)
          })}
          name="Register" 
          component={Register} 
        />
        <Stack.Screen 
          options={({route}) => ({
            title: getHeaderTitle(route),
            headerShown: shouldHeaderBeShowm(route)
          })}
          name="Login" 
          component={Login} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
