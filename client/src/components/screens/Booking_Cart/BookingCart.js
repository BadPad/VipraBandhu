import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from '../../Reusable_Component/is-empty';
import Heading from '../../Reusable_Component/Heading';
import BookingCartServiceList from '../../utils/BookingCartServiceList';
import CateringBookingCartServiceList from '../../utils/CateringBookingCartServiceList';
import { deleteFromBookingCart, bookingCartStructure } from '../../../redux/actions/bookingCartActions';
import Card from '../../Reusable_Component/Card/Card';
import CardSection from '../../Reusable_Component/Card/CardSection';
import FieldCartButton from '../../Reusable_Component/FieldCartButton';

import Icon from 'react-native-vector-icons/AntDesign';
import FieldButton from '../../Reusable_Component/FieldButton';

const BookingCart = ({ navigation, bookingCartServices, deleteFromBookingCart, bookingCartStructure }) => {

    // console.log(bookingCartServices.bookingCartList)

    const renderPoojaSeviceCartList = ({ item }) => {
        return (
            <BookingCartServiceList 
                key={item.serviceId} 
                data={item} 
                deleteSelected={selected => deleteFromBookingCart(selected)} 
            />
        )
    }

    const renderCateringSeviceCartList = ({ item }) => {
        return (
            <CateringBookingCartServiceList 
                key={item.serviceId} 
                data={item} 
                deleteSelected={selected => deleteFromBookingCart(selected)}
            />
        )
    }

    if(isEmpty(bookingCartServices.bookingCartList) === false) {
        const { bookingCartList } = bookingCartServices;
        const subCatList = bookingCartList.map(list => list.serviceSubCategory).filter((value, index, self) => self.indexOf(value) === index);
        for(let i = 0 ; i < subCatList.length ; i++){
            subCatList[i] = subCatList[i].charAt(0).toUpperCase() + subCatList[i].substr(1);;
        }
        const sum = bookingCartList.reduce((total, obj) => parseInt(obj.servicePrice) + parseInt(total), 0);
        const poojaBookingCartList = bookingCartList.filter(list => list.serviceCategory === 'purohit');
        const cateringBookingCartList = bookingCartList.filter(list => list.serviceCategory === 'catering');
        return(
            <View style={styles.container}>
                <Card>
                    <CardSection style={styles.cartTotalItems} >
                        <Text style={styles.cartServiceList}>{subCatList.join(' & ')}</Text>
                        <Text style={styles.countServices}>
                            {bookingCartServices.bookingCartList.length} {bookingCartServices.bookingCartList.length > 1 ? 'Services' : 'Service'}
                        </Text>
                    </CardSection>
                </Card>
                <ScrollView>
                    <FieldButton 
                        name="Book New Service"
                        butonContainer={styles.butonContainer}
                        onPress={() => navigation.navigate('Welcome')}
                    />
                    {!isEmpty(poojaBookingCartList) &&
                    <View style={styles.cartServices}>
                        <Text style={styles.cartServicesTitle}>Pooja Services</Text>
                        <FlatList 
                            keyExtractor={service => service.serviceId}
                            data={poojaBookingCartList}
                            renderItem={renderPoojaSeviceCartList}
                        />
                    </View>}
                    {!isEmpty(cateringBookingCartList) &&
                    <View style={styles.cartServices}>
                        <Text style={styles.cartServicesTitle}>Catering Services</Text>
                        <FlatList 
                            keyExtractor={service => service.serviceId}
                            data={cateringBookingCartList}
                            renderItem={renderCateringSeviceCartList}
                        />
                    </View>}
                </ScrollView>
                <FieldCartButton 
                    name="Checkout"
                    onPress={() => {
                        bookingCartStructure()
                        navigation.navigate('DeliveryOptions')
                    }}
                >
                    <View>
                        <Text style={styles.buttonText}>₹ {sum}   <Icon name="arrowright" size={20} backgroundColor="transparent" color="#000"></Icon ></Text>
                    </View>
                </FieldCartButton>
            </View>
        )
    } else {
        return(
            <>
                <Heading style={styles.noResult} name="Your Service Cart is empty." />
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        paddingBottom: 55
    },
    cartTotalItems: {
        justifyContent: 'space-between',
        paddingHorizontal: 9,
        backgroundColor: '#EEE8E7'
    },
    cartServiceList: {
        color: '#000',
        fontWeight: 'bold'
    },
    countServices: {
        color: '#757473'
    },
    noResult: {
        fontSize: 20,
        padding: 10
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    butonContainer: {
        margin: 9
    },
    cartServices: {
        margin: 5,
    },
    cartServicesTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }
})

BookingCart.propTypes = {
    deleteFromBookingCart: PropTypes.func.isRequired,
    bookingCartStructure: PropTypes.func.isRequired,
    bookingCartServices: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    bookingCartServices: state.bookingCartServices
})

const mapDispatchToProps = { deleteFromBookingCart, bookingCartStructure }

export default connect(mapStateToProps, mapDispatchToProps)(BookingCart)
