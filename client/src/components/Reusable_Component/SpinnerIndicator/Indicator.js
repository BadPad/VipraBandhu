import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BallIndicator } from 'react-native-indicators';

const Indicator = () => {
    return (
        <View style={styles.container}>
            <BallIndicator color="#330867" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'transparent',
        zIndex: 100
    }
})

export default Indicator
