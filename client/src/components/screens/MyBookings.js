import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';


const MyBookings = ({ navigation }) => {
    

    return (
        <View style={styles.container}>
            <Text>My Orders / Bookings</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    }
})

export default MyBookings

