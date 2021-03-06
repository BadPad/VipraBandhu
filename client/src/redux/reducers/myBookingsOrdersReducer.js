import { MY_BOOKINGS_ORDERS, GET_PUROHIT_BOOKINGS, GET_COOK_BOOKINGS } from '../actions/types';

const initialState = {
    myBookingsOrdersList: null,
    getPurohitBookingsList: null,
    getCookBookingsList: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case MY_BOOKINGS_ORDERS:
            return {
                ...state,
                myBookingsOrdersList: action.payload,
            }
        case GET_PUROHIT_BOOKINGS:
            return {
                ...state,
                getPurohitBookingsList: action.payload,
            }
        case GET_COOK_BOOKINGS:
            return {
                ...state,
                getCookBookingsList: action.payload,
            }
        default:
            return state;
    }
}