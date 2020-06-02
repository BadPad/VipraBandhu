import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { ListItem } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { logoutUser } from '../../redux/actions/authActions';

const DrawnContent = (props) => {
    const { isAuthenticated, user } = props.auth;
    return (
        <View style={styles.container}>
            <ListItem
                leftAvatar={{
                    source: { uri: 'https://p7.hiclipart.com/preview/636/702/321/computer-icons-user-profile-avatar-black-man.jpg' },
                    showAccessory: true,
                    size: 60
                }}
                title={isAuthenticated ? user.firstName: 'Login'}
                subtitle={isAuthenticated ? 'Customer' : null}
                chevron={isAuthenticated ? true : false}
                onPress={() => isAuthenticated? props.navigation.navigate('MyProfile') : props.navigation.navigate('Login')}
            />
            <DrawerContentScrollView {...props}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <FontAwesome5 
                            name="home" 
                            color={color}
                            size={size}
                        />
                    )}
                    label="Home"
                    onPress={() => props.navigation.navigate('Welcome')}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <MaterialCommunityIcons 
                            name="information-variant"
                            color={color}
                            size={size}
                        />
                    )}
                    label="About Us"
                    onPress={() => props.navigation.navigate('AboutUs')}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <FontAwesome5 
                            name="hornbill"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Offers"
                    onPress={() => props.navigation.navigate('Offers')}
                />
                {isAuthenticated &&
                <>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <MaterialCommunityIcons 
                                name="bookmark-multiple"
                                color={color}
                                size={size}
                            />
                        )}
                        label="MyOrders/Bookings"
                        onPress={() => props.navigation.navigate('BookingsList')}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <MaterialCommunityIcons 
                                name="wallet-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="MyWallet"
                        onPress={() => props.navigation.navigate('MyWallet')}
                    />
                </>}
                <DrawerItem 
                    icon={({color, size}) => (
                        <AntDesign 
                            name="customerservice"
                            color={color}
                            size={size}
                        />
                    )}
                    label="CustomerService"
                    onPress={() => props.navigation.navigate('CustomerService')}
                />
            </DrawerContentScrollView>
            {
                isAuthenticated ?
                    <DrawerItem 
                        icon={({color, size}) => (
                            <MaterialCommunityIcons 
                                name="exit-to-app" 
                                color={color}
                                size={size}
                            />
                        )}
                        label="Sign Out"
                        onPress={() => {
                            props.logoutUser()
                            props.navigation.closeDrawer()
                        }}
                    />
                :
                    <DrawerItem 
                        icon={({color, size}) => (
                            <AntDesign 
                                name="login"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Login"
                        onPress={() => props.navigation.navigate('Login')}
                    />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

DrawnContent.propTypes = {
    logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})
  
const mapDispatchToProps = { logoutUser }

export default connect(mapStateToProps, mapDispatchToProps)(DrawnContent)
