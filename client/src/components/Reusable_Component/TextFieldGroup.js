import React from 'react';
import { StyleSheet, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types'

const TextFieldGroup = ({
    type,
    secureTextEntry,
    placeholder,
    onChange,
    value,
    errors
}) => {
    return (
        <>
            <TextInput 
                style={styles.inputBox}
                keyboardType={type}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                onChangeText={onChange}
                value={value}
            />
            {errors && <Text style={styles.error}>{errors}</Text>}
        </>
    )
}

const styles = StyleSheet.create({
    inputBox: {
        width: "100%",
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 5,
        padding: 5,
        paddingLeft: 10,
        fontSize: 16,
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
    secureTextEntry: PropTypes.bool.isRequired,
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