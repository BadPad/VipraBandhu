import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import PropTypes from 'prop-types'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const TextFieldGroup = ({
    title,
    required,
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
            {title && <Text style={styles.title}>{title}  {required && <FontAwesome5 name="star-of-life" color="rgba(214, 48, 49, 1)" size={8} />}</Text>}
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
            {errors && <Text style={styles.error}><FontAwesome5 name="exclamation" />  {errors}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 5
    },
    title: {
        color: '#008b8b',
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
        borderColor: 'rgba(68,68,68,1)'
    },
    error: {
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