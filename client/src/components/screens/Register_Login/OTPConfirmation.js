import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldHookGroup from '../../Reusable_Component/TextFieldHookGroup';
import FieldButton from '../../Reusable_Component/FieldButton';
import { regLogCook, regLogPurohit, regLogCustomer } from '../../../redux/actions/authActions';

const { height } = Dimensions.get('window');

const OTPConfirmation = ({ navigation, newRegister, regLogCook, regLogPurohit, regLogCustomer }) => {
    const { control, errors, handleSubmit } = useForm({
        mode: "onSubmit",
        validateCriteriaMode: 'all',
        submitFocusError: true,
        nativeValidation: true,
    });
    const [dumOtp, setDumOtp] = useState('12345')

    const onSubmit = data => {
        if(data.otp === dumOtp) {
            const { regNewUser } = newRegister;
            const userData = {
                FirstName: regNewUser.firstName,
                LastName: regNewUser.lastName,
                EmailId: regNewUser.email,
                "phone number": '+91' + regNewUser.phoneNumber,
                password: regNewUser.password,
            }
            if(regNewUser.userType === 'cook') {
                regLogCook(userData, 'register', navigation)
            } else if(regNewUser.userType === 'purohit') {
                regLogPurohit(userData, 'register', navigation)
            } else if(regNewUser.userType === 'customer') {
                regLogCustomer(userData, 'register', navigation)
            }
        }
    }

    const { regNewUser } = newRegister;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.columnContainer}>
                <View style={styles.logo}>
                    <Text style={styles.logoText}>Sukalpaseva</Text>
                </View>
            </View>
            <View style={styles.verifyContainer}>
                <Text style={styles.verification}>Mobile Verification</Text>
                <Text style={styles.verifyNo}>Enter the One Time Password (OTP) that has been sent to a phone number ending in {regNewUser.phoneNumber.substr(regNewUser.phoneNumber.length - 3)}</Text>
            </View>
            <View style={[styles.regBlock, styles.regBlockContent]}>
                <View style={styles.content}>
                    <TextFieldHookGroup 
                        name="otp"
                        placeholder="Enter your OTP"
                        control={control}
                        onChange={args => args[0].nativeEvent.text}
                        rules={{ required: true }}
                        defaultValue=""
                        errors={errors.otp && 'Enter your OTP.'}
                    />
                    <View style={styles.formSubmit}>
                        <FieldButton 
                            name="Verify"
                            onPress={handleSubmit(onSubmit)}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    },
    columnContainer: {
        height: height / 2.8
    },
    logo: {
        alignItems: 'center',
        margin: 30
    },
    logoText: {
        fontSize: 25
    },
    verifyContainer: {
        marginHorizontal: 10
    },
    verification: {
        fontSize: 25
    },
    verifyNo: {
        fontSize: 16,
        paddingBottom: 5
    },
    regBlock: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3
    },
    regBlockContent: {
        marginHorizontal: 15,
        marginHorizontal: 10
    },
    content: {
        paddingVertical: 5
    },
    formSubmit: {
        margin: 10,
    }
})

OTPConfirmation.propTypes = {
    newRegister: PropTypes.object.isRequired,
    regLogCook: PropTypes.func.isRequired, 
    regLogPurohit: PropTypes.func.isRequired, 
    regLogCustomer: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    newRegister: state.newRegister
})

const mapDispatchToProps = { regLogCook, regLogPurohit, regLogCustomer }

export default connect(mapStateToProps, mapDispatchToProps)(OTPConfirmation)
