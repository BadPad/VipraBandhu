import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, ScrollView, CheckBox, TouchableOpacity } from 'react-native';
import RegisterGridTiles from '../../utils/RegisterGridTiles';

const registerType = [
    { key:1,  name: 'Cook/Catering Service' },
    { key: 2, name: 'Customer' }
]

const Register = ({ navigation }) => {
    const [regType, setRegType] = useState(false);
    const [regData, setRegData] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        aadharNo: '',
        accountNo: '',
        location: '',
        password: '',
        confirmPassword: ''
    })
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
        navigation.navigate('Login')
    }
    return (
        <View style={styles.container}>
            {
                !regType ?
                    <View>
                        <Text style={styles.heading}>What you want to register as ?</Text>
                        <FlatList 
                            keyExtractor={(item, index) => item.key}
                            data={registerType}
                            renderItem={renderRegisterType}
                        />
                    </View>
                :
                    <View>
                        <ScrollView>
                            <Text style={{...styles.heading, ...styles.regHeading}}>Register</Text>
                            <TextInput
                                style={styles.inputBox}
                                placeholder="First Name"
                                onChangeText={text => setFormData({firstName: text})}
                                value={formData.firstName}
                            />
                            <TextInput 
                                style={styles.inputBox}
                                placeholder="Last Name"
                                onChangeText={text => setFormData({lastName: text})}
                                value={formData.lastName}
                            />
                            <TextInput 
                                style={styles.inputBox}
                                keyboardType="numeric"
                                placeholder="Mobile Number"
                                onChangeText={text => setFormData({phone: text})}
                                value={formData.phone}
                            />
                            {regData === 'Customer' &&<TextInput 
                                style={styles.inputBox}
                                keyboardType="email-address"
                                placeholder="Email"
                                onChangeText={text => setFormData({email: text})}
                                value={formData.email}
                            />}
                            {regData === 'Cook/Catering Service' &&
                            <>
                                <TextInput 
                                    style={styles.inputBox}
                                    keyboardType="numeric"
                                    placeholder="Aadhar Number"
                                    onChangeText={text => setFormData({aadharNo: text})}
                                    value={formData.aadharNo}
                                />
                                <TextInput 
                                    style={styles.inputBox}
                                    keyboardType="numeric"
                                    placeholder="Account Number"
                                    onChangeText={text => setFormData({accountNo: text})}
                                    value={formData.accountNo}
                                />
                                <TextInput 
                                    style={styles.inputBox}
                                    placeholder="Location"
                                    onChangeText={text => setFormData({location: text})}
                                    value={formData.location}
                                />
                            </>}
                            <TextInput 
                                style={styles.inputBox}
                                secureTextEntry={true}
                                placeholder="Password"
                                onChangeText={text => setFormData({password: text})}
                                value={formData.password}
                            />
                            <TextInput 
                                style={styles.inputBox}
                                secureTextEntry={true}
                                placeholder="Confirm Password"
                                onChangeText={text => setFormData({confirmPassword: text})}
                                value={formData.confirmPassword}
                            />
                            <View style={styles.inputCheck}>
                                <CheckBox 
                                    onValueChange={() => setTc(!tc)}
                                    value={tc}
                                />
                                <Text style={styles.checkText}>I have read and agreed to the T&c</Text>
                            </View>
                            <View style={styles.submit}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>Register</Text>
                                </TouchableOpacity>
                                <View style={styles.logInTextCont}>
                                    <Text style={styles.logInText}>Already have an account?</Text>
                                    <Text style={styles.LogInButton} onPress={resetNav} > Log In</Text>
                                </View>
                            </View>
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
        backgroundColor: '#f0e3ff'
    },
    heading: {
        fontSize: 20,
        alignSelf: 'center',
        paddingBottom: 30
    },
    regHeading: {
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
    inputCheck: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    checkText: {
        marginTop: 5
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
    logInTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 5,
        flexDirection: 'row',
    },
    logInText: {
        fontSize: 16
    },
    LogInButton: {
        color: '#d89cf6',
        fontSize: 16,
        fontWeight: '500'
    }
})

export default Register

