import { ADD_TO_BOOKING_CART, DELETE_FROM_BOOKING_CART, BOOKING_CART_STRUCTURE, BOOKING_CART_STRUCTURE_SELECTED_DATE, ADD_TIME_TO_STRUCTURE_SELECTED_DATE } from './types';

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
    console.log(selectedTime)
    return {
        type: ADD_TIME_TO_STRUCTURE_SELECTED_DATE,
        payload: selectedTime
    }
}