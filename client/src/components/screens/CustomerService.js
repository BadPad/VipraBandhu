import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';


const CustService = ({ navigation }) => {
    

    return (
        <View style={styles.container}>
            <Text>Customer Service</Text>
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

export default CustService

