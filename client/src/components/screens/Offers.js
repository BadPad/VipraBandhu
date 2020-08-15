import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';


const Offers = ({ navigation }) => {
    

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 20, padding: 15, fontWeight: 'bold', color: 'blue' }}>Offers</Text>
                </View>
                <View>
                <Text style={{ paddingLeft: 15, fontSize: 15, paddingTop: 5, paddingBottom: 15 }}> Refer & Earn Rs.50</Text>
                <Text style={{ paddingLeft: 15, fontSize: 15, paddingTop: 15, paddingBottom: 15 }}> If booking amount is for 10000 – 15000, Customer gets cashback of 200 Rs which gets added to
        the Wallet</Text>
                <Text style={{ paddingLeft: 15, fontSize: 15, paddingTop: 15, paddingBottom: 15 }}> If booking amount is 15001 – 20000, Customer gets cashback of 500 Rs which gets added to Wallet</Text>
                <Text style={{ paddingLeft: 15, fontSize: 15, paddingTop: 15, paddingBottom: 15 }}> If 2 or more bookings are done in a month, they get 200 Rs cashback from the 2nd booking for every subsequent bookings (each booking for a different date) </Text>
            </View>
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

export default Offers
