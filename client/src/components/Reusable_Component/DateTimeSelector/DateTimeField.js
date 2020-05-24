import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { getDate, getTime } from '../../utils/GetUniqueDates';

const DateTimeField = ({
    pickerText,
    displayDateTime,
    dateContent,
    onPress,
    mode,
    name,
    value
}) => {
    return (
        <>
            <Text styles={{...styles.text, ...pickerText}}>
                <Icon 
                    name={
                        mode === 'date' ? 
                            "calendar" 
                        : mode === 'time' ?
                            "clock"
                        : null
                    } 
                    size={20} 
                    color={
                        mode === 'date' ? 
                            "#2E86C1" 
                        : mode === 'time' ?
                            "#CB4335"
                        : null
                    }
                />  {name}
            </Text>
            <TouchableOpacity 
                style={{...styles.displayDT, ...displayDateTime}} 
                onPress={onPress} 
            >
                <View>
                    <Text style={{...styles.textContent, ...dateContent}}>
                        {mode === 'date' ?
                            getDate(value)
                        : mode === 'time' ?
                            getTime(value)
                        : null}
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    displayDT: {
        width:'60%', 
        borderWidth: 1, 
        borderColor: 'rgba(128, 128, 128, 0.5)',
        padding: 10
    },
    textContent: {
        textAlign: 'center'
    }
})

export default DateTimeField
