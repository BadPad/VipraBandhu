import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { Font_Name_Regular, App_Color } from './ConstantValues'

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
        backgroundColor: App_Color,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        fontFamily: Font_Name_Regular,
    }
})

export default FieldButton;