import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Card from '../Reusable_Component/Card/Card'
import CardSection from '../Reusable_Component/Card/CardSection'
import Heading from '../Reusable_Component/Heading'
import Icon from 'react-native-vector-icons/AntDesign'
import { getDate } from './GetUniqueDates'

const BookingCartServiceList = ({ data, deleteSelected }) => {
    console.log(data)
    return (
        <Card style={styles.container}>
            <CardSection style={styles.cartContent}>
                <View>
                    <Heading containerStyle={styles.containerTitle} style={styles.serviceTitleStyle} name={data.serviceName} />
                    <Heading containerStyle={styles.containerPoojaInfo} style={styles.poojaDetails} name={`Date : ${getDate(data.serviceDate)}`} />
                    <Heading containerStyle={styles.containerPoojaInfo} style={styles.poojaDetails} name={`Amount : Rs ${data.servicePrice}`} />
                </View>
                <TouchableOpacity style={styles.deleteCartService} onPress={() => deleteSelected(data)}>
                    <View style={styles.deleteCartIcon} >
                        <Icon name="delete" size={20} 
                            backgroundColor="transparent" color="#D63031" 
                        ></Icon >
                    </View>
                </TouchableOpacity>
            </CardSection>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5
    },
    cartContent: {
        justifyContent: 'space-between',
        paddingHorizontal: 9
    },
    containerTitle: {
        paddingBottom: 0
    },
    serviceTitleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 0.2
    },
    containerPoojaInfo: {
        alignSelf: 'flex-start',
        paddingBottom: 0
    },
    poojaDetails: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    deleteCartService: {
        alignSelf: 'center'
    },
    deleteCartIcon: {
        padding: 10
    }
})

export default BookingCartServiceList
