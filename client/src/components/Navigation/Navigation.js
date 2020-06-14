import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

import About from '../screens/About';
import Login from '../screens/Register_Login/Login';
import Register from '../screens/Register_Login/Register';
import OTPConfirmation from '../screens/Register_Login/OTPConfirmation';
import Offers from '../screens/Offers';
import Profile from '../screens/Profile';
import MyBookings from '../screens/MyBookings';
import Wallet from '../screens/MyWallet';
import CustomerService from '../screens/CustomerService';
import Notifications from '../screens/Notifications';
import Welcome from '../screens/Welcome';
import ServicesList from '../screens/Services/ServicesList';
import Service from '../screens/Services/Service';
import BookingCart from '../screens/Booking_Cart/BookingCart';
import BookingsList from '../screens/Bookings/BookingsList';
import Booking from '../screens/Bookings/Booking';
import DeliveryOptions from '../screens/Delivery_Options/DeliveryOptions';
import DrawnContent from './DrawnContent';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

function getHeaderTitle(route) {
  const routeName = route.name? route.name : 'Welcome';
  // console.log(route)
  const routeParams = route.params
  switch (routeName) {
    case 'Welcome':
      return 'Sukalpa Seva'
    case 'ServicesList':
      return routeParams.category === 'purohit' ? 'Pooja Service List' : routeParams.category === 'Catering' ? 'Catering Service List' : null
    case 'Service':
      return routeParams.id.serviceName
    case 'BookingCart':
      return 'Booking Cart'
    case 'DeliveryOptions':
      return 'Address & Time Confirmation'
    case 'AboutUs':
      return 'About Us'
    case 'Login':
      return 'Login'
    case 'Register':
      return 'Register'
    case 'Offers':
      return 'Offers'
    case 'MyProfile':
      return 'My Profile'
    case 'BookingsList':
      return 'My Bookings'
    case 'MyWallet':
      return 'My Wallet'
    case 'CustomerService':
      return 'Customer Service'
    case 'Notifications':
      return 'Notifications'
    default:
      return true
  }
}

shouldHeaderBeShowm = (route) => {
  const routeName = route.state ? route.state.routes[route.state.index].name : 'Welcome';

  switch (routeName) {
    case 'Welcome' || 'Register' || 'Login':
      return false
    default:
      return routeName
  }
}

const StackNavigation = ({ navigation }) => (
  <Stack.Navigator
    initialRouteName="Welcome"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#D63031',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}
  >
    <Stack.Screen name="Welcome" component={Welcome}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        ),
        headerRight: () => (
          <View style={styles.headerRightIcons}>
            <Icon style={styles.iconCart} name="ios-cart" size={25}
              backgroundColor="#D63031" color="#fff"
              onPress={() => navigation.navigate('BookingCart')}
            >
            </Icon >
            <Icon style={styles.iconNotifications} name="ios-notifications" size={25}
              backgroundColor="#D63031" color="#fff"
              onPress={() => navigation.navigate('Notifications')}
            >
            </Icon >

          </View>
        )
      })}
    />
    <Stack.Screen name="ServicesList" component={ServicesList}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        ),
        headerRight: () => (
          <View style={styles.headerRightIcons}>
            <Icon style={styles.iconCart} name="ios-cart" size={25}
              backgroundColor="#D63031" color="#fff"
              onPress={() => navigation.navigate('BookingCart')}
            >
            </Icon >
            <Icon style={styles.iconNotifications} name="ios-notifications" size={25}
              backgroundColor="#D63031" color="#fff"
              onPress={() => navigation.navigate('Notifications')}
            >
            </Icon >

          </View>
        )
      })}
    />
    <Stack.Screen name="Service" component={Service}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        ),
        headerRight: () => (
          <View style={styles.headerRightIcons}>
            <Icon style={styles.iconCart} name="ios-cart" size={25}
              backgroundColor="#D63031" color="#fff"
              onPress={() => navigation.navigate('BookingCart')}
            >
            </Icon >
            <Icon style={styles.iconNotifications} name="ios-notifications" size={25}
              backgroundColor="#D63031" color="#fff"
              onPress={() => navigation.navigate('Notifications')}
            >
            </Icon >

          </View>
        )
      })}
    />
    <Stack.Screen name="BookingCart" component={BookingCart} 
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="DeliveryOptions" component={DeliveryOptions}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="AboutUs" component={About}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="Login" component={Login}
      options={({route}) => ({
        headerShown: false,
        title: getHeaderTitle(route),
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="Register" component={Register}
      options={({route}) => ({
        headerShown: false,
        title: getHeaderTitle(route),
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="OTPConfirmation" component={OTPConfirmation}
      options={({route}) => ({
        headerShown: false,
        title: getHeaderTitle(route),
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="Offers" component={Offers}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="MyProfile" component={Profile}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="BookingsList" component={BookingsList}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="MyWallet" component={Wallet}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        ),
        headerRight: () => (
          <Icon.Button name="ios-notifications" size={25}
            backgroundColor="#D63031" color="#fff" >
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="CustomerService" component={CustomerService}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="Notifications" component={Notifications}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      })}
    />
  </Stack.Navigator>
)

function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home" 
        drawerContent={props => <DrawnContent {...props} />}
      >
        <Drawer.Screen name="Screens" component={StackNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  headerRightIcons: {
    flexDirection: "row"
  },
  iconNotifications:{
    paddingLeft:20,
    paddingRight:15
  },
  iconCart: {

  }
})

export default Navigation;
