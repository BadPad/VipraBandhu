import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Badge } from 'react-native-elements'


//import staticData from "../Reusable_Component/StaticData/BookingsStaticData"

const NotificationIcon = ({ onPress }) => {
    return (

        <TouchableOpacity activeOpacity={.9} onPress={onPress}>
            <Icon style={styles.iconNotifications} name="ios-notifications" size={25}
                backgroundColor="#D63031" color="#fff" onPress={onPress}
            >
            </Icon >
            <Badge
                value={"!"}
                badgeStyle={styles.badge}
                textStyle={styles.badgeText}
                containerStyle={{ position: 'absolute', top: -9, right: 10 }}
            />
        </TouchableOpacity>


    );
}
var styles = StyleSheet.create({
    iconNotifications: {
        paddingRight: 20,
        paddingLeft:20
    },
    badge: {
        backgroundColor: '#FFCC00',
        borderColor: '#fff',
        borderWidth: 1
    },
    badgeText: {
        color: '#000',
        fontFamily: 'OpenSans-Bold',
    },
    notiText: {
        fontSize: 14,
        fontFamily: 'OpenSans-Bold',
        color: '#fff',
        marginRight: 15,
        right: '40%',
        padding: 1,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: '#fff',
        backgroundColor: 'red',
        lineHeight: 15,
        height: 15

    }

});

export default NotificationIcon;