import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../../Reusable_Component/Card/Card';
import CardSection from '../../Reusable_Component/Card/CardSection';
import Heading from '../../Reusable_Component/Heading';
import Carousel from '../../Reusable_Component/Image_Carousel/Carousel';
import FieldButton from '../../Reusable_Component/FieldButton';
import MultipleFieldButton from '../../Reusable_Component/MultipleFieldButton';
import { addToBookingCart, addCatServeToBookingCart, bookingCartStructure } from '../../../redux/actions/bookingCartActions';
import isEmpty from '../../Reusable_Component/is-empty';
import ModalView from '../../Reusable_Component/ModalView';
import DatePicker from '../../Reusable_Component/DateTimeSelector/DatePicker';
import ServiceType from '../../Reusable_Component/ServiceType/ServiceType';
import ExistingDateSelector from '../../utils/ExistingDateSelector';
import Indicator from '../../Reusable_Component/SpinnerIndicator/Indicator';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SelectedCateringServices from '../../utils/SelectedCateringServices';
import Dropdown from '../../Reusable_Component/Dropdown';
import { getDateType } from '../../utils/GetUniqueDates';

const serviceData = [
    {label: "Select contract Type", value: 0},
    {label: "Full Contract", value: "Full Contract"},
    {label: "Labour Contract", value: "Labour Contract"},
]

const countList = Array.from(Array.from(Array(Math.ceil((1000-10)/1)).keys()), x => 10+ x*1);
const countNumbers = countList.reduce((pV, cV, cI) => {
    pV.push({ label: cV.toString(), value: cV.toString()});
    return pV;
},[{label: 'Count', value: 0}])

const BfTimingSlots = [
    {label: "Select Time", value: 0},
    {label: "7:30 AM", value: "7:30 AM"},
    {label: "8:30 AM", value: "8:30 AM"},
    {label: "9:30 AM", value: "9:30 AM"}
]

const LnTimingSlots = [
    {label: "Select Time", value: 0},
    {label: "12:00 PM", value: "12:00 PM"},
    {label: "1:00 PM", value: "1:00 PM"},
    {label: "2:00 PM", value: "2:00 PM"}
]

const SnTimingSlots = [
    {label: "Select Time", value: 0},
    {label: "4:00 PM", value: "4:00 PM"},
    {label: "5:00 PM", value: "5:00 PM"},
    {label: "6:00 PM", value: "6:00 PM"}
]

const DnTimingSlots = [
    {label: "Select Time", value: 0},
    {label: "7:30 PM", value: "7:30 PM"},
    {label: "8:30 PM", value: "8:30 PM"},
    {label: "9:30 PM", value: "9:30 PM"},
]

