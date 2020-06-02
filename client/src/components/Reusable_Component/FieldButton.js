import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

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
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'OpenSans-Regular',
    }
})

export default FieldButton;