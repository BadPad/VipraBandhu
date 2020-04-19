import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Card from '../Reusable_Component/Card/Card'
import CardSection from '../Reusable_Component/Card/CardSection'
import Icon from 'react-native-vector-icons/Ionicons';

const BookingsCardList = ({ data, onSelectBooking }) => {
    return (
        <TouchableOpacity activeOpacity={.7} onPress={() => onSelectBooking(data.id)}>
            <View style={styles.box}>

                <View style={styles.values}>
                    <Text style={styles.dataServiceText}>{data.name}</Text>
                    <Text style={styles.dataText}>Date - {data.date}</Text>
                    <Text style={styles.dataText}>Booking# - {data.bookingId}</Text>
                </View>
                <View style={styles.arrow}>
                    <Icon name="ios-arrow-forward" size={20}
                        backgroundColor="transparent" color="#D63031"
                    ></Icon >
                </View>



            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-around',
        backgroundColor: "white",
        margin: 10,
        marginBottom: 0,
        marginTop: 0.5,
        padding: 10,
        borderWidth: 0.5,
        borderColor: "lightgrey",
        borderRadius:5
    },
    values:{
        width:'80%'
    },
    arrow:{
        justifyContent:'flex-end',
        alignItems:'center',
        flexDirection:'row'
    },
    dataServiceText:{
        fontSize:17
    },
    dataText:{
        fontSize:13,
        
    }

})

export default BookingsCardList
