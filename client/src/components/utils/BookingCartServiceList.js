import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Card from '../Reusable_Component/Card/Card'
import CardSection from '../Reusable_Component/Card/CardSection'
import Heading from '../Reusable_Component/Heading'
import Icon from 'react-native-vector-icons/AntDesign'

const BookingCartServiceList = ({ data, deleteSelected }) => {
    return (
        <Card style={styles.container}>
            <CardSection style={styles.cartContent}>
                <View>
                    <Heading containerStyle={styles.containerTitle} style={styles.serviceTitleStyle} name={data.serviceName} />
                    <Heading containerStyle={styles.containerPoojaAmount} style={styles.poojaAmount} name={`Rs ${data.servicePrice}`} />
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
    containerPoojaAmount: {
        alignSelf: 'flex-start',
        paddingBottom: 0
    },
    poojaAmount: {
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
