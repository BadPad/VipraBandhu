import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Badge } from 'react-native-elements'
import { myBookingsOrders, getPurohitBookings } from '../../redux/actions/myBookingActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//import staticData from "../Reusable_Component/StaticData/BookingsStaticData"

const NotificationIcon = ({ onPress, auth, myOrders, getPurohitBookings, purohitBookings }) => {

    useEffect(() => {
        callAPIsBasedOnUserType()
    }, [])

    const callAPIsBasedOnUserType = () => {

        let currentUserType = auth.userType;
        if (currentUserType === "customer") {
            myBookingsOrders();
        }
        else if (currentUserType === "purohit") {
            getPurohitBookings();
        }
    }

    const currentUserType = auth.userType;

    let pendingData = null;
    let pendingDataCount = 0;


    if (currentUserType === 'customer') {
        if (myOrders.myBookingsOrdersList != null) {
            pendingData = myOrders.myBookingsOrdersList.pending_bookings
        }
    }
    else if (currentUserType === 'purohit') {
        if (purohitBookings.getPurohitBookingsList != null) {
            pendingData = purohitBookings.getPurohitBookingsList.pending_bookings
        }
    }

    if (pendingData != null)
        pendingDataCount = pendingData.length

    return (

        <TouchableOpacity activeOpacity={.9} onPress={onPress}>
            <Icon style={styles.iconNotifications} name="ios-notifications" size={25}
                backgroundColor="#D63031" color="#fff" onPress={onPress}
            >
            </Icon>
            <Badge
                value={pendingDataCount}
                badgeStyle={styles.badge}
                textStyle={styles.badgeText}
                containerStyle={{ position: 'absolute', top: -10, right: 10 }}
            />
        </TouchableOpacity>


    );
}
var styles = StyleSheet.create({
    iconNotifications: {
        paddingRight: 20,
        paddingLeft: 20
    },
    badge: {
        backgroundColor: '#FFCC00',

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

//export default NotificationIcon;


NotificationIcon.propTypes = {
    auth: PropTypes.object.isRequired,
    myBookingsOrders: PropTypes.object.isRequired,
    myOrders: PropTypes.object.isRequired,
    getPurohitBookings: PropTypes.object.isRequired,
    purohitBookings: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    myOrders: state.myBookingsOrders,
    purohitBookings: state.getPurohitBookings,
})

const mapDispatchToProps = { myBookingsOrders, getPurohitBookings }

export default connect(mapStateToProps, mapDispatchToProps)(NotificationIcon)