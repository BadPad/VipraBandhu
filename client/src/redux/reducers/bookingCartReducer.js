import { ADD_TO_BOOKING_CART, DELETE_FROM_BOOKING_CART, BOOKING_CART_STRUCTURE, BOOKING_CART_STRUCTURE_SELECTED_DATE, ADD_TIME_TO_STRUCTURE_SELECTED_DATE, ADD_PAYMENT_TYPE, ADD_SERVICE_CASTE_PREFER, ADD_SERVICE_LOCATION, PAYMENT_DATA_STRUCTURED } from '../actions/types';
import isEmpty from '../../components/Reusable_Component/is-empty';
import { uniqueDates, getDate } from '../../components/utils/GetUniqueDates';

const initialState = {
    bookingCartList: [],
    bookingServiceDates: null,
    amountPaid: null,
    amountPayable: null,
    paymentType: null,
    preferCaste: null,
    location: null,
    bookingCartStructureSelected: null,
    poojaCartStructure: null,
    cateringCartStructure: null,
    paymentDataStructured: null,
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
            const newPoojaStructuredServices = uniqueDate.map(item => {
                const subTypes = cartList.filter(d => getDate(d.serviceDate) === getDate(item))
                return {
                    date: item,
                    time: false,
                    poojaService : subTypes
                }
            })
            const sum = cartList.reduce((total, obj) => parseInt(obj.servicePrice) + parseInt(total), 0);
            return {
                ...state,
                poojaCartStructure: newPoojaStructuredServices,
                amountPaid: sum
            }
        case BOOKING_CART_STRUCTURE_SELECTED_DATE:
            const { poojaCartStructure } = state;
            const selectedDate = action.payload;
            const getSelectedData = poojaCartStructure.find(item => getDate(item.date) === getDate(selectedDate))
            return {
                ...state,
                bookingCartStructureSelected: getSelectedData
            }
        case ADD_TIME_TO_STRUCTURE_SELECTED_DATE:
            const structured = state.poojaCartStructure;
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
                poojaCartStructure: structureUpdated,
                bookingCartStructureSelected
            }
        case ADD_PAYMENT_TYPE:
            return {
                ...state,
                paymentType: action.payload
            }
        case ADD_SERVICE_CASTE_PREFER: 
            return {
                ...state,
                preferCaste: action.payload
            }
        case ADD_SERVICE_LOCATION:
            return {
                ...state,
                location: action.payload
            }
        case PAYMENT_DATA_STRUCTURED:
            const poojaCart = state.poojaCartStructure;
            const poojaCartData = poojaCart.map(item => {
                return {
                    service_date: item.date,
                    bookings: item.poojaService.map(pooja => {
                        return {
                            service_id: pooja.serviceId,
                            contract_type: pooja.contractType
                        }
                    })
                }
            })
            console.log(poojaCart)
            console.log(poojaCartData)
            return {
                ...state,
                paymentDataStructured: {
                    purohit_services: poojaCartData,
                    cook_services: [],
                    payment_type: state.paymentType,
                    location: state.location,
                    amount_paid: state.amountPaid,
                    balance_amount: state.amountPayable
                }
            }
        default:
            return state;
    }
}