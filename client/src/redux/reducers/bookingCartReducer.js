import { BOOKING_CART_LOADING, ADD_TO_BOOKING_CART, ADD_CATERING_SERVICES_TO_BOOKING_CART, DELETE_FROM_BOOKING_CART, BOOKING_CART_STRUCTURE, BOOKING_CART_STRUCTURE_SELECTED_DATE, ADD_TIME_TO_STRUCTURE_SELECTED_DATE, ADD_PAYMENT_TYPE, ADD_SERVICE_CASTE_PREFER, ADD_SERVICE_LOCATION, PAYMENT_DATA_STRUCTURED, CLEAR_BOOKING_CART, SERVICE_ORDER_CONFIRM } from '../actions/types';
import isEmpty from '../../components/Reusable_Component/is-empty';
import { uniqueDates, getDate } from '../../components/utils/GetUniqueDates';

const initialState = {
    loading: false,
    bookingCartList: [],
    bookingServiceDates: null,
    totalAmount: null,
    amountPayable: null,
    amountbalance: null,
    paymentType: 'Full Payment',
    preferCaste: null,
    location: null,
    bookingCartStructureSelected: null,
    cartStructure: null,
    paymentDataStructured: null,
    serviceOrderConfirm: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case BOOKING_CART_LOADING:
            return {
                ...state,
                loading: true
            }
        case ADD_TO_BOOKING_CART:
            const cart = [...state.bookingCartList, action.payload];
            return {
                ...state,
                bookingCartList: cart,
                bookingServiceDates: uniqueDates(cart),
                loading: false,
            }
        case ADD_CATERING_SERVICES_TO_BOOKING_CART: 
            const catCart = [...state.bookingCartList, ...action.payload]
            return {
                ...state,
                bookingCartList: catCart,
                bookingServiceDates: uniqueDates(catCart),
                loading: false,
            }
        case DELETE_FROM_BOOKING_CART:
            const { bookingCartList } = state;
            const { serviceId, serviceName, serviceCategory, serviceDate } = action.payload;
            for(let i=0; i < bookingCartList.length; i++) {
                if(bookingCartList[i].serviceId === serviceId && bookingCartList[i].serviceName === serviceName && bookingCartList[i].serviceCategory === serviceCategory && getDate(bookingCartList[i].serviceDate) === getDate(serviceDate)) {
                    bookingCartList.splice(i, 1)
                    break;
                }
            }
            return {
                ...state,
                bookingCartList,
                bookingServiceDates: isEmpty(bookingCartList) ? null : uniqueDates(bookingCartList),
                bookingCartStructure: null,
                bookingCartStructureSelected: null,
                loading: false
            }
        case BOOKING_CART_STRUCTURE:
            const cartList = state.bookingCartList;
            const uniqueDate = state.bookingServiceDates;
            const poojaCartList = cartList.filter(list => list.serviceCategory === 'purohit');
            const cateringCartList = cartList.filter(list => list.serviceCategory === 'catering');

            const newCartStructure = uniqueDate.map(item => {
                const poojaList = poojaCartList.filter(d => getDate(d.serviceDate) === getDate(item));
                const cateringList = cateringCartList.filter(d => getDate(d.serviceDate) === getDate(item));
                return {
                    date: item,
                    time: false,
                    poojaService: poojaList,
                    cateringService: cateringList
                }
            })

            const sum = cartList.reduce((total, obj) => parseInt(obj.servicePrice) + parseInt(total), 0);
            return {
                ...state,
                cartStructure: newCartStructure,
                totalAmount: sum,
                amountPayable: sum,
                loading: false
            }
        case BOOKING_CART_STRUCTURE_SELECTED_DATE:
            const { cartStructure } = state;
            const selectedDate = action.payload;
            const getSelectedData = cartStructure.find(item => getDate(item.date) === getDate(selectedDate))
            return {
                ...state,
                bookingCartStructureSelected: getSelectedData,
                loading: false
            }
        case ADD_TIME_TO_STRUCTURE_SELECTED_DATE:
            const structured = state.cartStructure;
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
                cartStructure: structureUpdated,
                bookingCartStructureSelected,
                loading: false
            }
        case ADD_PAYMENT_TYPE:
            const { totalAmount } = state;
            const percentage = 25/100;
            let payableAmount;
            if(action.payload === 'Full Payment') {
                payableAmount = totalAmount
            } else if(action.payload === 'Partial Payment') {
                payableAmount = percentage * totalAmount
            }
            const balanceAmount = totalAmount - payableAmount;
            return {
                ...state,
                paymentType: action.payload,
                amountPayable: payableAmount,
                amountbalance: balanceAmount,
                loading: false
            }
        case ADD_SERVICE_CASTE_PREFER: 
            return {
                ...state,
                preferCaste: isEmpty(action.payload) ? null : action.payload,
                loading: false
            }
        case ADD_SERVICE_LOCATION:
            return {
                ...state,
                location: action.payload,
                loading: false
            }
        case PAYMENT_DATA_STRUCTURED:
            const finalPayment = state.cartStructure;
            
            const poojaCartData = finalPayment.map(item => {
                return {
                    bookings: item.poojaService.map(pooja => {
                        return {
                            service_id: pooja.serviceId,
                            service_date: new Date(item.date).toISOString(),
                            contract_type: pooja.contractType
                        }
                    })
                }
            })
            const newPoojaCartData = poojaCartData.filter(list => !isEmpty(list.bookings))
            // console.log(newPoojaCartData)

            const cateringCartData = finalPayment.map(item => {
                return {
                    bookings: item.cateringService.map(catering => {
                        return {
                            service_id: catering.serviceId,
                            service_date: catering.serviceDate,
                            contract_type: catering.contractType,
                            person_count: catering.servicePersonsCount
                        }
                    })
                }
            })
            const newCateringCartData = cateringCartData.filter(list => !isEmpty(list.bookings))
            // console.log(newCateringCartData)
            return {
                ...state,
                paymentDataStructured: {
                    purohit_services: newPoojaCartData,
                    cook_services: newCateringCartData,
                    payment_type: state.paymentType,
                    location: state.location,
                    caste_prefered: state.preferCaste
                },
                loading: false
            }
        case SERVICE_ORDER_CONFIRM:
            return {
                ...state,
                serviceOrderConfirm: action.payload,
                loading: false
            }
        case CLEAR_BOOKING_CART:
            return {
                ...initialState
            }
        default:
            return state;
    }
}