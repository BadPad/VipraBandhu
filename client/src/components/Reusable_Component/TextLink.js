import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TextLink = ({text, linkText, onPress}) => {
    return (
        <View style={styles.textCont}>
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.linkButton} onPress={onPress} >{linkText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 5,
        flexDirection: 'row',
    },
    text: {
        fontSize: 16
    },
    linkButton: {
        color: '#d89cf6',
        fontSize: 16,
        fontWeight: '500'
    }
})

export default TextLink