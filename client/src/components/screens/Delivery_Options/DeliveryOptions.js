import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import FieldCartButton from '../../Reusable_Component/FieldCartButton'
import Heading from '../../Reusable_Component/Heading'

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Card from '../../Reusable_Component/Card/Card';
import CardSection from '../../Reusable_Component/Card/CardSection';
import DeliveryDatesServiceList from '../../utils/DeliveryDatesServiceList';
import { bookingCartStructureSelectedDate, addTimeToStructureSelectedDate } from '../../../redux/actions/bookingCartActions';
import BookingCartServiceList from '../../utils/BookingCartServiceList';
import DatePicker from '../../Reusable_Component/DateTimeSelector/DatePicker';
import FieldButton from '../../Reusable_Component/FieldButton';

const DeliveryOptions = ({ 
    navigation, 
    auth, 
    bookingCartServices, 
    bookingCartStructureSelectedDate,
    addTimeToStructureSelectedDate
}) => {

    const [selectedDate, setSelectedDate] = useState(`${bookingCartServices.bookingServiceDates[0]}`);
    const [dateTime, setDateTime] = useState(new Date(bookingCartServices && bookingCartServices.bookingCartStructureSelected && bookingCartServices.bookingCartStructureSelected.date));
    const [showDateTime, setShowDateTime] = useState(false);

    useEffect(() => {
        bookingCartStructureSelectedDate(selectedDate)
    }, [])

    useEffect(() => {
        setDateTime(new Date(bookingCartServices.bookingCartStructureSelected && bookingCartServices.bookingCartStructureSelected.date))
    }, [bookingCartServices.bookingCartStructureSelected])

    const { user } = auth;

    let address = auth.user.area + ', ' + auth.user.city + ', ' + auth.user.state;

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

    const onDateTimeChange = (event, selectedDate) => {
        const currentDateTime = selectedDate || date;
        setShowDateTime(!showDateTime);
        setDateTime(currentDateTime);
        addTimeToStructureSelectedDate(currentDateTime);
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Card>
                    <CardSection style={styles.addressHeading}>
                        <View style={styles.headLogText}>
                            <Icon name="location-pin" size={20} color="#D63031" />
                            <Heading containerStyle={styles.contAddHeading} style={styles.addHeading} name="Home" />
                        </View>
                        <View style={styles.changeAddButton}>
                            <Text style={styles.changeAddText}>Change</Text>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={styles.selectedAddress}>
                            <Text>{user.firstName}</Text>
                            <Text>{address}</Text>
                        </View>
                    </CardSection>
                    <CardSection style={styles.serviceSlots}>
                        <Text style={styles.serviceSlotsText}>Choose service timings for you services</Text>
                    </CardSection>
                </Card>
                <View>
                    <FlatList 
                        keyExtractor={item => item}
                        data={bookingCartServices.bookingServiceDates}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderServiceDatesList}
                    />
                </View>
                <View style={styles.selectedPoojaList}>
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
                                value={dateTime && dateTime}
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
                </View>
            </ScrollView>
            <FieldCartButton 
                name="Process to pay"
                touchButton={styles.touchButton}
                onPress={() => console.log('paymeny')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9'
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
        fontSize: 20,
        fontWeight: 'bold',
    },
    changeAddButton: {
        borderColor: '#D63031',
        borderWidth: 1,
        borderRadius: 5
    },
    changeAddText: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        color: '#D63031'
    },
    selectedAddress: {
        paddingHorizontal: 5
    },
    serviceSlots : {
        backgroundColor: '#EEE8E7',
        padding: 8,
        marginTop: 15,
        justifyContent: 'center'
    },
    serviceSlotsText: {
        fontSize: 12,
        color: '#757473'
    },
    selectedPoojaList: {
        margin: 10,
    },
    touchButton: {
        justifyContent: 'center'
    }
})

DeliveryOptions.propTypes = {
    bookingCartStructureSelectedDate: PropTypes.func.isRequired,
    addTimeToStructureSelectedDate: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    bookingCartServices: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    bookingCartServices: state.bookingCartServices
})

const mapDispatchToProps = { 
    bookingCartStructureSelectedDate, 
    addTimeToStructureSelectedDate 
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryOptions)
