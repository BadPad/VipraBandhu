import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Card from '../Reusable_Component/Card/Card'
import CardSection from '../Reusable_Component/Card/CardSection'
import Icon from 'react-native-vector-icons/AntDesign'
import { getMonthDate, getTime } from './GetUniqueDates'

const CateringBookingCartServiceList = ({ data, deleteSelected, noDelete }) => {
    return (
        <Card style={styles.container}>
            <CardSection style={styles.cartContent}>
                <View>
                    <Text style={styles.cardTitle}>{data.serviceName}</Text>
                    <Text style={styles.cardType}>Service Item : <Text style={styles.cardTypeText}>{data.serviceSubCategory}</Text></Text>
                </View>
                <TouchableOpacity style={noDelete ? styles.noDelete : styles.deleteCartService}  onPress={() => deleteSelected(data)} >
                    <View style={styles.deleteCartIcon} >
                        <Icon name="delete" size={20} 
                            backgroundColor="transparent" color="#D63031" 
                        ></Icon >
                    </View>
                </TouchableOpacity>
            </CardSection>
            {data.serviceSubCategory === 'lunch' || data.serviceSubCategory === 'dinner' ?
                <CardSection style={styles.cartContent}>
                    <Text style={styles.cardItems}>Items : </Text>
                    <Text style={styles.cardItemsList}>{data.serviceItems.join(', ')}</Text>
                </CardSection>
            : null}
            <CardSection style={styles.cartInfo}>
                <View style={styles.cardInfoContent}>
                    <Text style={styles.cardInfoHeading}>Service Date</Text>
                    <Text style={styles.cardInfoContentText}>{`${getMonthDate(data.serviceDate)}`}</Text>
                </View>
                <View style={[styles.cardInfoContent, styles.borderRightLeft]}>
                    <Text style={styles.cardInfoHeading}>Service Amount</Text>
                    <Text style={styles.cardInfoContentText}>Rs. {data.serviceAmount}</Text>
                </View>
                <View style={styles.cardInfoContent}>
                    <Text style={styles.cardInfoHeading}>No. of Persons</Text>
                    <Text style={styles.cardInfoContentText}>{data.servicePersonsCount}</Text>
                </View>
            </CardSection>
            <CardSection style={styles.cartTotalInfo}>
                <View style={styles.cartTotalContent}>
                    <Text style={styles.cardTotlaHeading}>Preffered Slot : </Text>
                    <Text style={styles.cardTotalContentText}>{getTime(data.serviceDate)}</Text>
                </View>
                <View style={styles.cartTotalContent}>
                    <Text style={styles.cardTotlaHeading}>Total Amount : </Text>
                    <Text style={styles.cardTotalContentText}>Rs. {data.servicePrice}</Text>
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
        fontSize: 12,
        textTransform: 'capitalize'
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
    cardItems: {
        color: '#837F7F',
        fontWeight: 'bold',
        fontSize: 12
    },
    cardItemsList: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'stretch'
    },
    cartInfo: {
        justifyContent: 'space-between'
    },
    cardInfoContent: {
        width: '33.33%',
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
    borderRightLeft: {
        borderColor: '#837F7F',
        borderLeftWidth: 0.3,
        borderRightWidth: 0.3
    },
    cartTotalInfo: {
        justifyContent: 'space-between',
        borderTopColor: '#837F7F',
        borderTopWidth: 0.3
    },
    cardTotlaHeading: {
        color: '#837F7F',
        fontWeight: 'bold',
        fontSize: 13
    },
    cartTotalContent: {
        flexDirection: 'row'
    },
    cardTotalContentText: {
        fontWeight: 'bold',
        fontSize: 13
    },
})

export default CateringBookingCartServiceList
