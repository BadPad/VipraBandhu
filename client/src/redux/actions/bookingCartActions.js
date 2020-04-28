import { ADD_TO_BOOKING_CART, DELETE_FROM_BOOKING_CART } from './types';

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