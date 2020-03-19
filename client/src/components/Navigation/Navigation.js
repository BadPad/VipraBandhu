import React from 'react';
import { StyleSheet, Text, View, Button, Easing, headerleft } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Icons} from 'react-native-vector-icons';

import Icon from 'react-native-vector-icons/Ionicons';

import Register from '../screens/Register_Login/Register';
import Login from '../screens/Register_Login/Login';
import About from '../screens/About';
import FAQ from '../screens/FAQ';
import Help from '../screens/Help';

import Welcome from '../screens/Welcome';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();
const RegisterStack = createStackNavigator();
const AboutStack = createStackNavigator();
const FAQStack = createStackNavigator();
const HelpStack = createStackNavigator();
const MyBookingsStack = createStackNavigator();

const Drawer = createDrawerNavigator();



const HomeStackScreen = ({navigation}) => (
  
     <HomeStack.Navigator        
        screenOptions={{
          headerStyle:{
            backgroundColor: '#232f3e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }}
      >
        <HomeStack.Screen name="Welcome"  component={Welcome} 
          options={{
            title: 'Vipra Bandhu',
            headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} 
              backgroundColor="#232f3e" color="#fff" 
              onPress={() => navigation.openDrawer()
              }>
              </Icon.Button >
            )
          }}
        />
      </HomeStack.Navigator>     
);

const LoginStackScreen = ({navigation}) => (
  
      <LoginStack.Navigator        
        screenOptions={{
          headerStyle:{
            backgroundColor: '#232f3e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }}
      >
        <LoginStack.Screen name="Login"  component={Login} 
          options={{
            title: 'Login',
            headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} 
              backgroundColor="#232f3e" color="#fff" 
              onPress={() => navigation.openDrawer()
              }>
              </Icon.Button >
            )
          }}          
        />
      </LoginStack.Navigator>      
);

const RegisterStackScreen = ({navigation}) => (
  
  <RegisterStack.Navigator        
    screenOptions={{
      headerStyle:{
        backgroundColor: '#232f3e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}
  >
    <RegisterStack.Screen name="Register"  component={Register} 
      options={{
        title: 'Register',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} 
          backgroundColor="#232f3e" color="#fff" 
          onPress={() => navigation.openDrawer()
          }>
          </Icon.Button >
        )
      }}          
    />
  </RegisterStack.Navigator>      
);

const AboutStackScreen = ({navigation}) => (
  
  <AboutStack.Navigator        
    screenOptions={{
      headerStyle:{
        backgroundColor: '#232f3e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}
  >
    <AboutStack.Screen name="About US"  component={About} 
      options={{
        title: 'About Us',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} 
          backgroundColor="#232f3e" color="#fff" 
          onPress={() => navigation.openDrawer()
          }>
          </Icon.Button >
        )
      }}          
    />
  </AboutStack.Navigator>      
);

const FAQStackScreen = ({navigation}) => (
  
  <FAQStack.Navigator        
    screenOptions={{
      headerStyle:{
        backgroundColor: '#232f3e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}
  >
    <FAQStack.Screen name="FAQs"  component={About} 
      options={{
        title: 'FAQs',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} 
          backgroundColor="#232f3e" color="#fff" 
          onPress={() => navigation.openDrawer()
          }>
          </Icon.Button >
        )
      }}          
    />
  </FAQStack.Navigator>      
);

const HelpStackScreen = ({navigation}) => (
  
  <HelpStack.Navigator        
    screenOptions={{
      headerStyle:{
        backgroundColor: '#232f3e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}
  >
    <HelpStack.Screen name="Help"  component={About} 
      options={{
        title: 'Help',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} 
          backgroundColor="#232f3e" color="#fff" 
          onPress={() => navigation.openDrawer()
          }>
          </Icon.Button >
        )
      }}          
    />
  </HelpStack.Navigator>      
);

const MyBookingsStackScreen = ({navigation}) => (
  
  <MyBookingsStack.Navigator        
    screenOptions={{
      headerStyle:{
        backgroundColor: '#232f3e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}
  >
    <MyBookingsStack.Screen name="My Bookings"  component={About} 
      options={{
        title: 'My Bookings',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} 
          backgroundColor="#232f3e" color="#fff" 
          onPress={() => navigation.openDrawer()
          }>
          </Icon.Button >
        )
      }}          
    />
  </MyBookingsStack.Navigator>      
);

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
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen}  />
        <Drawer.Screen name="Login" component={LoginStackScreen} />
        <Drawer.Screen name="Register" component={RegisterStackScreen} />
        <Drawer.Screen name="My Bookings" component={MyBookingsStackScreen} />
        <Drawer.Screen name="FAQ" component={FAQStackScreen} />
        <Drawer.Screen name="Help" component={HelpStackScreen} />
        <Drawer.Screen name="About" component={AboutStackScreen} />
      </Drawer.Navigator>
      {/* <Stack.Navigator
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
      </Stack.Navigator> */}
    </NavigationContainer>
  )
}

export default Navigation;