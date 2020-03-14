import React from 'react'
import { View, Text, StyleSheet, CheckBox } from 'react-native'

const InputCheckbox = ({checkText, checkValue, onchange}) => {
    return (
        <View style={styles.inputCheck}>
            <CheckBox 
                onValueChange={onchange}
                value={checkValue}
            />
            <Text style={styles.checkText}>{checkText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    inputCheck: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    checkText: {
        marginTop: 5
    },
})

export default InputCheckbox
