import axios from 'axios';
import { regLogLoading } from '../actions/authActions';
import { MY_BOOKINGS_ORDERS, GET_PUROHIT_BOOKINGS } from './types';
import { showMessage } from "react-native-flash-message";

// Get Customer Bookings
export const myBookingsOrders = () => dispatch => {

    axios.get('https://yd5lw8j6q8.execute-api.ap-south-1.amazonaws.com/Api/customer_booking_get')
        .then(res =>
            dispatch({
                type: MY_BOOKINGS_ORDERS,
                payload: res.data.body
            })
        )
        .catch(err => {
            console.log(err)
        })
}

// Get Purohit Bookings
export const getPurohitBookings = () => dispatch => {

    axios.get('https://yd5lw8j6q8.execute-api.ap-south-1.amazonaws.com/Api/purohit_booking_get')
        .then(res =>
            dispatch({
                type: GET_PUROHIT_BOOKINGS,
                payload: res.data.body
            })
        )
        .catch(err => {
            console.log(err)
        })
}

// Cancel Customer Booking
export const cancelCustomerBooking = (data, navigation) => dispatch => {
    dispatch(regLogLoading());
    
    axios.post('https://yd5lw8j6q8.execute-api.ap-south-1.amazonaws.com/Api/customer_booking_cancel/pending', data)
        .then(res => {
            const status = res.data;
            //console.warn(status.statusCode)
            if (status.statusCode === 200) {
                showMessage({
                    message: 'Booking has been cancelled successfully',
                    type: 'success'
                })
                navigation.navigate('Welcome')
            }
            else {
                // console.log('user already registered')
                showMessage({
                    message: 'There was an issue while processing the request. Please try again after sometime',
                    type: 'danger'
                })
                navigation.navigate('Welcome')
            }
        }
        )
        .catch(err => {
            console.log(err)
        })
}