const Service = ({ 
    navigation, 
    route, 
    auth, 
    addToBookingCart, 
    addCatServeToBookingCart,
    bookingCartStructure, 
    bookingCartServices 
}) => {

    const [date, setDate] = useState(new Date().setSeconds(0,0));
    const [showDate, setShowDate] = useState(false);
    const [addNewDate, setAddNewDate] = useState(false);
    const [exDate, setExDate] = useState(false);
    const [isModal, setIsModel] = useState(false);
    const [contractType, setContractType] = useState('');
    const [catDate, setCatDate] = useState('');
    const [showCatDate, setShowCatDate] = useState(false)
    const [catBf, setCatBf] = useState([]);
    const [catBfCount, setCatBfCount] = useState('');
    const [catBfTime, setCatBfTime] = useState('');
    const [catLu, setCatLu] = useState([]);
    const [catLuCount, setCatLuCount] = useState('');
    const [catLnTime, setCatLnTime] = useState('');
    const [catSn, setCatSn] = useState([]);
    const [catSnCount, setCatSnCount] = useState('');
    const [catSnTime, setCatSnTime] = useState('');
    const [catDn, setCatDn] = useState([]);
    const [catDnCount, setCatDnCount] = useState('');
    const [catDnTime, setCatDnTime] = useState('');
    const [addCookToCart, setAddCookToCart] = useState(false)

    const newDate = new Date(date);

    const service = route.params.id;
    const serviceType = route.params.serviceType;

    useEffect(() => {
        if(serviceType === 'catering') {
            setCatBf(service.filter(list => list.serviceSubCategory === 'breakfast'));
            setCatLu(service.filter(list => list.serviceSubCategory === 'lunch'));
            setCatSn(service.filter(list => list.serviceSubCategory === 'snacks'));
            setCatDn(service.filter(list => list.serviceSubCategory === 'dinner'));
        }
    }, [])

    let cartServices;
    if(serviceType === 'purohit') {
        if(isEmpty(bookingCartServices.bookingCartList) ===false) {
            cartServices = bookingCartServices.bookingCartList.find(list => list.serviceId === service.serviceId && list.serviceName === service.serviceName)
        }        
    }

    const addAndCheckout = (service) => {
        service.serviceDate = newDate.toISOString();
        service.contractType = contractType
        service.servicePrice = contractType === 'Full Contract' ? service.fullContract : contractType === 'Labour Contract' ? service.labourContract : null
        setIsModel(false)
        setAddNewDate(!addNewDate)
        addToBookingCart(service)
        // navigation.navigate('BookingCart')
    }

    const catAddCheckout = () => {
        let cookAddCart = [];
        if(!isEmpty(catBf)) {
            cookAddCart = [...cookAddCart, ...catBf.map(list => ({...list, contractType: 'catering',  servicePrice: (list.serviceAmount * catBfCount), servicePersonsCount: catBfCount, serviceDate: getDateType(catDate, catBfTime).toISOString()}))]
        }
        if(!isEmpty(catLu)) {
            cookAddCart = [...cookAddCart, ...catLu.map(list => ({...list, contractType: 'catering', servicePrice: (list.serviceAmount * catBfCount), servicePersonsCount: catLuCount, serviceDate: getDateType(catDate, catLnTime).toISOString()}))]
        }
        if(!isEmpty(catSn)) {
            cookAddCart = [...cookAddCart, ...catSn.map(list => ({...list, contractType: 'catering', servicePrice: (list.serviceAmount * catBfCount), servicePersonsCount: catSnCount, serviceDate: getDateType(catDate, catSnTime).toISOString()}))]
        }
        if(!isEmpty(catDn)) {
            cookAddCart = [...cookAddCart, ...catDn.map(list => ({...list, contractType: 'catering', servicePrice: (list.serviceAmount * catBfCount), servicePersonsCount: catDnCount, serviceDate: getDateType(catDate, catDnTime).toISOString()}))]
        }
        setAddCookToCart(true)
        addCatServeToBookingCart(cookAddCart)
    }

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDate(!showDate);
        setDate(currentDate);
    }

    const onCatDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowCatDate(!showCatDate);
        setCatDate(currentDate);
    }

    let modalContent;
    if(isEmpty(bookingCartServices.bookingCartList) || addNewDate) {
        modalContent = (
            <>
                <Text style={styles.existingHeading}>Date <FontAwesome5 name="star-of-life" color="rgba(214, 48, 49, 0.5)" size={7} /></Text>
                <DatePicker 
                    name="Date"
                    timeZoneOffsetInMinutes={0}
                    show={showDate}
                    value={newDate}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onPress={() => setShowDate(!showDate)}
                    onChange={onDateChange}
                />
                <View style={styles.serviceType}>
                    <Text style={styles.existingHeading}>Contract Type <FontAwesome5 name="star-of-life" color="rgba(214, 48, 49, 0.5)" size={7} /></Text>
                    <ServiceType 
                        data={serviceData}
                        selectedService={type => setContractType(type)}
                        selectedItem={contractType}
                    />
                </View>
                <FieldButton 
                    name="Continue"
                    onPress={() => contractType === '' ? 
                            Alert.alert(
                                '',
                                'Please select the Server Date and contract Type you want to offer'
                            )
                        : 
                            addAndCheckout(service)
                    }
                />
            </>
        )
    } else {
        modalContent = (
            <>
                <Text style={styles.existingHeading}>Preferred Date <FontAwesome5 name="star-of-life" color="rgba(214, 48, 49, 0.5)" size={7} /></Text>
                <FlatList 
                    keyExtractor={(item, index) => index.toString()}
                    data={bookingCartServices.bookingServiceDates}
                    renderItem={({item, index}) => {
                        let existingDate = new Date(item);
                        return (
                            <ExistingDateSelector 
                                mode="date"
                                value={existingDate} 
                                selectedDate={newDate}
                                onSelectedDate={selectedDate => {
                                    setDate(selectedDate)
                                    setExDate(true)
                                }} 
                            />
                        )
                    }}
                />
                <View style={{...styles.serviceType, ...styles.newServiceType}}>
                    <Text style={styles.existingHeading}>Contract Type <FontAwesome5 name="star-of-life" color="rgba(214, 48, 49, 0.5)" size={7} /></Text>
                    <ServiceType 
                        data={serviceData}
                        selectedService={type => setContractType(type)}
                        selectedItem={contractType}
                    />
                </View>
                <FieldButton 
                    name={exDate ? "Continue" : "Add New Date"}
                    onPress={() => 
                        exDate ?
                            contractType === '' ? 
                                Alert.alert(
                                    '',
                                    'Please select the Server Date and Service Type you want to offer'
                                )
                            :
                                addAndCheckout(service)
                        :
                            setAddNewDate(!addNewDate)
                    }
                />
            </>
        )
    }

    const { isAuthenticated } = auth;
    const { loading } = bookingCartServices;

    return (
        <View style={styles.container}>
            {loading && <Indicator />}
            {
                serviceType === 'purohit' ?
                    <>
                        <ScrollView>
                            {/* <Carousel 
                                images={service.serviceImages}
                                height={height / 2.5}
                                imageComponentStyle={styles.imageComponentStyle}
                            /> */}
                            <Card style={styles.content}>
                                <CardSection>
                                    <View>
                                        <Heading containerStyle={styles.containerTitle} style={styles.serviceTitleStyle} name={service.serviceName} />
                                    </View>
                                </CardSection>
                                <CardSection style={styles.serviceAmount}>
                                    <View>
                                        <Heading containerStyle={styles.containerPoojaAmount} style={styles.poojaAmountFor} name="Full Contract" />
                                        <Heading containerStyle={styles.containerPoojaAmount} style={styles.poojaAmount} name={`Rs ${service.fullContract}`} />
                                    </View>
                                    <View>
                                        <Heading containerStyle={styles.containerPoojaAmount} style={styles.poojaAmountFor} name="Labour Contract" />
                                        <Heading containerStyle={styles.containerPoojaAmount} style={styles.poojaAmount} name={`Rs ${service.labourContract}`} />
                                    </View>
                                </CardSection>
                                <CardSection style={styles.contentDescription}>
                                    <Text style={styles.description}>{service.serviceDescription}</Text>
                                    <Text style={styles.description}>{service.serviceDescription}</Text>
                                </CardSection>
                            </Card>
                        </ScrollView>
                        <ModalView 
                            isVisible={isModal} 
                            close={() => setIsModel(!isModal)}
                            children={modalContent}
                            animationIn="fadeInDownBig"
                            animationOut='fadeOutDownBig'
                            animationInTiming={0}
                            animationOutTiming={0}
                        />
                        <MultipleFieldButton 
                            butonContainer={styles.butonContainer}
                            buttonBckTouch={cartServices === undefined || null ? null : styles.buttonBckTouch}
                            buttoncheckTouch={cartServices === undefined || null ? styles.buttoncheckTouch : styles.TouchButton}
                            buttoncheckTouchText={cartServices === undefined || null ? null : styles.buttoncheckTouchText}
                            name={cartServices === undefined || null ? 'Book' : 'Checkout'}
                            onPressBck={() => navigation.goBack()}
                            onPressCheck={() => isAuthenticated?
                                    cartServices === undefined || null ? 
                                        setIsModel(!isModal)
                                    : 
                                        (bookingCartStructure(),navigation.navigate('DeliveryOptions'))
                                :
                                    navigation.navigate('Login')
                            }
                        />
                    </>
                : serviceType === 'catering' ?
                    <>
                        <ScrollView>
                            <View style={styles.cateringContainer}>
                                <Text style={styles.cateringHeading}>Selected Catering Services</Text>
                                {
                                    catDate === '' && !showCatDate ?
                                        <FieldButton 
                                            name="Select Service Date"
                                            onPress={() => setShowCatDate(!showCatDate)}
                                        />
                                    :
                                        <DatePicker 
                                            name="Catering Date"
                                            timeZoneOffsetInMinutes={0}
                                            show={showCatDate}
                                            value={catDate === '' ? new Date().setDate(new Date().getDate() + 1) : new Date(catDate)}
                                            mode="date"
                                            is24Hour={true}
                                            display="default"
                                            onPress={() => setShowCatDate(!showCatDate)}
                                            onChange={onCatDateChange}
                                        />
                                }
                                {!isEmpty(catBf) && 
                                    <View style={styles.cateringItemsList}>
                                        <Text style={styles.cateringTitle}>Breakfast</Text>
                                        <FlatList 
                                            keyExtractor={(item, index) => index.toString()}
                                            data={catBf}
                                            renderItem={({item, index}) => {
                                                return(
                                                    <SelectedCateringServices 
                                                        key={item.serviceId}
                                                        data={item}
                                                    />
                                                )
                                            }}
                                        /> 
                                        <CardSection style={styles.cateringPersonsCount}>
                                            <Text style={styles.cateringPersonText}>Persons</Text>
                                            <Dropdown 
                                                data={countNumbers && countNumbers}
                                                style={styles.countCont}
                                                selectDrop={drop => setCatBfCount(drop)}
                                                selectedItem={catBfCount}
                                            />
                                        </CardSection>
                                        <CardSection style={styles.cateringSlots}>
                                            <Text style={styles.cateringSlotText}>Slots</Text>
                                            <Dropdown 
                                                data={BfTimingSlots}
                                                style={styles.slotsCont}
                                                selectDrop={drop => setCatBfTime(drop)}
                                                selectedItem={catBfTime}
                                            />
                                        </CardSection>
                                    </View>}
                                {!isEmpty(catLu) && 
                                    <View style={styles.cateringItemsList}>
                                        <Text style={styles.cateringTitle}>Lunch</Text>
                                        <FlatList 
                                            keyExtractor={(item, index) => index.toString()}
                                            data={catLu}
                                            renderItem={({item, index}) => {
                                                return(
                                                    <SelectedCateringServices 
                                                        key={item.serviceId}
                                                        data={item}
                                                    />
                                                )
                                            }}
                                        /> 
                                        <CardSection style={styles.cateringPersonsCount}>
                                            <Text style={styles.cateringPersonText}>Persons</Text>
                                            <Dropdown 
                                                data={countNumbers && countNumbers}
                                                style={styles.countCont}
                                                selectDrop={drop => setCatLuCount(drop)}
                                                selectedItem={catLuCount}
                                            />
                                        </CardSection>
                                        <CardSection style={styles.cateringSlots}>
                                            <Text style={styles.cateringSlotText}>Slots</Text>
                                            <Dropdown 
                                                data={LnTimingSlots}
                                                style={styles.slotsCont}
                                                selectDrop={drop => setCatLnTime(drop)}
                                                selectedItem={catLnTime}
                                            />
                                        </CardSection>
                                    </View>}
                                {!isEmpty(catSn) && 
                                    <View style={styles.cateringItemsList}>
                                        <Text style={styles.cateringTitle}>Snacks</Text>
                                        <FlatList 
                                            keyExtractor={(item, index) => index.toString()}
                                            data={catSn}
                                            renderItem={({item, index}) => {
                                                return(
                                                    <SelectedCateringServices 
                                                        key={item.serviceId}
                                                        data={item}
                                                    />
                                                )
                                            }}
                                        />
                                        <CardSection style={styles.cateringPersonsCount}>
                                            <Text style={styles.cateringPersonText}>Persons</Text>
                                            <Dropdown 
                                                data={countNumbers && countNumbers}
                                                style={styles.countCont}
                                                selectDrop={drop => setCatSnCount(drop)}
                                                selectedItem={catSnCount}
                                            />
                                        </CardSection>
                                        <CardSection style={styles.cateringSlots}>
                                            <Text style={styles.cateringSlotText}>Slots</Text>
                                            <Dropdown 
                                                data={SnTimingSlots}
                                                style={styles.slotsCont}
                                                selectDrop={drop => setCatSnTime(drop)}
                                                selectedItem={catSnTime}
                                            />
                                        </CardSection>
                                    </View>}
                                {!isEmpty(catDn) && 
                                    <View style={styles.cateringItemsList}>
                                        <Text style={styles.cateringTitle}>Dinner</Text>
                                        <FlatList 
                                            keyExtractor={(item, index) => index.toString()}
                                            data={catDn}
                                            renderItem={({item, index}) => {
                                                return(
                                                    <SelectedCateringServices 
                                                        key={item.serviceId}
                                                        data={item}
                                                    />
                                                )
                                            }}
                                        /> 
                                        <CardSection style={styles.cateringPersonsCount}>
                                            <Text style={styles.cateringPersonText}>Persons</Text>
                                            <Dropdown 
                                                data={countNumbers && countNumbers}
                                                style={styles.countCont}
                                                selectDrop={drop => setCatDnCount(drop)}
                                                selectedItem={catDnCount}
                                            />
                                        </CardSection>
                                        <CardSection style={styles.cateringSlots}>
                                            <Text style={styles.cateringSlotText}>Slots</Text>
                                            <Dropdown 
                                                data={DnTimingSlots}
                                                style={styles.slotsCont}
                                                selectDrop={drop => setCatDnTime(drop)}
                                                selectedItem={catDnTime}
                                            />
                                        </CardSection>
                                    </View>}
                            </View>
                        </ScrollView>
                        <MultipleFieldButton 
                            butonContainer={styles.butonContainer}
                            buttonBckTouch={!addCookToCart ? null : styles.buttonBckTouch}
                            buttoncheckTouch={!addCookToCart ? styles.buttoncheckTouch : styles.TouchButton}
                            buttoncheckTouchText={!addCookToCart ? null : styles.buttoncheckTouchText}
                            name={!addCookToCart ? 'Book' : 'Checkout'}
                            onPressBck={() => navigation.navigate('Welcome')}
                            onPressCheck={() => isAuthenticated?
                                    !addCookToCart ? 
                                        catAddCheckout()
                                    : 
                                        (bookingCartStructure(),navigation.navigate('DeliveryOptions'))
                                :
                                    navigation.navigate('Login')
                            }
                        />
                    </>
                :null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    },
    containerTitle: {
        paddingBottom: 0
    },
    serviceTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 0.2
    },
    serviceAmount: {
        justifyContent: 'space-between'
    },
    containerPoojaAmount: {
        alignSelf: 'flex-start',
        paddingBottom: 0
    },
    poojaAmountFor: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    poojaAmount: {
        fontSize: 14,
        // fontWeight: 'bold'
    },
    imageComponentStyle: { 
        width: '100%',
    },
    contentDescription: {
        flexDirection: 'column'
    },
    description: {
        fontSize: 15,
        color: '#837F7F'
    },
    content: {
        borderRadius: 0,
        padding: 5,
        paddingBottom: 55
    },
    cateringContainer: {
        paddingHorizontal: 10,
        paddingBottom: 45
    },
    cateringHeading: {
        fontSize: 18,
        paddingVertical: 5,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    cateringItemsList: {
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#837F7F',
        borderRadius: 2
    },
    cateringTitle: {
        fontWeight: 'bold',
        paddingHorizontal: 5,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#837F7F'
    },
    cateringPersonsCount: {
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        paddingVertical: 3
    },
    cateringPersonText: {
        width: '50%'
    },
    countCont: {
        height: 20,
        width: '50%',
        marginLeft: 80
    },
    cateringSlots: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 3
    },
    cateringSlotText: {
        width: '50%'
    },
    slotsCont: {
        height: 20,
        width: '50%',
        marginLeft: 35
    },
    butonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    buttonBckTouch: {
        backgroundColor: '#fff4e1'
    },
    buttoncheckTouch:{
        borderRadius: 0
    },
    TouchButton: {
        borderRadius: 0,
        backgroundColor: '#f0c14b'
    },
    buttoncheckTouchText: {
        color: '#000',
        fontWeight: 'bold'
    },
    existingHeading: {
        // textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    },
    serviceType: {
        marginBottom: 20
    },
    newServiceType: {
        marginTop: 15
    }
})

Service.propTypes = {
    addToBookingCart: PropTypes.func.isRequired,
    addCatServeToBookingCart: PropTypes.func.isRequired,
    bookingCartStructure: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    bookingCartServices: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    bookingCartServices: state.bookingCartServices
})

const mapDispatchToProps = { addToBookingCart, addCatServeToBookingCart, bookingCartStructure }

export default connect(mapStateToProps, mapDispatchToProps)(Service);