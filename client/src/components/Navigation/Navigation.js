import React from 'react';
import { StyleSheet, Text, View, Button, Easing, headerleft } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Icons} from 'react-native-vector-icons';

import Icon from 'react-native-vector-icons/Ionicons';

import About from '../screens/About';
import Offers from '../screens/Offers';
import Profile from '../screens/Profile';
import MyBookings from '../screens/MyBookings';
import Wallet from '../screens/MyWallet';
import CustomerService from '../screens/CustomerService';
import Notifications from '../screens/Notifications';

import Welcome from '../screens/Welcome';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
/* const LoginStack = createStackNavigator();
const RegisterStack = createStackNavigator(); */
const AboutStack = createStackNavigator();
const OfferStack = createStackNavigator();
const MyProfileStack = createStackNavigator();
const MyBookingsStack = createStackNavigator();
const MyWalletStack = createStackNavigator();
const CustomerServiceStack = createStackNavigator();
const NotificationStack = createStackNavigator();

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
            title: 'Sukalpa Seva',
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

/* const LoginStackScreen = ({navigation}) => (
  
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
); */

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

const OfferStackScreen = ({navigation}) => (
  
  <OfferStack.Navigator        
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
    <OfferStack.Screen name="Offers"  component={Offers} 
      options={{
        title: 'Offers',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} 
          backgroundColor="#232f3e" color="#fff" 
          onPress={() => navigation.openDrawer()
          }>
          </Icon.Button >
        )
      }}          
    />
  </OfferStack.Navigator>      
);

const MyProfileStackScreen = ({navigation}) => (
  
  <MyProfileStack.Navigator        
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
    <MyProfileStack.Screen name="My Profile"  component={Profile} 
      options={{
        title: 'My Profile',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} 
          backgroundColor="#232f3e" color="#fff" 
          onPress={() => navigation.openDrawer()
          }>
          </Icon.Button >
        )
      }}          
    />
  </MyProfileStack.Navigator>      
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
    <MyBookingsStack.Screen name="My Bookings"  component={MyBookings} 
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


const MyWalletStackScreen = ({navigation}) => (
  
  <MyWalletStack.Navigator        
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
    <MyWalletStack.Screen name="My Wallet"  component={Wallet} 
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
  </MyWalletStack.Navigator>      
);


const CustomerServiceStackScreen = ({navigation}) => (
  
  <CustomerServiceStack.Navigator        
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
    <CustomerServiceStack.Screen name="My Wallet"  component={CustomerService} 
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
  </CustomerServiceStack.Navigator>      
);


const NotificationStackScreen = ({navigation}) => (
  
  <NotificationStack.Navigator        
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
    <NotificationStack.Screen name="My Wallet"  component={Notifications} 
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
  </NotificationStack.Navigator>      
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
        <Drawer.Screen name="About Us" component={AboutStackScreen} />
        <Drawer.Screen name="Offers" component={OfferStackScreen} />
        <Drawer.Screen name="My Profile" component={MyProfileStackScreen} />
        <Drawer.Screen name="My Orders/Bookings" component={MyBookingsStackScreen} />
        <Drawer.Screen name="My Wallet" component={MyWalletStackScreen} />
        <Drawer.Screen name="Customer Service" component={CustomerServiceStackScreen} />
        <Drawer.Screen name="Notifications" component={NotificationStackScreen} />
        {/* <Drawer.Screen name="Login" component={LoginStackScreen} />
        <Drawer.Screen name="Register" component={RegisterStackScreen} /> */}
        {/* <Drawer.Screen name="FAQ" component={FAQStackScreen} />
        <Drawer.Screen name="Help" component={HelpStackScreen} /> */}
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
