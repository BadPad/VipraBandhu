import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = ({ children, style }) => {
    return (
        <View style={{...styles.cardContainer, ...style}}>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1
    }
})

export default Card;
