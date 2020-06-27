import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,TextInput } from 'react-native'
import { useForm, Controller } from "react-hook-form";

const AddNewAddress = ({
    navigation
}) => {
    const { control, errors, handleSubmit } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange",
        validateCriteriaMode: 'all',
        submitFocusError: true,
        nativeValidation: true,
    });

    return (
        <View style={styles.container}>
            <Controller 
                as={<TextInput 
                    style={styles.inputBox}
                    placeholder="Name"
                />}
                control={control}
                name="name"
                defaultValue=""
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 10
    },
    inputBox: {
        width: "100%",
        padding: 5,
        fontSize: 14,
        marginVertical: 2,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(68,68,68,0.5)',
    }
})

export default AddNewAddress
