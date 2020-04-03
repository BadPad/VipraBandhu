import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';


const Wallets = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <View style={styles.boxes}>
                <Text>Wallet Balance</Text>
                <Text>100 Rs</Text>
            </View>
            <View style={styles.boxes}>
                <Text>My Recent Transactions</Text>
            </View>

            <View style={styles.boxes}>
                <Text>Manage Payments</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#C8C8C8'
    },
    boxes: {
        height: 40,
        margin: 10,
        backgroundColor: '#fff',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default Wallets

