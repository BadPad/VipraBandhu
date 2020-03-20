import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';


const About = ({ navigation }) => {
    

    return (
        <View style={styles.container}>
            <Text>About Sukalpa Seva</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
    }
})

export default About

