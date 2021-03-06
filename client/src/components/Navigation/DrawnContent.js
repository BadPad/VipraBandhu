import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { App_Color, Font_Name_Regular, Font_Name_Bold } from '../Reusable_Component/ConstantValues';

import { logoutUser } from '../../redux/actions/authActions';

const DrawnContent = (props) => {
    const { isAuthenticated, user } = props.auth;
    
    const defaultProfile = 'https://bootdey.com/img/Content/avatar/avatar1.png';
    return (
        <View style={styles.container}>
            <TouchableHighlight style={styles.touchUser} onPress={() => isAuthenticated ? props.navigation.navigate('MyProfile') : props.navigation.navigate('Login')}>
                <View style={styles.pImageContainer}>
                    <View style={styles.imageBox}>
                        <Image
                            source={{
                                uri: isAuthenticated ? 
                                    user.profileImage !== 'not found'? 
                                        user.profileImage 
                                    : defaultProfile
                                :defaultProfile
                            }}
                            indicator={ProgressBar}
                            style={styles.avatar}
                            imageStyle={styles.avatarImage}
                        />
                        <Text style={styles.userName}>{isAuthenticated ? user.FirstName: 'Login / Register'}</Text>
                    </View>
                    <View>
                        <MaterialCommunityIcons name="chevron-right" color="rgba(249,249,249,0.7)" size={20} />
                    </View>
                </View>
            </TouchableHighlight>
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
                    labelStyle={{fontFamily: Font_Name_Regular}}
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
                    labelStyle={{fontFamily: Font_Name_Regular}}
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
                    labelStyle={{fontFamily: Font_Name_Regular}}
                    onPress={() => props.navigation.navigate('Offers')}
                />
                {isAuthenticated &&
                <>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <MaterialCommunityIcons 
                                name="face-profile"
                                color={color}
                                size={size}
                            />
                        )}
                        label="My Profile"
                        labelStyle={{fontFamily: Font_Name_Regular}}
                        onPress={() => props.navigation.navigate('MyProfile')}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <MaterialCommunityIcons 
                                name="bookmark-multiple"
                                color={color}
                                size={size}
                            />
                        )}
                        label="MyOrders/Bookings"
                        labelStyle={{fontFamily: Font_Name_Regular}}
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
                        labelStyle={{fontFamily: Font_Name_Regular}}
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
                    labelStyle={{fontFamily: Font_Name_Regular}}
                    onPress={() => props.navigation.navigate('CustomerService')}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <MaterialCommunityIcons 
                            name="information-variant"
                            color={color}
                            size={size}
                        />
                    )}
                    label="FAQs"
                    labelStyle={{fontFamily: Font_Name_Regular}}
                    onPress={() => props.navigation.navigate('Faq')}
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
                        labelStyle={{fontFamily: Font_Name_Regular}}
                        onPress={() => {
                            props.logoutUser(props.navigation)
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
                        label="Login / Register"
                        labelStyle={{fontFamily: Font_Name_Regular}}
                        onPress={() => props.navigation.navigate('Login')}
                    />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    touchUser: {
        backgroundColor: App_Color
    },
    pImageContainer: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarImage: {
        borderRadius: 100,
        borderColor: '#f9f9f9',
        borderWidth: 2
    },
    avatar: {
        width: 50,
        height: 50,
    },
    userName: {
        fontSize: 19,
        color: '#F9F9F9',
        paddingLeft: 15
    },
    iconContainer: {
        justifyContent: 'flex-end'
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