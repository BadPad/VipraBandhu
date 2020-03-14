import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Heading from '../../Reusable_Component/Heading';
import TextFieldGroup from '../../Reusable_Component/TextFieldGroup';
import FieldButton from '../../Reusable_Component/FieldButton';
import TextLink from '../../Reusable_Component/TextLink';

const Login = ({ navigation }) => {
    const [formData, setFormData] = useState({
        emailOrPhone: '',
        password: ''
    })

    const submit = () => {
        console.log(formData)
    }

    return (
        <View style={styles.container}>
            <Heading name="Login" />
            <TextFieldGroup 
                type="email-address"
                placeholder="Email-Address / Phone"
                onChange={text => setFormData({emailOrPhone: text})}
                value={formData.emailOrPhone}
            />
            <TextFieldGroup 
                secureTextEntry={true}
                placeholder="Password"
                onChange={text => setFormData({password: text})}
                value={formData.password}
            />
            <FieldButton 
                name='Login'
                onPress={submit}
            >
                <TextLink 
                    text="Don't have an account yet?"
                    linkText=" Sign Up"
                    onPress={() => navigation.navigate('Register')}
                />
            </FieldButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f0e3ff'
    }
})

export default Login

