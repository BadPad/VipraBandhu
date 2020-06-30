import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/Ionicons'

const BookingCartIcon = ({ navigation, bookingCartServices }) => {
    const { bookingCartList } = bookingCartServices;
    const count = bookingCartList.length
    return (
        <TouchableOpacity onPress={() => navigation.navigate('BookingCart')}>
            {count !== 0 && <Text style={styles.badge}>{count}</Text>}
            <Icon name="ios-cart" size={25} backgroundColor="#D63031" color="#fff" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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

BookingCartIcon.propTypes = {
    bookingCartServices: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    bookingCartServices: state.bookingCartServices
})

export default connect(mapStateToProps)(BookingCartIcon)
