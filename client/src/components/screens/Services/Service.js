import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../../Reusable_Component/Card/Card';
import CardSection from '../../Reusable_Component/Card/CardSection';
import Heading from '../../Reusable_Component/Heading';
import Carousel from '../../Reusable_Component/Image_Carousel/Carousel';
import FieldButton from '../../Reusable_Component/FieldButton';
import MultipleFieldButton from '../../Reusable_Component/MultipleFieldButton';
import { addToBookingCart, bookingCartStructure } from '../../../redux/actions/bookingCartActions';
import isEmpty from '../../Reusable_Component/is-empty';
import ModalView from '../../Reusable_Component/ModalView';
import DatePicker from '../../Reusable_Component/DateTimeSelector/DatePicker';
import ServiceType from '../../Reusable_Component/ServiceType/ServiceType';
import ExistingDateSelector from '../../utils/ExistingDateSelector';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const serviceData = [
    {label: "Select contract Type", value: 0},
    {label: "Full Contract", value: "Full Contract"},
    {label: "Labour Contract", value: "Labour Contract"},
]

const Service = ({ navigation, route, auth, addToBookingCart, bookingCartStructure, bookingCartServices }) => {

    const [date, setDate] = useState(new Date().setSeconds(0,0));
    const [showDate, setShowDate] = useState(false);
    const [addNewDate, setAddNewDate] = useState(false);
    const [exDate, setExDate] = useState(false);
    const [isModal, setIsModel] = useState(false);
    const [contractType, setContractType] = useState('')

    const newDate = new Date(date);

    const service = route.params.id;

    let cartServices;
    if(isEmpty(bookingCartServices.bookingCartList) ===false) {
        cartServices = bookingCartServices.bookingCartList.find(list => list.serviceId === service.serviceId && list.serviceName === service.serviceName)
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

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDate(!showDate);
        setDate(currentDate);
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

    return (
        <View>
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
            {/* <FieldButton 
                butonContainer={styles.butonContainer}
                buttonTouch={cartServices === undefined || null ? styles.buttonTouch : styles.TouchButton}
                buttonTouchText={cartServices === undefined || null ? null : styles.buttonTouchText}
                name={cartServices === undefined || null ? 'Book' : 'Checkout'} 
                onPress={() => 
                    cartServices === undefined || null ? 
                        setIsModel(!isModal)
                    : 
                        Alert.alert(
                            'Error',
                            'This Service is already added to Cart.',
                            [
                                {
                                    text: 'Cancel',
                                    onPress: () => console.log('Cancel'),
                                    style:'cancel'
                                },
                                {
                                    text: 'Checkout', 
                                    onPress: () => navigation.navigate('BookingCart')
                                }
                            ],
                            { cancelable: false },
                        )
                }
            /> */}
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
        </View>
    )
}

const styles = StyleSheet.create({
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
    bookingCartStructure: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    bookingCartServices: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    bookingCartServices: state.bookingCartServices
})

const mapDispatchToProps = { addToBookingCart, bookingCartStructure }

export default connect(mapStateToProps, mapDispatchToProps)(Service);