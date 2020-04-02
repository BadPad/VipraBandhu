import React, { useState } from 'react';
import { StyleSheet, View, FlatList, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Container from '../../Reusable_Component/Container';
import RegisterGridTiles from '../../utils/RegisterGridTiles';
import TextFieldGroup from '../../Reusable_Component/TextFieldGroup';
import FieldButton from '../../Reusable_Component/FieldButton';
import InputCheckbox from '../../Reusable_Component/InputCheckbox';
import Heading from '../../Reusable_Component/Heading';
import TextLink from '../../Reusable_Component/TextLink';
import { regCustomer, regPurohit, regCook } from '../../../redux/actions/authActions';
import { validateRegisterInput } from '../../Reusable_Component/Validation/Register';

const registerType = [
    { key: 1, name: 'Cook' },
    { key: 2, name: 'Purohit' },
    { key: 3, name: 'Customer' }
]

const initialState = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    area: '',
    landmark: '',
    aadharNo: '',
    accountNo: '',
    serviceList: '',
    typeOfService: ''
};

const Register = ({ navigation, regCustomer, regPurohit, regCook }) => {
    const [formData, setFormData] = useState({...initialState});
    const [regType, setRegType] = useState(false);
    const [regData, setRegData] = useState('');
    const [tc, setTc] = useState(false);
    const [errors, setErrors] = useState({})

    const onSelected = data => {
        setRegType(true);
        setRegData(data);
    }

    const renderRegisterType = type => {
        return(
            <RegisterGridTiles 
                data={type.item} 
                onSelect={onSelected}
            />
        )
    }
    
    const resetNav = () => {
        setRegType(false)
        setFormData(initialState)
        setErrors({})
        setTc(false)
        navigation.navigate('Login')
    }

    const submit = () => {

        const { errors, isValid } = validateRegisterInput(formData, regData, tc)
        
        if(isValid) {
            setErrors(errors)

            const regCustomers = {
                FirstName: formData.firstName,
                LastName: formData.lastName,
                MobileNumber: parseInt(formData.phone),
                EmailId: formData.email,
                Password: formData.confirmPassword,
                Area: formData.area,
                Landmark: formData.landmark,
            }

            const regVendor = {
                FirstName: formData.firstName,
                LastName: formData.lastName,
                MobileNumber: parseInt(formData.phone),
                EmailId: formData.email,
                Password: formData.confirmPassword,
                Area: formData.area,
                AadharNumber: formData.aadharNo,
                AccountNumber: formData.accountNo,
                ServiceList: formData.serviceList,
                TypeOfService: formData.typeOfService
            }

            regData === 'Cook' ?
                regCook(regVendor)
            : regData === 'Purohit' ?
                regPurohit(regVendor)
            :  regData === 'Customer' ?
                regCustomer(regCustomers)
            : null

        } else {
            setErrors(errors)
        }
    }

    return (
        <Container style={styles.container}>
            {
                !regType ?
                    <View>
                        <Heading 
                            name="What you want to register as ?" 
                            style={styles.regSelection} 
                        />
                        {/* <Text style={styles.heading}>What you want to register as ?</Text> */}
                        <FlatList 
                            keyExtractor={(item) => item.key.toString()}
                            data={registerType}
                            renderItem={renderRegisterType}
                        />
                    </View>
                :
                    <View>
                        <ScrollView>
                            <Heading name="Register" />
                            <TextFieldGroup 
                                placeholder="First Name"
                                onChange={text => setFormData({...formData, firstName: text})}
                                value={formData.firstName}
                                errors={errors.firstName}
                            />
                            <TextFieldGroup 
                                placeholder="Last Name"
                                onChange={text => setFormData({...formData, lastName: text})}
                                value={formData.lastName}
                                errors={errors.lastName}
                            />
                            <TextFieldGroup 
                                type="numeric"
                                placeholder="Mobile Number"
                                onChange={text => setFormData({...formData, phone: text})}
                                value={formData.phone}
                                errors={errors.phone}
                            />
                            <TextFieldGroup 
                                type="email-address"
                                placeholder="Email-Address"
                                onChange={text => setFormData({...formData, email: text})}
                                value={formData.email}
                                errors={errors.email}
                            />
                            <TextFieldGroup 
                                secureTextEntry={true}
                                placeholder="Password"
                                onChange={text => setFormData({...formData, password: text})}
                                value={formData.password}
                                errors={errors.password}
                            />
                            <TextFieldGroup 
                                secureTextEntry={true}
                                placeholder="Confirm Password"
                                onChange={text => setFormData({...formData, confirmPassword: text})}
                                value={formData.confirmPassword}
                                errors={errors.confirmPassword}
                            />
                            <TextFieldGroup 
                                placeholder="Area"
                                onChange={text => setFormData({...formData, area: text})}
                                value={formData.area}
                                errors={errors.area}
                            />
                            {regData === 'Customer' && 
                            <TextFieldGroup 
                                placeholder="Landmark"
                                onChange={text => setFormData({...formData, landmark: text})}
                                value={formData.landmark}
                                errors={errors.landmark}
                            />}
                            {regData === 'Cook' ||  regData === 'Purohit' ?
                            <>
                                <TextFieldGroup 
                                    type="numeric"
                                    placeholder="Aadhar Number"
                                    onChange={text => setFormData({...formData, aadharNo: text})}
                                    value={formData.aadharNo}
                                    errors={errors.aadharNo}
                                />
                                <TextFieldGroup 
                                    type="numeric"
                                    placeholder="Account Number"
                                    onChange={text => setFormData({...formData, accountNo: text})}
                                    value={formData.accountNo}
                                    errors={errors.accountNo}
                                />
                                <TextFieldGroup 
                                    placeholder="Service List"
                                    onChange={text => setFormData({...formData, serviceList: text})}
                                    value={formData.serviceList}
                                    errors={errors.serviceList}
                                />
                                <TextFieldGroup 
                                    placeholder="Types Of Service"
                                    onChange={text => setFormData({...formData, typeOfService: text})}
                                    value={formData.typeOfService}
                                    errors={errors.typeOfService}
                                />
                            </> : null}
                            <InputCheckbox 
                                checkText="I have read and agreed to the T&C"
                                checkValue={tc}
                                onchange={() => setTc(!tc)}
                                errors={errors.checked}
                            />
                            <FieldButton 
                                name="Register"
                                onPress={submit}
                            >
                                <TextLink 
                                    text="Already have an account?"
                                    linkText=" Log In"
                                    onPress={resetNav}
                                />
                            </FieldButton>
                        </ScrollView>
                    </View>
            }
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    regSelection: {
        fontSize: 22,
        color: '#444'
    }
})

Register.propTypes = {
    regCustomer: PropTypes.func.isRequired,
    regPurohit: PropTypes.func.isRequired,
    regCook: PropTypes.func.isRequired
}

const mapDispatchToProps = { regCustomer, regPurohit, regCook }

export default connect(null, mapDispatchToProps)(Register)

