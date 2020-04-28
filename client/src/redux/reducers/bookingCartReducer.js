import { ADD_TO_BOOKING_CART, DELETE_FROM_BOOKING_CART } from '../actions/types';

const initialState = {
    bookingCartList: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_TO_BOOKING_CART:
            return {
                ...state,
                bookingCartList: [...state.bookingCartList, action.payload]
            }
        case DELETE_FROM_BOOKING_CART:
            const { bookingCartList } = state;
            const { serviceId, serviceName } = action.payload;
            for(let i=0; i < bookingCartList.length; i++) {
                if(bookingCartList[i].serviceId === serviceId && bookingCartList[i].serviceName === serviceName) {
                    bookingCartList.splice(i, 1)
                    break;
                }
            }
            
            return {
                ...state,
                bookingCartList
            }
        default:
            return state;
    }
}