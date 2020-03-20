import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';


const Notifications = ({ navigation }) => {
    

    return (
        <View style={styles.container}>
            <Text>Notifications</Text>
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

export default Notifications