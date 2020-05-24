import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

const FieldButton = ({butonContainer, buttonTouch, buttonTouchText, children, name, onPress}) => {
    return (
        <View style={butonContainer}>
            <TouchableHighlight style={{...styles.button, ...buttonTouch}} onPress={onPress}>
                <Text style={{...styles.buttonText, ...buttonTouchText}}>{name}</Text>
            </TouchableHighlight>
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