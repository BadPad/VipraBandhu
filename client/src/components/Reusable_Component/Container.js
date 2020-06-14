import React from 'react'
import { View, StyleSheet } from 'react-native'

const Container = ({ children, style }) => {
    return (
        <View style={{...styles.container, ...style}} >
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#C8C8C8'
    }
})

export default Container
