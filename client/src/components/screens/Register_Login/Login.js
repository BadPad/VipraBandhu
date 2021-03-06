import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from '../../Reusable_Component/is-empty';
import TextFieldHookGroup from '../../Reusable_Component/TextFieldHookGroup';
import FieldButton from '../../Reusable_Component/FieldButton';
import TextLink from '../../Reusable_Component/TextLink';
import { regLogCook, regLogPurohit, regLogCustomer } from '../../../redux/actions/authActions';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Indicator from '../../Reusable_Component/SpinnerIndicator/Indicator';
import { App_Color } from '../../Reusable_Component/ConstantValues';
import { FlatList } from 'react-native-gesture-handler';

const { height } = Dimensions.get('window');

const Login = ({ navigation, auth, regLogCook, regLogPurohit, regLogCustomer }) => {

    const { control, errors, handleSubmit } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange",
        validateCriteriaMode: 'all',
        submitFocusError: true,
        nativeValidation: true,
    });
    const [regData, setRegData] = useState('');
    const [selectRegData, setSelectRegData] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if(auth.isAuthenticated) {
            navigation.navigate('Welcome')
        }
    }, [auth])

    const onSelected = type => {
        setRegData(type)
        setSelectRegData(false)
    }

    const onSubmit = data => {

        if(isEmpty(regData)) {
            setSelectRegData(true)
        } else {
            const user = data;
            const userData = {
                "phone number": '+91' + user.phoneNumber,
                password: user.password
            }
            if(regData === 'cook') {
                regLogCook(userData, 'login', navigation)
            } else if(regData === 'purohit') {
                regLogPurohit(userData, 'login', navigation)
            } else if(regData === 'customer') {
                regLogCustomer(userData, 'login', navigation)
            }
        }
    }

    const resetNav = () => {
        navigation.navigate('Register')
    }

    return (
        <ScrollView style={styles.container}>
            {auth.loading && <Indicator />}
            <View style={styles.columnContainer}>
                <Image resizeMode='contain'
                    style={styles.images}
                    source={require('client/src/components/images/Logo.png')}
                />
            </View>
            <View style={styles.logTypeCont}>
                <Text style={styles.logTypeText}>Login Type</Text>
                <View style={styles.logType}>
                    <TouchableOpacity onPress={() => onSelected('cook')}>
                        <View style={regData === 'cook' ? [styles.logBlock, styles.selectedLogBlock] : styles.logBlock}>
                            <Text style={styles.blogText}>Cook</Text>
                            {regData === 'cook' &&
                            <MaterialCommunityIcons 
                                style={styles.selectedIcon}
                                name="check-decagram" 
                            />}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onSelected('purohit')}>
                        <View style={regData === 'purohit' ? [styles.logBlock, styles.selectedLogBlock] : styles.logBlock}>
                            <Text style={styles.blogText}>Purohit</Text>
                            {regData === 'purohit' &&
                            <MaterialCommunityIcons 
                                style={styles.selectedIcon}
                                name="check-decagram" 
                            />}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onSelected('customer')}>
                        <View style={regData === 'customer' ? [styles.logBlock, styles.selectedLogBlock] : styles.logBlock}>
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
                    <Text style={styles.error}><FontAwesome5 name="exclamation" />  Select what you want to login as ?</Text>
                :null}
            </View>
            <TextFieldHookGroup 
                type="numeric"
                name="phoneNumber"
                placeholder="Mobile Number *"
                control={control}
                onChange={args => args[0].nativeEvent.text}
                rules={{ required: true, minLength: 10, maxLength: 10, pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i }}
                defaultValue=""
                errors={errors?.phoneNumber?.types?.required ? 'Mobile Number is required!' : errors?.phoneNumber?.types?.pattern ? 'Mobile Number should be 10 digit number' : null}
            />
            <TextFieldHookGroup 
                name="password"
                placeholder="Password *"
                secureTextEntry={showPassword ? false : true}
                passwordControl={() => setShowPassword(!showPassword)}
                showPassword={showPassword}
                control={control}
                onChange={args => args[0].nativeEvent.text}
                rules={{ required: true }}
                defaultValue=""
                errors={errors?.password?.types?.required && 'Password is required!'}
            />
            <View style={styles.formSubmit}>
                <FieldButton 
                    name="Login"
                    onPress={handleSubmit(onSubmit)}
                >
                    <TextLink 
                        text="Don't have an account yet?"
                        linkText=" Sign Up"
                        onPress={resetNav}
                    />
                </FieldButton>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    columnContainer: {
        height: height / 3.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    images: {
        width: '40%',
        height:120,
        marginHorizontal: 'auto',
        marginBottom: 10,
        shadowRadius:10,
        shadowColor:'blue',
        marginTop:10,
        
    },
    logTypeCont: {
        margin: 5
    },
    logTypeText: {
        textAlign: 'center',
        padding: 5,
        marginBottom: 10,
        fontSize: 18,
        color: '#3c3b37'
    },
    logType: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    logBlock: {
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
    selectedLogBlock: {
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
    formSubmit: {
        margin: 10,
    }
})

Login.propTypes = {
    auth: PropTypes.object.isRequired,
    regLogCook: PropTypes.func.isRequired, 
    regLogPurohit: PropTypes.func.isRequired, 
    regLogCustomer: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = { regLogCook, regLogPurohit, regLogCustomer }

export default connect(mapStateToProps, mapDispatchToProps)(Login)
