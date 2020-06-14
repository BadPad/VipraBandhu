import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import PropTypes from 'prop-types'

const TextFieldGroup = ({
    name,
    type,
    secureTextEntry,
    placeholder,
    onChange,
    value,
    errors
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <TextInput 
                style={styles.inputBox}
                keyboardType={type}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                onChangeText={onChange}
                value={value}
            />
            {errors && <Text style={styles.error}>{errors}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    title: {
        color: 'rgba(60, 59, 55, .9)',
        marginBottom: 3
    },
    inputBox: {
        width: "100%",
        backgroundColor: 'rgba(68,68,68,0.1)',
        borderRadius: 2,
        padding: 5,
        paddingLeft: 10,
        fontSize: 14,
        marginVertical: 2,
        borderWidth:0.5,
        borderColor:'lightgrey'
    },
    error: {
        paddingHorizontal: 16,
        paddingBottom: 5,
        color: '#c81912'
    }
})

TextFieldGroup.propTypes = {
    type: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    errors: PropTypes.string
}

TextFieldGroup.defaultProps = {
    type: 'default',
    secureTextEntry: false
}

export default TextFieldGroup;