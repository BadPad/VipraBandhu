import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Foundation'

const FaqIcon = ({ navigation }) => {    
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Faq')}>            
            <Icon style = {styles.faq} name="info" size={25} backgroundColor="#D63031" color="#fff" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    faq: {
        paddingRight: 20,
        
    }
})

export default FaqIcon
