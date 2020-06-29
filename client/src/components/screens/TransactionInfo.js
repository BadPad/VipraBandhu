import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearBookingCart } from '../../redux/actions/bookingCartActions';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const TransactionInfo = ({ navigation, bookingCartServices, clearBookingCart }) => {

    useEffect(() => {
        setTimeout(() => {
            clearBookingCart();
        },5000);
        setTimeout(() => {
            navigation.navigate('Welcome')
        },4000)
    }, [])

    const { serviceOrderConfirm } = bookingCartServices;

    if(serviceOrderConfirm.statusCode === 200) {
        return (
            <View style={styles.container}>
                <MaterialCommunityIcons name="check-decagram" size={50} color="#00b300" />
                <Text style={styles.success}>You Booking has been Completed Successfully</Text>
                <Text style={styles.notify}>NOTE : You will get the vendor details within 24hrs of you service starts</Text>
            </View>
        )
    } else {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        padding: 30
    },
    success: {
        marginTop: 10,
        fontSize: 20
    },
    notify: {
        fontSize: 9,
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    }
})

TransactionInfo.propTypes = {
    bookingCartServices: PropTypes.object.isRequired,
    clearBookingCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    bookingCartServices: state.bookingCartServices
})

const mapDispatchToProps = { clearBookingCart }

export default connect(mapStateToProps, mapDispatchToProps)(TransactionInfo)
