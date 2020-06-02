import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { getShortDay, getShortMonth, getDate } from './GetUniqueDates'

const DeliveryDatesServiceList = ({ data, selectDate, selectedDate }) => {
    return (
        <TouchableOpacity 
            style={getDate(selectedDate) === getDate(data) ? {...styles.container, ...styles.containerSelected} : styles.container} 
            onPress={() => selectDate(data)}
        >
            <View style={styles.deliveryDates}>
                <Text style={getDate(selectedDate) === getDate(data) ? {...styles.day, ...styles.selectedDay} : styles.day}>{getShortDay(data)}</Text>
                <Text style={getDate(selectedDate) === getDate(data) ? {...styles.month, ...styles.selectedMonth} : styles.month}>{getShortMonth(data)}</Text>
                <View style={getDate(selectedDate) === getDate(data) ? {...styles.triangle, ...styles.selectedTriangle} : styles.triangle} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#EEE8E7',
        borderWidth: .7,
    },
    containerSelected: {
        backgroundColor: '#D63031'
    },
    deliveryDates: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 10,
        paddingHorizontal: 15
    },
    day: {
        color: "#212121",
        fontWeight: "bold",
        fontSize: 15
    },
    selectedDay: {
        color: "#F9F9F9"
    },
    month: {
        color: "#757473",
        fontWeight: "200",
        fontSize: 12
    },
    selectedMonth: {
        color: "#F9F9F9"
    },
    triangle: {
        position: 'absolute',
        bottom: 0,
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#F9F9F9'
    },
    selectedTriangle: {
        bottom: -1
    }
})

export default DeliveryDatesServiceList
