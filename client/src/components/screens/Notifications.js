import React, { useEffect } from 'react';
import { StyleSheet, FlatList, ScrollView, Dimensions, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { myBookingsOrders, getPurohitBookings } from '../../redux/actions/myBookingActions';
import BookingsCardList from '../../components/utils/BookingsCardList';

const Notifications = ({ navigation, auth, myBookingsOrders, myOrders, getPurohitBookings, purohitBookings }) => {

    useEffect(() => {
        callAPIsBasedOnUserType()
    }, [])

    const onSelectBooking = (data, type) => {
        navigation.navigate('Booking', { rowData: data, userType: type })
    }

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

    return (
        <ScrollView style={[styles.scene, { backgroundColor: '#fdfcfa' }]}>
            {
                pendingData != null ?

                    <FlatList
                        //keyExtractor={item => item.bookingID.toString()}
                        data={pendingData}
                        renderItem={({ item, index }) => (
                            <BookingsCardList data={item[0]} onSelectBooking={onSelectBooking} status={"pending"} userType={auth.userType} isNotification={true} />
                        )}
                    />
                    : null
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',

    },
    boxes: {
        margin: 10,
        padding: 10,
        borderWidth: 0.6,
        borderColor: 'grey'
    }
})

//export default Notifications


Notifications.propTypes = {
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
//const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)