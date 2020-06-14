import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RegisterGridTiles = ({data, onSelect, selectedReg}) => {
    return (
        <TouchableOpacity onPress={() => onSelect(data.name)}>
            <View style={selectedReg === data.name? {...styles.registerBlock, ...styles.selectedRegisterBlock}: styles.registerBlock}>
                <Text style={styles.text}>{data.name}</Text>
                {selectedReg === data.name &&
                <MaterialCommunityIcons 
                    style={styles.selectedIcon}
                    name="check-decagram" 
                />}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    registerBlock: {
        marginHorizontal: 10,
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3
    },
    selectedRegisterBlock: {
        borderColor: '#D63031'
    },
    selectedIcon: {
        position: 'absolute',
        top: -6,
        right: -6,
        color: '#D63031',
        backgroundColor: '#fff'
    },
    text: {
        color: '#3c3b37',
        width: 100,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 15,
    }
})

export default RegisterGridTiles;

