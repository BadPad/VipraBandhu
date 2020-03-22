import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { connect } from 'react-redux';
import Heading from '../../Reusable_Component/Heading';
import TextFieldGroup from '../../Reusable_Component/TextFieldGroup';
import FieldButton from '../../Reusable_Component/FieldButton';
import TextLink from '../../Reusable_Component/TextLink';
import { validateLoginInput } from '../../Reusable_Component/Validation/Login';
import { loginUser } from '../../../redux/actions/authActions';

const initialState = {
    emailOrPhone: '',
    password: ''
}

const Login = ({ navigation, loginUser }) => {
    const [formData, setFormData] = useState({...initialState});
    const [errors, setErrors] = useState({});

    const resetNav = () => {
        setFormData(initialState)
        navigation.navigate('Register')
    }

    const submit = () => {
        const { errors, isValid } = validateLoginInput(formData)
        
        if(isValid) {
            setErrors(errors)
            loginUser(formData)
        } else {
            setErrors(errors)
        }
    }

    return (
        <View style={styles.container}>
              <Image resizeMode='contain'
                    style={styles.images}
                    source={require('client/src/components/images/Logo.png')}
                />
            <Heading name="Login" />
            <TextFieldGroup 
                type="email-address"
                placeholder="Email-Address / Phone"
                onChange={text => setFormData({...formData, emailOrPhone: text})}
                value={formData.emailOrPhone}
                errors={errors.emailOrPhone}
            />
            <TextFieldGroup 
                secureTextEntry={true}
                placeholder="Password"
                onChange={text => setFormData({...formData, password: text})}
                value={formData.password}
                errors={errors.password}
            />
            <FieldButton 
                name='Login'
                onPress={submit}
            >
                <TextLink 
                    text="Don't have an account yet?"
                    linkText=" Sign Up"
                    onPress={resetNav}
                />
            </FieldButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#C8C8C8'
    },
    images: {
        width: '40%',
        height:120,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
        shadowRadius:10,
        shadowColor:'blue',
        marginTop:10,
        
    },
})

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = { loginUser }

export default connect(mapStateToProps, mapDispatchToProps)(Login)

