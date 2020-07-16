import React from 'react';
import { View, StyleSheet,Text, TouchableOpacity } from 'react-native';
import { store } from '../../store';

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
import ProfileEdit from '../screens/ProfileEdit';
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
import ChooseAddress from '../screens/Delivery_Options/ChooseAddress';
import AddNewAddress from '../screens/Delivery_Options/AddNewAddress';
import Payment from '../screens/Payment';
import TransactionInfo from '../screens/TransactionInfo';
import DrawnContent from './DrawnContent';
import NotificationIcon from '../Reusable_Component/NotificationIcon';
import BookingCartIcon from './BookingCartIcon';
import FaqIcon from './FaqIcon';
import Faq from '../screens/Faq';
import { App_Color, Font_Name_Regular, Font_Name_Bold } from '../Reusable_Component/ConstantValues';

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
      return routeParams.category === 'purohit' ? 'Pooja Service List' : routeParams.category === 'catering' ? 'Catering Service List' : null
    case 'Service':
      return routeParams.id.serviceName
    case 'BookingCart':
      return 'Booking Cart'
    case 'DeliveryOptions':
      return 'Address and Date & Time'
    case 'ChooseAddress':
      return 'Choose Address'
    case 'AddNewAddress':
      return 'Add Address'
    case 'Payment':
      return 'Payment'
    case 'TransactionInfo':
      return 'Transaction Info'
    case 'AboutUs':
      return 'About Us'
    case 'Login':
      return 'Login'
    case 'Register':
      return 'Register'
    case 'Offers':
      return 'Offers'
    case 'MyProfile':
      return 'My Profile '
    case 'BookingsList':
      return 'My Bookings '
    case 'MyWallet':
      return 'My Wallet '
    case 'CustomerService':
      return 'Customer Service'
    case 'Notifications':
      return 'Notifications'
    case 'Faq':
      return 'FAQs' 
    default:
      return true
  }
}

getCartCount = () => {
  const { bookingCartServices } = store.getState();
  const cartCount = bookingCartServices.bookingCartList.length;
  return cartCount
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
        backgroundColor: App_Color,
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
        headerTitleStyle: {
          fontFamily: Font_Name_Regular,
        },
        
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor={App_Color} color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        ),
        headerRight: () => (
          <View style={styles.headerRightIcons}>
            <FaqIcon navigation={navigation} />
            <BookingCartIcon navigation={navigation} />
            <NotificationIcon onPress={() => navigation.navigate('Notifications')}
            ></NotificationIcon>

          </View>
        )
      })}
    />
    <Stack.Screen name="ServicesList" component={ServicesList}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerTitleStyle: {
          fontFamily: Font_Name_Regular,
        },
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor={App_Color} color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        ),
        headerRight: () => (
          <View style={styles.headerRightIcons}>
            <BookingCartIcon navigation={navigation} />
            <Icon style={styles.iconNotifications} name="ios-notifications" size={25}
              backgroundColor={App_Color} color="#fff"
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
        headerTitleStyle: {
          fontFamily: Font_Name_Regular,
        },
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor={App_Color} color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        ),
        headerRight: () => (
          <View style={styles.headerRightIcons}>
            <BookingCartIcon navigation={navigation} />
            <Icon style={styles.iconNotifications} name="ios-notifications" size={25}
              backgroundColor={App_Color} color="#fff"
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
        headerTitleStyle: {
          fontFamily: Font_Name_Regular,
        },
        headerLeft: () => (
          <Icon.Button name="md-arrow-round-back" size={25}
            backgroundColor={App_Color} color="#fff"
            onPress={() => navigation.goBack()
            }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="DeliveryOptions" component={DeliveryOptions}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerTitleStyle: {
          fontFamily: Font_Name_Regular,
        },
        headerLeft: () => (
          <Icon.Button name="md-arrow-round-back" size={25}
            backgroundColor={App_Color} color="#fff"
            onPress={() => navigation.goBack()
            }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="ChooseAddress" component={ChooseAddress} 
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerTitleStyle: {
          fontFamily: Font_Name_Regular,
        },
        headerLeft: () => (
          <Icon.Button name="md-arrow-round-back" size={25}
          backgroundColor={App_Color} color="#fff"
          onPress={() => navigation.goBack()
          }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="AddNewAddress" component={AddNewAddress} 
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerTitleStyle: {
          fontFamily: Font_Name_Regular,
        },
        headerLeft: () => (
          <Icon.Button name="md-arrow-round-back" size={25}
          backgroundColor={App_Color} color="#fff"
          onPress={() => navigation.goBack()
          }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="Payment" component={Payment}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerTitleStyle: {
          fontFamily: Font_Name_Regular,
        },
        headerLeft: () => (
          <Icon.Button name="md-arrow-round-back" size={25}
            backgroundColor={App_Color} color="#fff"
            onPress={() => navigation.goBack()
            }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="TransactionInfo" component={TransactionInfo}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerTitleStyle: {
          fontFamily: Font_Name_Regular,
        },
        headerLeft: () => (
          <Icon.Button name="md-arrow-round-back" size={25}
            backgroundColor={App_Color} color="#fff"
            onPress={() => navigation.goBack()
            }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="AboutUs" component={About}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerTitleStyle: {
          fontFamily: Font_Name_Regular,
        },
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor={App_Color} color="#fff"
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
        headerTitleStyle: {
          fontFamily: Font_Name_Regular,
        },
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor={App_Color} color="#fff"
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
        headerTitleStyle: {
          fontFamily: Font_Name_Regular,
        },
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor={App_Color} color="#fff"
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
        headerTitleStyle: {
          fontFamily: Font_Name_Regular,
        },
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor={App_Color} color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="Offers" component={Offers}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerTitleStyle: {
          fontFamily: Font_Name_Regular,
        },
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor={App_Color} color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="MyProfile" component={Profile}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerTitleStyle: {
          fontFamily: Font_Name_Regular,
        },
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor={App_Color} color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="ProfileEdit" component={ProfileEdit}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerTitleStyle: {
          fontFamily: Font_Name_Regular,
        },
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor={App_Color} color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="BookingsList" component={BookingsList}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerTitleStyle: {
          fontFamily: Font_Name_Regular,
        },
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor={App_Color} color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="Booking" component={Booking}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerTitleStyle: {
          fontFamily: Font_Name_Regular,
        },
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor={App_Color} color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="MyWallet" component={Wallet}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerTitleStyle: {
          fontFamily: Font_Name_Regular,
        },
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor={App_Color} color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        ),
        headerRight: () => (
          <Icon.Button name="ios-notifications" size={25}
            backgroundColor={App_Color} color="#fff" >
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="CustomerService" component={CustomerService}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerTitleStyle: {
          fontFamily: Font_Name_Regular,
        },
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor={App_Color} color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="Notifications" component={Notifications}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerTitleStyle: {
          fontFamily: Font_Name_Regular,
        },
        
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor={App_Color} color="#fff"
            onPress={() => navigation.openDrawer()
            }>
          </Icon.Button >
        )
      })}
    />
    <Stack.Screen name="Faq" component={Faq}
      options={({route}) => ({
        title: getHeaderTitle(route),
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor={App_Color} color="#fff"
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

  },
  badge: {
    position: 'absolute',
    right: -10,
    top: -14,
    zIndex: 1,
    backgroundColor: "#FFCC00",
    borderRadius: 10,
    textAlign: 'center',
    paddingTop: 3,
    width: 20,
    height: 20,
    fontSize: 10,
    fontWeight: 'bold'
    
  }
})

export default Navigation;
