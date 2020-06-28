import axios from 'axios';
import { ADD_TO_BOOKING_CART, DELETE_FROM_BOOKING_CART, BOOKING_CART_STRUCTURE, BOOKING_CART_STRUCTURE_SELECTED_DATE, ADD_TIME_TO_STRUCTURE_SELECTED_DATE, ADD_PAYMENT_TYPE, ADD_SERVICE_CASTE_PREFER, ADD_SERVICE_LOCATION, PAYMENT_DATA_STRUCTURED, CLEAR_BOOKING_CART, SERVICE_ORDER_CONFIRM } from './types';

/*--- Add To Booking Cart ---*/
export const addToBookingCart = service => {
    return {
        type: ADD_TO_BOOKING_CART,
        payload: service
    }
}

/*--- Delete From Booking Cart ---*/
export const deleteFromBookingCart = service => {
    return {
        type: DELETE_FROM_BOOKING_CART,
        payload: service
    }
}

/*--- Booking Cart Structure ---*/
export const bookingCartStructure = () => {
    return {
        type: BOOKING_CART_STRUCTURE
    }
}

/*--- Booking Cart Structure Select Date ---*/
export const bookingCartStructureSelectedDate = selectedDate => {
    return {
        type: BOOKING_CART_STRUCTURE_SELECTED_DATE,
        payload: selectedDate
    }
}

/*--- Add Time to Structure Select Date ---*/
export const addTimeToStructureSelectedDate = selectedTime => {
    return {
        type: ADD_TIME_TO_STRUCTURE_SELECTED_DATE,
        payload: selectedTime
    }
}

/*--- Add Payment Type ---*/
export const addPaymentType = type => {
    return {
        type: ADD_PAYMENT_TYPE,
        payload: type
    }
}

/*--- Add Service Caste Prefer ---*/
export const addServiceCastePrefer = caste => {
    return {
        type: ADD_SERVICE_CASTE_PREFER,
        payload: caste
    }
}

/*--- Add Service Location ---*/
export const addServiceLocation = location => {
    return {
        type: ADD_SERVICE_LOCATION,
        payload: location
    }
}

/*--- payment Data Structured ---*/
export const paymentDataStructured = () => {
    return {
        type: PAYMENT_DATA_STRUCTURED
    }
}

/*--- Service Order Confirm ---*/
export const serviceOrderConfirm = (serviceOrder, navigation) => dispatch => {
    axios.post('https://yd5lw8j6q8.execute-api.ap-south-1.amazonaws.com/Api/booking_post', serviceOrder)
    .then(res => {
        dispatch({
            type: SERVICE_ORDER_CONFIRM,
            payload: res.data
        })
        navigation.navigate('TransactionInfo')
    })
    .catch(err => {
        console.log(err && err.response)
    })
}

/*--- Clear Booking Cart ---*/
export const clearBookingCart = () => {
    return {
        type: CLEAR_BOOKING_CART
    }
}