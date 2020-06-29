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
    errors,
    maxLength,
    multiline,
    star
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.required}>{star}</Text>
            </View>
            <TextInput 
                style={styles.inputBox}
                keyboardType={type}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                onChangeText={onChange}
                value={value}
                maxLength={maxLength}
                multiline={multiline}
            />
            {errors && <Text style={styles.error}>{errors}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 5
    },
    row: {
        flex: 1,
        flexDirection: "row"
    },
    title: {
        color: 'rgba(60, 59, 55, .9)'
    },
    required: {
        color: 'red',
        fontSize: 15,
        paddingLeft: 5
    },
    inputBox: {
        width: "100%",
        borderRadius: 2,
        padding: 5,
        paddingLeft: 10,
        fontSize: 14,
        marginVertical: 2,
        borderWidth:0.5,
        borderColor: 'rgba(68,68,68,1)',
        color: 'rgba(60, 59, 55, .9)'
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