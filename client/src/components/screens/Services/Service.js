import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../../Reusable_Component/Card/Card';
import CardSection from '../../Reusable_Component/Card/CardSection';
import Heading from '../../Reusable_Component/Heading';
import Carousel from '../../Reusable_Component/Image_Carousel/Carousel';
import FieldButton from '../../Reusable_Component/FieldButton';
import { addToBookingCart } from '../../../redux/actions/bookingCartActions';
import isEmpty from '../../Reusable_Component/is-empty';
import ModalView from '../../Reusable_Component/ModalView';
import DatePicker from '../../Reusable_Component/DateTimeSelector/DatePicker';
import ExistingDateSelector from '../../utils/ExistingDateSelector';

const Service = ({ navigation, route, addToBookingCart, bookingCartServices }) => {

    const [date, setDate] = useState(new Date().setSeconds(0,0));
    const [showDate, setShowDate] = useState(false);
    const [addNewDate, setAddNewDate] = useState(false);
    const [exDate, setExDate] = useState(false);
    const [isModal, setIsModel] = useState(false);

    const newDate = new Date(date);

    const service = route.params.id;

    let cartServices;
    if(isEmpty(bookingCartServices.bookingCartList) ===false) {
        cartServices = bookingCartServices.bookingCartList.find(list => list.serviceId === service.serviceId && list.serviceName === service.serviceName)
    }

    navigation.setOptions({ title: service.serviceName })

    const addAndCheckout = (service) => {
        service.serviceDate = newDate.toISOString();
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
                <FieldButton 
                    name="Continue"
                    onPress={() => addAndCheckout(service)}
                />
            </>
        )
    } else {
        modalContent = (
            <>
                <Text style={styles.existingHeading}>Preferred Dates</Text>
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
                <FieldButton 
                    name={exDate ? "Continue" : "Add New Date"}
                    onPress={() => 
                        exDate ?
                            addAndCheckout(service)
                        :
                            setAddNewDate(!addNewDate)
                    }
                />
            </>
        )
    }

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
                            <Heading containerStyle={styles.containerPoojaAmount} style={styles.poojaAmount} name={`Rs ${service.servicePrice}`} />
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
            <FieldButton 
                butonContainer={styles.butonContainer}
                buttonTouch={cartServices === undefined || null ? styles.buttonTouch : styles.TouchButton}
                buttonTouchText={cartServices === undefined || null ? null : styles.buttonTouchText}
                name={cartServices === undefined || null ? 'Book' : 'Added to Booking Cart'} 
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
    containerPoojaAmount: {
        alignSelf: 'flex-start',
        paddingBottom: 0
    },
    poojaAmount: {
        fontSize: 14,
        fontWeight: 'bold'
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
        marginBottom: 42
    },
    butonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    buttonTouch:{
        borderRadius: 0
    },
    TouchButton: {
        borderRadius: 0,
        backgroundColor: '#f0c14b'
    },
    buttonTouchText: {
        color: '#000',
        fontWeight: 'bold'
    },
    existingHeading: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    }
})

Service.propTypes = {
    addToBookingCart: PropTypes.func.isRequired,
    bookingCartServices: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    bookingCartServices: state.bookingCartServices
})

const mapDispatchToProps = { addToBookingCart }

export default connect(mapStateToProps, mapDispatchToProps)(Service);