import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { logoutUser } from '../../redux/actions/authActions';

import Icon from 'react-native-vector-icons/Ionicons';

import About from '../screens/About';
import Login from '../screens/Register_Login/Login';
import Register from '../screens/Register_Login/Register';
import Offers from '../screens/Offers';
import Profile from '../screens/Profile';
import MyBookings from '../screens/MyBookings';
import Wallet from '../screens/MyWallet';
import CustomerService from '../screens/CustomerService';
import Notifications from '../screens/Notifications';
import Welcome from '../screens/Welcome';
import ServicesList from '../screens/Services/ServicesList';
import Service from '../screens/Services/Service';

const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();
const RegisterStack = createStackNavigator();
const AboutStack = createStackNavigator();
const OfferStack = createStackNavigator();
const MyProfileStack = createStackNavigator();
const MyBookingsStack = createStackNavigator();
const MyWalletStack = createStackNavigator();
const CustomerServiceStack = createStackNavigator();
const NotificationStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (

  <HomeStack.Navigator
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
    <HomeStack.Screen name="Welcome" component={Welcome}
      options={{
        title: 'Sukalpa Seva',
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
              onPress={() => navigation.navigate('MyBookings')}
            >
            </Icon >
            <Icon style={styles.iconNotifications} name="ios-notifications" size={25}
              backgroundColor="#D63031" color="#fff"
              onPress={() => navigation.navigate('Notifications')}
            >
            </Icon >

          </View>
        )
      }}
    />
    <HomeStack.Screen name="ServicesList" component={ServicesList}
      options={{
        title: 'Sukalpa Seva',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      }}
    />
    <HomeStack.Screen name="Service" component={Service}
      options={{
        title: 'Sukalpa Seva',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      }}
    />
  </HomeStack.Navigator>
);

const LoginStackScreen = ({ navigation }) => (

  <LoginStack.Navigator
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
    <LoginStack.Screen name="Login" component={Login}
      options={{
        title: 'Login',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      }}
    />
  </LoginStack.Navigator>
);

const RegisterStackScreen = ({ navigation }) => (

  <RegisterStack.Navigator
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
    <RegisterStack.Screen name="Register" component={Register}
      options={{
        title: 'Register',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      }}
    />
  </RegisterStack.Navigator>
);

const AboutStackScreen = ({ navigation }) => (

  <AboutStack.Navigator
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
    <AboutStack.Screen name="AboutUs" component={About}
      options={{
        title: 'About Us',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      }}
    />
  </AboutStack.Navigator>
);

const OfferStackScreen = ({ navigation }) => (

  <OfferStack.Navigator
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
    <OfferStack.Screen name="Offers" component={Offers}
      options={{
        title: 'Offers',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      }}
    />
  </OfferStack.Navigator>
);

const MyProfileStackScreen = ({ navigation }) => (

  <MyProfileStack.Navigator
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
    <MyProfileStack.Screen name="MyProfile" component={Profile}
      options={{
        title: 'My Profile',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      }}
    />
  </MyProfileStack.Navigator>
);

const MyBookingsStackScreen = ({ navigation }) => (

  <MyBookingsStack.Navigator
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
    <MyBookingsStack.Screen name="MyBookings" component={MyBookings}
      options={{
        title: 'My Bookings',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      }}
    />
  </MyBookingsStack.Navigator>
);


const MyWalletStackScreen = ({ navigation }) => (

  <MyWalletStack.Navigator
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
    <MyWalletStack.Screen name="MyWallet" component={Wallet}
      options={{
        title: 'My Wallet',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        ),
        headerRight: () => (
          <>
            {/* <Icon.Button name="ios-cart" size={25} 
          backgroundColor="#232f3e" color="#fff" >
          </Icon.Button > */}
            <Icon.Button name="ios-notifications" size={25}
              backgroundColor="#D63031" color="#fff" >
            </Icon.Button >
          </>
        )
      }}
    />
  </MyWalletStack.Navigator>
);


const CustomerServiceStackScreen = ({ navigation }) => (

  <CustomerServiceStack.Navigator
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
    <CustomerServiceStack.Screen name="CustomerServicet" component={CustomerService}
      options={{
        title: 'Customer Service',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      }}
    />
  </CustomerServiceStack.Navigator>
);


const NotificationStackScreen = ({ navigation }) => (

  <NotificationStack.Navigator
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
    <NotificationStack.Screen name="Notifications" component={Notifications}
      options={{
        title: 'Notifications',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#D63031" color="#fff"
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

  switch (routeName) {
    case 'Welcome' || 'Register' || 'Login':
      return false
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


function Navigation({ auth, logoutUser }) {
  const { isAuthenticated } = auth;

  const signOut = () => {
    logoutUser();
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="AboutUs" component={AboutStackScreen} />
        <Drawer.Screen name="Offers" component={OfferStackScreen} />
        {!isAuthenticated ? (
          <>
            <Drawer.Screen name="Login" component={LoginStackScreen} />
            <Drawer.Screen name="Register" component={RegisterStackScreen} />
          </>
        ) : (
            <>
              <Drawer.Screen name="MyProfile" component={MyProfileStackScreen} />
              <Drawer.Screen name="MyOrders/Bookings" component={MyBookingsStackScreen} />
              <Drawer.Screen name="MyWallet" component={MyWalletStackScreen} />
              <Drawer.Screen name="SignOut" component={signOut} />
            </>
          )}
        <Drawer.Screen name="Notifications" component={NotificationStackScreen} />
        <Drawer.Screen name="CustomerService" component={CustomerServiceStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = { logoutUser }

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

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
