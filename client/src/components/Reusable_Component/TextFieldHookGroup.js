import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Controller } from "react-hook-form";
import PropTypes from 'prop-types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TextFieldHookGroup = ({
    type,
    secureTextEntry,
    placeholder,
    control,
    title,
    required,
    multiline,
    name,
    onChange,
    rules,
    defaultValue,
    passwordControl,
    showPassword,
    errors
}) => {
    return (
        <View style={styles.container}>
            {title && <Text style={styles.title}>{title}  {required && <FontAwesome5 name="star-of-life" color="rgba(214, 48, 49, 1)" size={8} />}</Text>}
            <Controller 
                as={<TextInput 
                    style={styles.inputBox} 
                    multiline={multiline}
                    keyboardType={type}
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder} 
                />}
                control={control}
                name={name}
                onChange={onChange}
                rules={rules}
                defaultValue={defaultValue}
            />
            {name === 'password' && 
            <TouchableOpacity style={styles.showPassword} onPress={passwordControl}>
                <Ionicons name={showPassword ? 'ios-eye' : 'ios-eye-off'} color={showPassword ? 'rgba(68,68,68,0.8)' : 'rgba(68,68,68,0.5)'} size={20} />    
            </TouchableOpacity>}
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
        // marginBottom: 3
    },
    inputBox: {
        width: "100%",
        // backgroundColor: 'rgba(68,68,68,0.1)',
        borderRadius: 2,
        padding: 5,
        paddingLeft: 10,
        fontSize: 14,
        marginVertical: 2,
        borderWidth:0.5,
        borderColor: 'rgba(68,68,68,1)'
    },
    showPassword: {
        position: 'absolute',
        right: 0,
        padding: 11
    },
    error: {
        color: '#c81912'
    }
})

TextFieldHookGroup.propTypes = {
    type: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    defaultValue: PropTypes.string.isRequired,
    errors: PropTypes.string
}

TextFieldHookGroup.defaultProps = {
    type: 'default',
    multiline: false,
    secureTextEntry: false
}

export default TextFieldHookGroup
