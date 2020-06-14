import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TextLink = ({text, linkText, styleLinkContainer, link, onPress}) => {
    return (
        <View style={{...styles.textCont, ...styleLinkContainer}}>
            <Text style={styles.text}>{text}</Text>
            <Text style={{...styles.linkButton, ...link}} onPress={onPress} >{linkText}</Text>
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
        fontSize: 16,
        color: '#3c3b37'
    },
    linkButton: {
        color: '#D63031',
        fontSize: 16,
        fontWeight: '500'
    }
})

export default TextLink
