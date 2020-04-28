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
        backgroundColor: '#D63031',
        borderRadius: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center'
    }
})

export default FieldButton;
