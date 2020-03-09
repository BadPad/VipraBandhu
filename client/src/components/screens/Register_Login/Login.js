import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

const Login = ({ navigation }) => {
    const [formData, setFormData] = useState({
        emailOrPhone: '',
        password: ''
    })
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <TextInput 
                style={styles.inputBox}
                keyboardType="email-address"
                placeholder="Email-Address / Phone"
                onChangeText={text => setFormData({email: text})}
                value={formData.emailOrPhone}
            />
            <TextInput 
                style={styles.inputBox}
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={text => setFormData({password: text})}
                value={formData.password}
            />
            <View style={styles.submit}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <View style={styles.signUpTextCont}>
                    <Text style={styles.signUpText}>Don't have an account yet?</Text>
                    <Text style={styles.signUpButton} onPress={() => navigation.navigate('Register')} > Sign Up</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f0e3ff'
    },
    heading: {
        alignSelf:'center',
        paddingBottom: 10,
        fontSize: 30,
        color: '#3e206d'
    },
    inputBox: {
        width: "100%",
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        marginVertical: 3
    },
    submit: {
        paddingBottom: 20
    },
    button: {
        width: "100%",
        backgroundColor: '#3e206d',
        borderRadius: 25,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#f0e3ff',
        textAlign: 'center'
    },
    signUpTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 5,
        flexDirection: 'row',
    },
    signUpText: {
        fontSize: 16
    },
    signUpButton: {
        color: '#d89cf6',
        fontSize: 16,
        fontWeight: '500'
    }
})

export default Login

