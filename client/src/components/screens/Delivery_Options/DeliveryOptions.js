import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FieldCartButton from '../../Reusable_Component/FieldCartButton'
import Heading from '../../Reusable_Component/Heading'

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Card from '../../Reusable_Component/Card/Card';
import CardSection from '../../Reusable_Component/Card/CardSection';
import DeliveryDatesServiceList from '../../utils/DeliveryDatesServiceList';
import { getCastes } from '../../../redux/actions/casteActions';
import { bookingCartStructureSelectedDate, addTimeToStructureSelectedDate, addPaymentType, addServiceCastePrefer, addServiceLocation, paymentDataStructured } from '../../../redux/actions/bookingCartActions';
import BookingCartServiceList from '../../utils/BookingCartServiceList';
import DatePicker from '../../Reusable_Component/DateTimeSelector/DatePicker';
import FieldButton from '../../Reusable_Component/FieldButton';
import Dropdown from '../../Reusable_Component/Dropdown';
import isEmpty from '../../Reusable_Component/is-empty';
import CateringBookingCartServiceList from '../../utils/CateringBookingCartServiceList';
import Indicator from '../../Reusable_Component/SpinnerIndicator/Indicator';
import MultipleSelectionDropdown from '../../Reusable_Component/MultipleSelectionDropdown';
import { App_Color, Font_Name_Regular } from '../../Reusable_Component/ConstantValues';

const customerpaymentType = [
    {label: "Select Payment Type", value: 0},
    {label: "Full Payment", value: "full"},
    {label: "Partial Payment", value: "partial"}
]

