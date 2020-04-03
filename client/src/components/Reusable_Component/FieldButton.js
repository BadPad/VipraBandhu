import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const FieldButton = ({butonContainer, buttonTouch, buttonTouchText, children, name, onPress}) => {
    return (
        <View style={butonContainer}>
            <TouchableOpacity style={{...styles.button, ...buttonTouch}} onPress={onPress}>
                <Text style={{...styles.buttonText, ...buttonTouchText}}>{name}</Text>
            </TouchableOpacity>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        backgroundColor: '#3e206d',
        borderRadius: 25,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#f0e3ff',
        textAlign: 'center'
    }
})

export default FieldButton;
