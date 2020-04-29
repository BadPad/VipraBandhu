import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../../Reusable_Component/Card/Card';
import CardSection from '../../Reusable_Component/Card/CardSection';
import Heading from '../../Reusable_Component/Heading';
import Carousel from '../../Reusable_Component/Image_Carousel/Carousel';
import FieldButton from '../../Reusable_Component/FieldButton';
import { addToBookingCart } from '../../../redux/actions/bookingCartActions';
import isEmpty from '../../Reusable_Component/is-empty';

const Service = ({ navigation, route, addToBookingCart, bookingCartServices }) => {

    const service = route.params.id;

    let cartServices;
    if(isEmpty(bookingCartServices.bookingCartList) ===false) {
        cartServices = bookingCartServices.bookingCartList.find(list => list.serviceId === service.serviceId && list.serviceName === service.serviceName)
        console.log(cartServices)
    }

    navigation.setOptions({ title: service.serviceName })

    const addAndCheckout = (service) => {
        addToBookingCart(service)
        navigation.navigate('BookingCart')
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
            <FieldButton 
                butonContainer={styles.butonContainer}
                buttonTouch={cartServices === undefined || null ? styles.buttonTouch : styles.TouchButton}
                buttonTouchText={cartServices === undefined || null ? null : styles.buttonTouchText}
                name={cartServices === undefined || null ? 'Book' : 'Added to Booking Cart'} 
                onPress={() => 
                    cartServices === undefined || null ? 
                        addAndCheckout(service) 
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
    }
})

Service.propTypes = {
    bookingCartServices: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    bookingCartServices: state.bookingCartServices
})

const mapDispatchToProps = { addToBookingCart }

export default connect(mapStateToProps, mapDispatchToProps)(Service);
