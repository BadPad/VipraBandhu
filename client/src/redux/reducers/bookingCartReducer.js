import { ADD_TO_BOOKING_CART, DELETE_FROM_BOOKING_CART } from '../actions/types';
import isEmpty from '../../components/Reusable_Component/is-empty';
import { uniqueDates } from '../../components/utils/GetUniqueDates';

const initialState = {
    bookingCartList: [],
    bookingServiceDates: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_TO_BOOKING_CART:
            const cart = [...state.bookingCartList, action.payload];
            return {
                ...state,
                bookingCartList: cart,
                bookingServiceDates: uniqueDates(cart)
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
                bookingCartList,
                bookingServiceDates: isEmpty(bookingCartList) ? null : uniqueDates(bookingCartList)
            }
        default:
            return state;
    }
}