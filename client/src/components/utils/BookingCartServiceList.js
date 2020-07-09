import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Card from '../Reusable_Component/Card/Card'
import CardSection from '../Reusable_Component/Card/CardSection'
import Icon from 'react-native-vector-icons/AntDesign'
import { getMonthDate } from './GetUniqueDates'

const BookingCartServiceList = ({ data, deleteSelected, noDelete }) => {
    return (
        <Card style={styles.container}>
            <CardSection style={styles.cartContent}>
                <View>
                    <Text style={styles.cardTitle}>{data.serviceName}</Text>
                    <Text style={styles.cardType}>Type : <Text style={styles.cardTypeText}>{data.contractType}</Text></Text>
                </View>
                <TouchableOpacity style={noDelete ? styles.noDelete : styles.deleteCartService}  onPress={() => deleteSelected(data)} >
                    <View style={styles.deleteCartIcon} >
                        <Icon name="delete" size={20} 
                            backgroundColor="transparent" color="#D63031" 
                        ></Icon >
                    </View>
                </TouchableOpacity>
            </CardSection>
            <CardSection style={styles.cartInfo}>
                <View style={[styles.cardInfoContent, styles.borderRightLine]}>
                    <Text style={styles.cardInfoHeading}>Service Date</Text>
                    <Text style={styles.cardInfoContentText}>{`${getMonthDate(data.serviceDate)}`}</Text>
                </View>
                <View style={styles.cardInfoContent}>
                    <Text style={styles.cardInfoHeading}>Service Amount</Text>
                    <Text style={styles.cardInfoContentText}>Rs. {data.servicePrice}</Text>
                </View>
            </CardSection>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 5,
        borderColor: '#837F7F',
        borderWidth: 0.3,
        borderBottomWidth: 0.3
    },
    cartContent: {
        justifyContent: 'space-between',
        borderBottomColor: '#837F7F',
        borderWidth: 0.5
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 15
    },
    cardType: {
        color: '#837F7F',
        fontSize: 12
    },
    cardTypeText: {
        fontWeight: 'bold'
    },
    deleteCartService: {
        alignSelf: 'center'
    },
    deleteCartIcon: {
        padding: 10
    },
    noDelete: {
        display: 'none'
    },
    cartInfo: {
        justifyContent: 'space-between'
    },
    cardInfoContent: {
        width: '50%',
        alignItems: 'center'
    },
    cardInfoHeading: {
        color: '#837F7F',
        fontWeight: 'bold',
        fontSize: 12
    },
    cardInfoContentText: {
        fontWeight: 'bold',
        fontSize: 13
    },
    borderRightLine: {
        borderRightColor: '#837F7F',
        borderRightWidth: 0.3
    }
})

export default BookingCartServiceList
