import axios from 'axios';
import { regLogLoading } from '../actions/authActions';
import { MY_BOOKINGS_ORDERS, GET_PUROHIT_BOOKINGS, GET_COOK_BOOKINGS } from './types';
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

//Get all bookings for Cook
export const getCookBookings = () => dispatch => {

    axios.get('https://yd5lw8j6q8.execute-api.ap-south-1.amazonaws.com/Api/cook_booking_get')
        .then(res =>
            dispatch({
                type: GET_COOK_BOOKINGS,
                payload: res.data.body
            })
        )
        .catch(err => {
            console.log(err)
        })
}

// Purohit Accept Customer Booking
export const purohitBookingAcceptance = (data, navigation) => dispatch => {
    //dispatch(regLogLoading());    
    
    axios.post('https://yd5lw8j6q8.execute-api.ap-south-1.amazonaws.com/Api/purohit_booking_acceptance', data)
        .then(res => {
            const status = res.data;
            //console.warn(status.statusCode)
            if (status.statusCode === 200) {
                showMessage({
                    message: 'Booking has been accepted successfully',
                    type: 'success'
                })
                navigation.navigate('Welcome')
            }
            else {
                showMessage({
                    message: 'There was an issue while processing the request. Please try again after sometime - ' + status.body + "-" + status.statusCode ,
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



// Cook Accept Customer Booking
export const cookBookingAcceptance = (data, navigation) => dispatch => {
    //dispatch(regLogLoading());    
    
    axios.post('https://yd5lw8j6q8.execute-api.ap-south-1.amazonaws.com/Api/cook_booking_acceptance', data)
        .then(res => {
            const status = res.data;
            //console.warn(status.statusCode)
            if (status.statusCode === 200) {
                showMessage({
                    message: 'Booking has been accepted successfully',
                    type: 'success'
                })
                navigation.navigate('Welcome')
            }
            else {
                showMessage({
                    message: 'There was an issue while processing the request. Please try again after sometime' + status.statusCode ,
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

// Cancel Purohit Booking
export const cancelPurohitBooking = (data, navigation) => dispatch => {
    
    dispatch(regLogLoading());
    
    axios.post('https://yd5lw8j6q8.execute-api.ap-south-1.amazonaws.com/Api/purohit_booking_cancel', data)
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

// Cancel Purohit Booking
export const cancelCookBooking = (data, navigation) => dispatch => {
    
    dispatch(regLogLoading());
    
    axios.post('https://yd5lw8j6q8.execute-api.ap-south-1.amazonaws.com/Api/cook_booking_cancel', data)
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