const DeliveryOptions = ({ 
    navigation, 
    getCastes,
    auth, 
    casteList,
    bookingCartServices, 
    bookingCartStructureSelectedDate,
    addTimeToStructureSelectedDate,
    addPaymentType,
    addServiceCastePrefer,
    addServiceLocation,
    paymentDataStructured,
    ListView_Ref
}) => {

    const [selectedDate, setSelectedDate] = useState(`${bookingCartServices && bookingCartServices.bookingServiceDates && bookingCartServices.bookingServiceDates[0]}`);
    const [dateTime, setDateTime] = useState(`${bookingCartServices && bookingCartServices.bookingCartStructureSelected && bookingCartServices.bookingCartStructureSelected.date}`);
    const [showDateTime, setShowDateTime] = useState(false);
    const [errors, setErrors] = useState({})

    useEffect(() => {
        getCastes()
        bookingCartStructureSelectedDate(selectedDate)
    }, [])

    useEffect(() => {
        setDateTime(new Date(bookingCartServices.bookingCartStructureSelected && bookingCartServices.bookingCartStructureSelected.date))
    }, [bookingCartServices && bookingCartServices.bookingCartStructureSelected])

    const { user } = auth;

    let address = auth.user.address[0].address + ', ' + auth.user.area + ', ' + auth.user.city + ', ' + auth.user.state;

    const renderServiceDatesList = ({ item }) => {
        return (
            <DeliveryDatesServiceList 
                key={item}
                data={item}
                selectDate={selected => {
                    bookingCartStructureSelectedDate(selected)
                    setSelectedDate(selected)
                }}
                selectedDate={selectedDate}
            />
        )
    }

    const renderSelectedPoojaList = ({ item }) => {
        return (
            <BookingCartServiceList 
                key={item.serviceId} 
                data={item} 
                noDelete
            />
        )
    }

    const renderSelectedCateringList = ({ item }) => {
        return (
            <CateringBookingCartServiceList 
                key={item.serviceId} 
                data={item} 
                noDelete
            />
        )
    }

    const onDateTimeChange = (event, selectedDate) => {
        ListView_Ref.scrollToEnd({ animated: true });
        const currentDateTime = selectedDate || date;
        setShowDateTime(!showDateTime);
        setDateTime(currentDateTime);
        addTimeToStructureSelectedDate(currentDateTime);
    }

    const customerPreferCaste = casteList && casteList.getCasteList && casteList.getCasteList.reduce((pV, cV, cI) => {
        pV.push({ label: cV, value: `${cI}`});
        return pV;
    }, [])

    const validation = () => {
        let isError = false;

        const errors = {
            errors: {}
        }

        setErrors({...errors.errors})

        return isError;
    }

    const { loading } = bookingCartServices;

    return (
        <View style={styles.container}>
            {loading && <Indicator />}
            <ScrollView 
                style={styles.scrollContainer} 
                ref={ref => ListView_Ref = ref}
            >
                <Card>
                    <CardSection style={styles.addressHeading}>
                        <View style={styles.headLogText}>
                            <Icon name="location-pin" size={20} color={App_Color} />
                            <Heading containerStyle={styles.contAddHeading} style={styles.addHeading} name="Home" />
                        </View>
                        <TouchableOpacity style={styles.changeAddButton} onPress={() => console.log('change')}>
                            <Text style={styles.changeAddText}>Change</Text>
                        </TouchableOpacity>
                    </CardSection>
                    <CardSection style={styles.selectedAddress}>
                        <Text>{user.FirstName}</Text>
                        <Text>{address}</Text>
                    </CardSection>
                    <Card style={styles.servicePayContainer}>
                        {/* <Text style={styles.servicePayHead}>Service prefer Type</Text> */}
                        <CardSection style={styles.servicePay}>
                            <Text style={styles.servicePref}>Payment Type</Text>
                            <Dropdown 
                                data={customerpaymentType} 
                                style={styles.payType}
                                selectDrop={drop => addPaymentType(drop)}
                                selectedItem={bookingCartServices && bookingCartServices.paymentType}
                            />
                        </CardSection>
                        <CardSection style={{...styles.servicePay,...styles.servicePaySelected}}>
                            <Text style={styles.servicePref}>Service Caste Prefer</Text>
                            <View style={styles.servicePayCaste}>
                                <MultipleSelectionDropdown 
                                    data={customerPreferCaste && customerPreferCaste}
                                    SelectedData={SelectedData => addServiceCastePrefer(SelectedData.map(list => list.value))}
                                    selectedItems={bookingCartServices && bookingCartServices.preferCaste}
                                />
                            </View>
                        </CardSection>
                        {!isEmpty(bookingCartServices && bookingCartServices.preferCaste) && customerPreferCaste && customerPreferCaste ?
                            <CardSection style={{...styles.servicePay, ...styles.servicePayCasteSelected}}>
                                <View style={styles.selectedItems}>
                                    {bookingCartServices && bookingCartServices.preferCaste.map(list => {
                                        const getSelectesPreferCaste = customerPreferCaste && customerPreferCaste[list];
                                        return (
                                            <Text style={styles.selectedText} key={list}>{getSelectesPreferCaste && getSelectesPreferCaste.label}</Text>
                                        )
                                    })}
                                </View>
                            </CardSection>
                        :null}
                    </Card>
                    <CardSection style={styles.serviceSlots}>
                        {/* <Text style={styles.serviceSlotsText}>Choose service timings for you services</Text> */}
                    </CardSection>
                </Card>
                <View>
                    <FlatList 
                        keyExtractor={item => item}
                        data={bookingCartServices && bookingCartServices.bookingServiceDates}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderServiceDatesList}
                    />
                </View>
                {!isEmpty(bookingCartServices && bookingCartServices.bookingCartStructureSelected && bookingCartServices.bookingCartStructureSelected.poojaService) &&    
                    <View style={styles.selectedList}>
                        <Text style={styles.servicesTitle}>Pooja Services</Text>
                        {
                            bookingCartServices && bookingCartServices.bookingCartStructureSelected && bookingCartServices.bookingCartStructureSelected.time === false && !showDateTime ?
                                <FieldButton 
                                    name="Select Pooja Timings"
                                    onPress={() => setShowDateTime(!showDateTime)}
                                />
                            : 
                                <DatePicker 
                                    name="Pooja Time"
                                    timeZoneOffsetInMinutes={0}
                                    show={showDateTime}
                                    value={new Date(dateTime && dateTime)}
                                    mode="time"
                                    is24Hour={false}
                                    display="default"
                                    onPress={() => setShowDateTime(!showDateTime)}
                                    onChange={onDateTimeChange}
                                />
                        }
                        <FlatList 
                            keyExtractor={pooja => pooja.serviceId}
                            data={bookingCartServices && bookingCartServices.bookingCartStructureSelected && bookingCartServices.bookingCartStructureSelected.poojaService}
                            renderItem={renderSelectedPoojaList}
                        />
                    </View>}
                {!isEmpty(bookingCartServices && bookingCartServices.bookingCartStructureSelected && bookingCartServices.bookingCartStructureSelected.cateringService) &&
                    <View style={styles.selectedList}>
                        <Text style={styles.servicesTitle}>Catering Service</Text>
                        <FlatList 
                            keyExtractor={catering => catering.serviceId}
                            data={bookingCartServices && bookingCartServices.bookingCartStructureSelected && bookingCartServices.bookingCartStructureSelected.cateringService}
                            renderItem={renderSelectedCateringList}
                        />
                    </View>}
            </ScrollView>
            <FieldCartButton 
                name="Process to pay"
                onPress={() => {
                    const err = validation();
                    
                    if(!err) {
                        addServiceLocation(address);
                        paymentDataStructured()
                        navigation.navigate('Payment')
                    } else {
                        console.log(err)
                        console.log(errors)
                    }
                }}
            >
                <View>
                    <Text style={styles.buttonText}>₹ {bookingCartServices && bookingCartServices.amountPayable}   <AntDesign name="arrowright" size={20} backgroundColor="transparent" color="#000" /></Text>
                </View>
            </FieldCartButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9'
    },
    scrollContainer: {
        marginBottom: 50
    },
    addressHeading: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headLogText: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    contAddHeading : {
        marginTop: 8,
        marginLeft: 5
    },
    addHeading : {
        fontSize: 17,
        fontWeight: 'bold',
    },
    changeAddButton: {
        borderColor: App_Color,
        borderWidth: 1,
        borderRadius: 5
    },
    changeAddText: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        color: App_Color,
        fontFamily: Font_Name_Regular
    },
    selectedAddress: {
        paddingHorizontal: 5,
        flexDirection: 'column',
        paddingBottom: 10
    },
    servicePayContainer: {
        paddingTop: 8,
        backgroundColor: '#EEE8E7',
    },
    servicePayHead: {
        textAlign: 'center',
        padding: 5,
        color: '#757473'
    },
    servicePay: {
        backgroundColor: '#f9f9f9',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#EEE8E7',
        borderWidth: 0.7,
    },
    servicePref: {
        paddingHorizontal: 4,
        fontSize: 17,
        fontWeight: 'bold',
    },
    payType: {
        marginLeft: 70
    },
    castePref: {
        marginLeft: 50
    },
    servicePaySelected: {
        borderBottomColor: 0
    },
    servicePayCasteSelected: {
        borderTopWidth: 0,
        justifyContent: 'flex-end'
    },
    selectedItems: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch'
    },
    selectedText: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 7,
        margin: 2
    },
    serviceSlots : {
        backgroundColor: '#EEE8E7',
        paddingTop: 8,
        justifyContent: 'center'
    },
    serviceSlotsText: {
        fontSize: 12,
        color: '#757473'
    },
    selectedList: {
        margin: 10,
        marginTop: 5
    },
    servicesTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
    }
})

DeliveryOptions.propTypes = {
    bookingCartStructureSelectedDate: PropTypes.func.isRequired,
    addTimeToStructureSelectedDate: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    casteList: PropTypes.object.isRequired,
    bookingCartServices: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    casteList: state.casteList,
    bookingCartServices: state.bookingCartServices
})

const mapDispatchToProps = { 
    getCastes,
    bookingCartStructureSelectedDate, 
    addTimeToStructureSelectedDate,
    addPaymentType,
    addServiceCastePrefer,
    addServiceLocation,
    paymentDataStructured
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryOptions)