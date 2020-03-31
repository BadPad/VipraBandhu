import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Heading({name, containerStyle, style}) {
    return (
        <View style={{...styles.container, ...containerStyle}}>
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
        fontSize: 30
    }
})