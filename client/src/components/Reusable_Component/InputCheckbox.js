import React from 'react'
import { View, Text, StyleSheet, CheckBox } from 'react-native'

const InputCheckbox = ({children, checkValue, onchange, errors}) => {
    return (
        <>
            <View style={styles.inputCheck}>
                <CheckBox 
                    onValueChange={onchange}
                    value={checkValue}
                />
                {children}
            </View>
            {errors && <Text style={styles.error}>{errors}</Text>}
        </>
    )
}

const styles = StyleSheet.create({
    inputCheck: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    error: {
        // paddingHorizontal: 16,
        // paddingBottom: 5,
        color: '#c81912'
    }
})

export default InputCheckbox
