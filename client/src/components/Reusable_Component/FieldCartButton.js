import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window');

const FieldCartButton = ({ 
    totalContainer,
    touchButton,
    buttonText,
    onPress,
    name,
    children
 }) => {
    return (
        <TouchableOpacity style={{...styles.container, ...totalContainer}} onPress={onPress}>
            <View style={{...styles.processButton, ...touchButton}}>
                <View>
                    <Text style={{...styles.textButton, ...buttonText}}>{name}</Text>
                </View>
                {children}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: width
    },
    processButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width,
        paddingVertical: 15,
        paddingHorizontal: 12,
        backgroundColor: '#f0c14b'
    },
    textButton: {
        fontSize: 17,
        fontWeight: 'bold',
    }
})

export default FieldCartButton
