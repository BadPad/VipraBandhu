import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Heading({name, style}) {
    return (
        <View style={styles.container}>
            <Text style={{...styles.heading, ...style}}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf:'center',
        paddingBottom: 10,
    },
    heading: {
        fontSize: 30,
        color: '#3e206d'
    }
})