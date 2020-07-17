import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from '../../Reusable_Component/is-empty';
import TextFieldHookGroup from '../../Reusable_Component/TextFieldHookGroup';
import FieldButton from '../../Reusable_Component/FieldButton';
import TextLink from '../../Reusable_Component/TextLink';
import { registerNewUser } from '../../../redux/actions/registerActions';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Indicator from '../../Reusable_Component/SpinnerIndicator/Indicator';
import { App_Color } from '../../Reusable_Component/ConstantValues';

const { height } = Dimensions.get('window');

const Register = ({ navigation, registerNewUser }) => {
    const { reset, control, errors, getValues, handleSubmit } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange",
        validateCriteriaMode: 'all',
        submitFocusError: true,
        nativeValidation: true,
    });
    const [regData, setRegData] = useState('');
    const [selectRegData, setSelectRegData] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const onSelected = type => {
        setRegData(type)
        setSelectRegData(false)
    }

    const onSubmit = data => {

        if(isEmpty(regData)) {
            setSelectRegData(true)
        } else {
            const user = data;
            user.userType = regData;
            registerNewUser(data);
            navigation.navigate('OTPConfirmation')
        }
    }

    const resetNav = () => {
        navigation.navigate('Login')
    }

    return (
        <ScrollView style={styles.container}>
            {registerNewUser.loading && <Indicator />}
            <View style={styles.columnContainer}>
                <View style={styles.logo}>
                    <Text style={styles.logoText}>Sukalpaseva</Text>
                </View>
                <View style={styles.regTypeCont}>
                    <Text style={styles.regTypeText}>Registration Type</Text>
                    <View style={styles.regType}>
                        <TouchableOpacity onPress={() => onSelected('cook')}>
                            <View style={regData === 'cook' ? [styles.regBlock, styles.selectedRegBlock] : styles.regBlock}>
                                <Text style={styles.blogText}>Cook</Text>
                                {regData === 'cook' &&
                                <MaterialCommunityIcons 
                                    style={styles.selectedIcon}
                                    name="check-decagram" 
                                />}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onSelected('purohit')}>
                            <View style={regData === 'purohit' ? [styles.regBlock, styles.selectedRegBlock] : styles.regBlock}>
                                <Text style={styles.blogText}>Purohit</Text>
                                {regData === 'purohit' &&
                                <MaterialCommunityIcons 
                                    style={styles.selectedIcon}
                                    name="check-decagram" 
                                />}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onSelected('customer')}>
                            <View style={regData === 'customer' ? [styles.regBlock, styles.selectedRegBlock] : styles.regBlock}>
                                <Text style={styles.blogText}>Customer</Text>
                                {regData === 'customer' &&
                                <MaterialCommunityIcons 
                                    style={styles.selectedIcon}
                                    name="check-decagram" 
                                />}
                            </View>
                        </TouchableOpacity>
                    </View>
                    {selectRegData ? 
                        <Text style={styles.error}><FontAwesome5 name="exclamation" />  Select what you want to register as ?</Text>
                    :null}
                </View>
            </View>
            <View style={[styles.regBlock, styles.regBlockContent]}>
                <View style={styles.content}>
                    <TextFieldHookGroup 
                        name="firstName"
                        placeholder="First Name *"
                        control={control}
                        onChange={args => args[0].nativeEvent.text.replace(/[^A-Za-z]/ig, '')}
                        rules={{ required: true }}
                        defaultValue=""
                        errors={errors.firstName && 'First Name is required! *'}
                    />
                    <TextFieldHookGroup 
                        name="lastName"
                        placeholder="Last Name"
                        control={control}
                        onChange={args => args[0].nativeEvent.text.replace(/[^A-Za-z]/ig, '')}
                        defaultValue=""
                    />
                    <TextFieldHookGroup 
                        type="email-address"
                        name="email"
                        placeholder="Email Address"
                        control={control}
                        onChange={args => args[0].nativeEvent.text}
                        rules={{ pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i }}
                        defaultValue=""
                        errors={errors?.email?.types?.pattern ? 'Email is invalid!' : null}
                    />
                    <TextFieldHookGroup 
                        type="numeric"
                        name="phoneNumber"
                        placeholder="Mobile Number *"
                        control={control}
                        onChange={args => args[0].nativeEvent.text}
                        rules={{ required: true, minLength: 10, maxLength: 10, pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i }}
                        defaultValue=""
                        errors={errors?.phoneNumber?.types?.required ? 'Mobile Number is required! *' : errors?.phoneNumber?.types?.pattern ? 'Mobile Number should be 10 digit number' : null}
                    />
                    <TextFieldHookGroup 
                        name="password"
                        placeholder="Password *"
                        secureTextEntry={showPassword ? false : true}
                        passwordControl={() => setShowPassword(!showPassword)}
                        showPassword={showPassword}
                        control={control}
                        onChange={args => args[0].nativeEvent.text}
                        rules={{ required: true, minLength: 8 }}
                        defaultValue=""
                        errors={
                            errors?.password?.types?.required ? 
                                'Password is required! *'  
                            : errors?.password?.types?.minLength ? 
                                'Password must be Minimum eight characters' 
                        : null}
                    />
                    <TextFieldHookGroup 
                        name="cpassword"
                        placeholder="Confirm Password *"
                        secureTextEntry={true}
                        control={control}
                        onChange={args => args[0].nativeEvent.text}
                        rules={{ 
                            required: 'Please confirm password! *', 
                            validate: {
                                matchesPreviousPassword: value => {
                                    const { password } = getValues();
                                    return password === value || "Passwords should match!";
                                }
                            }
                        }}
                        defaultValue=""
                        errors={errors.cpassword && errors.cpassword.message}
                    />
                    <View style={styles.formSubmit}>
                        <FieldButton 
                            name="Register"
                            onPress={handleSubmit(onSubmit)}
                        >
                            <TextLink 
                                text="Already have an account?"
                                linkText=" Log In"
                                onPress={resetNav}
                            />
                        </FieldButton>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    logo: {
        alignItems: 'center',
        margin: 10
    },
    logoText: {
        fontSize: 25
    },
    regTypeCont: {
        margin: 5,
        marginBottom: 10
    },
    regTypeText: {
        textAlign: 'center',
        padding: 5,
        marginBottom: 5,
        fontSize: 18,
        color: '#3c3b37'
    },
    regType: {
        flexDirection: 'row',
        justifyContent: 'space-around',
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
    selectedRegBlock: {
        borderColor: App_Color
    },
    blogText: {
        color: '#3c3b37',
        width: 105,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10
    },
    selectedIcon: {
        position: 'absolute',
        top: -6,
        right: -6,
        color: App_Color,
        backgroundColor: '#fff'
    },
    error: {
        paddingHorizontal: 10,
        color: '#c81912'
    },
    regBlockContent: {
        marginHorizontal: 15,
        marginHorizontal: 10
    },
    content: {
        paddingVertical: 5
    },
    formField: {
        flex: 1
    },
    formSubmit: {
        margin: 10,
    }
})

Register.propTypes = {
    registerNewUser: PropTypes.func.isRequired,
}

const mapDispatchToProps = { registerNewUser }

export default connect(null, mapDispatchToProps)(Register);
