import { ADD_TO_BOOKING_CART, DELETE_FROM_BOOKING_CART, BOOKING_CART_STRUCTURE, BOOKING_CART_STRUCTURE_SELECTED_DATE, ADD_TIME_TO_STRUCTURE_SELECTED_DATE } from '../actions/types';
import isEmpty from '../../components/Reusable_Component/is-empty';
import { uniqueDates, getDate } from '../../components/utils/GetUniqueDates';

const initialState = {
    bookingCartList: [],
    bookingServiceDates: null,
    bookingCartStructure: null,
    bookingCartStructureSelected: null
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
                bookingServiceDates: isEmpty(bookingCartList) ? null : uniqueDates(bookingCartList),
                bookingCartStructure: null,
                bookingCartStructureSelected: null
            }
        case BOOKING_CART_STRUCTURE:
            const cartList = state.bookingCartList;
            const uniqueDate = state.bookingServiceDates;
            const newStructuredServices = uniqueDate.map(item => {
                const subTypes = cartList.filter(d => getDate(d.serviceDate) === getDate(item))
                return {
                    date: item,
                    time: false,
                    poojaService : subTypes
                }
            })
            return {
                ...state,
                bookingCartStructure: newStructuredServices
            }
        case BOOKING_CART_STRUCTURE_SELECTED_DATE:
            const { bookingCartStructure } = state;
            const selectedDate = action.payload;
            const getSelectedData = bookingCartStructure.find(item => getDate(item.date) === getDate(selectedDate))
            return {
                ...state,
                bookingCartStructureSelected: getSelectedData
            }
        case ADD_TIME_TO_STRUCTURE_SELECTED_DATE:
            const structured = state.bookingCartStructure;
            const { bookingCartStructureSelected } = state;
            const selectedDateTime = action.payload;
            bookingCartStructureSelected.date = selectedDateTime.toISOString();
            bookingCartStructureSelected.time = true

            const objIndex = structured.findIndex(item => getDate(item.date) === getDate(selectedDateTime));
            const updatedObj = { ...structured[objIndex], date: selectedDateTime.toISOString(), time: true};
            const structureUpdated = [
                ...structured.slice(0, objIndex),
                updatedObj,
                ...structured.slice(objIndex + 1),
            ];
            return {
                ...state,
                bookingCartStructure: structureUpdated,
                bookingCartStructureSelected
            }
        default:
            return state;
    }
}