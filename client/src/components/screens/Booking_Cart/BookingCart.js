import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from '../../Reusable_Component/is-empty';
import Heading from '../../Reusable_Component/Heading';
import BookingCartServiceList from '../../utils/BookingCartServiceList';
import { deleteFromBookingCart, bookingCartStructure } from '../../../redux/actions/bookingCartActions';
import Card from '../../Reusable_Component/Card/Card';
import CardSection from '../../Reusable_Component/Card/CardSection';
import FieldCartButton from '../../Reusable_Component/FieldCartButton';

import Icon from 'react-native-vector-icons/AntDesign';

const BookingCart = ({ navigation, bookingCartServices, deleteFromBookingCart, bookingCartStructure }) => {

    // console.log(bookingCartServices.bookingCartList)

    const renderSeviceCartList = ({ item }) => {
        return (
            <BookingCartServiceList 
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
                    <FlatList 
                        keyExtractor={service => service.serviceId}
                        data={bookingCartServices.bookingCartList}
                        renderItem={renderSeviceCartList}
                    />
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
