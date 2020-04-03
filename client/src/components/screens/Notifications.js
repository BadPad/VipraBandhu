import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';


const Notifications = ({ navigation }) => {
    

    return (
        <View style={styles.container}>
            <View style={styles.boxes}>
                <Text>Currently there are notifications to show</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        
    },
    boxes: {
        margin:10,
        padding:10,
        borderWidth:0.6,
        borderColor:'grey'
    }
})

export default Notifications