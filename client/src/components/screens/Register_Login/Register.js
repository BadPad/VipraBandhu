import React, { useState } from 'react';
import { StyleSheet, View, FlatList, ScrollView} from 'react-native';
import RegisterGridTiles from '../../utils/RegisterGridTiles';
import TextFieldGroup from '../../Reusable_Component/TextFieldGroup';
import FieldButton from '../../Reusable_Component/FieldButton';
import InputCheckbox from '../../Reusable_Component/InputCheckbox';
import Heading from '../../Reusable_Component/Heading';
import TextLink from '../../Reusable_Component/TextLink';
import validateRegisterInput from '../../Reusable_Component/Validation/Register';

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

const Register = ({ navigation }) => {
    const [regType, setRegType] = useState(false);
    const [regData, setRegData] = useState('');
    const [formData, setFormData] = useState({...initialState})
    const [tc, setTc] = useState(false)

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
        console.log(formData)
    }

    return (
        <View style={styles.container}>
            {
                !regType ?
                    <View>
                        <Heading 
                            name="What you want to register as ?" 
                            style={styles.regSelection} 
                        />
                        {/* <Text style={styles.heading}>What you want to register as ?</Text> */}
                        <FlatList 
                            keyExtractor={(item, index) => item.key}
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
                            />
                            <TextFieldGroup 
                                placeholder="Last Name"
                                onChange={text => setFormData({...formData, lastName: text})}
                                value={formData.lastName}
                            />
                            <TextFieldGroup 
                                type="numeric"
                                placeholder="Mobile Number"
                                onChange={text => setFormData({...formData, phone: text})}
                                value={formData.phone}
                            />
                            {regData === 'Customer' &&
                            <TextFieldGroup 
                                type="email-address"
                                placeholder="Email-Address"
                                onChange={text => setFormData({...formData, email: text})}
                                value={formData.email}
                            />}
                            {regData === 'Cook/Catering Service' &&
                            <>
                                <TextFieldGroup 
                                    type="numeric"
                                    placeholder="Aadhar Number"
                                    onChange={text => setFormData({...formData, aadharNo: text})}
                                    value={formData.aadharNo}
                                />
                                <TextFieldGroup 
                                    type="numeric"
                                    placeholder="Account Number"
                                    onChange={text => setFormData({...formData, accountNo: text})}
                                    value={formData.accountNo}
                                />
                                <TextFieldGroup 
                                    placeholder="Location"
                                    onChange={text => setFormData({...formData, location: text})}
                                    value={formData.location}
                                />
                            </>}
                            <TextFieldGroup 
                                secureTextEntry={true}
                                placeholder="Password"
                                onChange={text => setFormData({...formData, password: text})}
                                value={formData.password}
                            />
                            <TextFieldGroup 
                                secureTextEntry={true}
                                placeholder="Confirm Password"
                                onChange={text => setFormData({...formData, confirmPassword: text})}
                                value={formData.confirmPassword}
                            />
                            <InputCheckbox 
                                checkText="I have read and agreed to the T&c"
                                checkValue={tc}
                                onchange={() => setTc(!tc)}
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#C8C8C8'
    },
    regSelection: {
        fontSize: 22,
        color: '#444'
    }
})

export default Register

