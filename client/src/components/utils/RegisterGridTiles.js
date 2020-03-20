import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native'

const RegisterGridTiles = ({data, onSelect}) => {
    let TouchableCmp = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <TouchableCmp onPress={() => onSelect(data.name)}>
            <View style={styles.registerType}>
                <Text style={styles.text}>{data.name}</Text>
            </View>
        </TouchableCmp>
    )
}

const styles = StyleSheet.create({
    registerType: {
        height: 100,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
        borderColor: '#916dd5',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3e206d'
    },
    text: {
        fontSize: 18,
        color: '#f0e3ff'
    }
})

export default RegisterGridTiles;

