import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';


const Offers = ({ navigation }) => {
    

    return (
        <View style={styles.container}>
            <Text>Offers</Text>
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

