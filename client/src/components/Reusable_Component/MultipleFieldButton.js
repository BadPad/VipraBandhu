import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

import Entypo from 'react-native-vector-icons/Entypo'
import { App_Color } from './ConstantValues'

const MultipleFieldButton = ({ butonContainer, onPressBck, buttonBckTouch, onPressCheck, buttoncheckTouch, buttoncheckTouchText, name,  }) => {
    return (
        <View style={{...styles.container, ...butonContainer}}>
            <TouchableHighlight style={{...styles.buttonBck, ...buttonBckTouch}} onPress={onPressBck}>
                <Entypo style={styles.btnBckArrow} name="back" size={22} color="#000" />
            </TouchableHighlight>
            <TouchableHighlight style={{...styles.buttoncheck, ...buttoncheckTouch}} onPress={onPressCheck}>
                <Text style={{...styles.buttoncheckText, ...buttoncheckTouchText}}>{name}</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonBck: {
        width: '50%',
        backgroundColor: '#f2e9f9',
        paddingVertical: 13
    },
    btnBckArrow: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttoncheck: {
        width: '50%',
        backgroundColor: App_Color,
        paddingVertical: 13
    },
    buttoncheckText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'OpenSans-Regular',
    }
})

export default MultipleFieldButton
