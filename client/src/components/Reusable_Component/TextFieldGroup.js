import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types'

const TextFieldGroup = ({
    type,
    secureTextEntry,
    placeholder,
    onChange,
    value
}) => {
    return (
        <TextInput 
            style={styles.inputBox}
            keyboardType={type}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
        />
    )
}

const styles = StyleSheet.create({
    inputBox: {
        width: "100%",
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        marginVertical: 3
    },
})

TextFieldGroup.propTypes = {
    type: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

TextFieldGroup.defaultProps = {
    type: 'default',
    secureTextEntry: true
}

export default TextFieldGroup;