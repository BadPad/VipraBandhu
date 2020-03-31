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
import { registeruser } from '../../../redux/actions/authActions';
import { validateRegisterInput } from '../../Reusable_Component/Validation/Register';

const registerType = [
    { key:1,  name: 'Cook/Catering Service' },
    { key: 2, name: 'Customer' }
]

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    aadharNo: '',
    accountNo: '',
    location: '',
    password: '',
    confirmPassword: ''
};

const Register = ({ navigation, registeruser }) => {
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
        setTc(false)
        navigation.navigate('Login')
    }

    const submit = () => {

        const { errors, isValid } = validateRegisterInput(formData, regData, tc)
        
        if(isValid) {
            setErrors(errors)

            const regCustomer = {
                FirstName: formData.firstName,
                LastName: formData.lastName,
                EmailId: formData.email,
                MobileNumber: parseInt(formData.phone),
                Password: formData.confirmPassword
            }

            registeruser(regCustomer)
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
                            keyExtractor={(item, index) => item.key.toString()}
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
                            {regData === 'Customer' &&
                            <TextFieldGroup 
                                type="email-address"
                                placeholder="Email-Address"
                                onChange={text => setFormData({...formData, email: text})}
                                value={formData.email}
                                errors={errors.email}
                            />}
                            {regData === 'Cook/Catering Service' &&
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
                                    placeholder="Location"
                                    onChange={text => setFormData({...formData, location: text})}
                                    value={formData.location}
                                    errors={errors.location}
                                />
                            </>}
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
    registeruser: PropTypes.func.isRequired
}

const mapDispatchToProps = { registeruser }

export default connect(null, mapDispatchToProps)(Register)

