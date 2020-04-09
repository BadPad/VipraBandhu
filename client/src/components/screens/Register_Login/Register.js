import React, { useState } from 'react';
import { StyleSheet, View, FlatList, ScrollView, Text, TouchableOpacity, Modal, Alert, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Container from '../../Reusable_Component/Container';
import RegisterGridTiles from '../../utils/RegisterGridTiles';
import TextFieldGroup from '../../Reusable_Component/TextFieldGroup';
import FieldButton from '../../Reusable_Component/FieldButton';
import InputCheckbox from '../../Reusable_Component/InputCheckbox';
import Heading from '../../Reusable_Component/Heading';
import TextLink from '../../Reusable_Component/TextLink';
//import ModalTncc from '../../Reusable_Component/ModalTncc';
import { regCustomer, regPurohit, regCook } from '../../../redux/actions/authActions';
import { validateRegisterInput } from '../../Reusable_Component/Validation/Register';

import Icon from 'react-native-vector-icons/AntDesign';

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

    const [modalVisible, setModalVisible] = useState(false);

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
                        
                        <>
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
                                checkValue={tc}
                                onchange={() => setTc(!tc)}
                                errors={errors.checked}
                            >
                                <TouchableHighlight>
                                <TextLink 
                                    styleLinkContainer={styles.styleLinkContainer}
                                    link={styles.link}
                                    text="I have read and agreed to the"
                                    linkText=" T & C"
                                    onPress={() => {
                                        setModalVisible(true);
                                    }}
                                />
                                </TouchableHighlight>
                            </InputCheckbox>
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
                        </>
                        
                        
                        <>
                    <View>
                        
                        <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Close the terms and conditions.");
                        }}
                        >
                        <View style={styles.tnc}>
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </TouchableHighlight>
                        <ScrollView>
                            
                            <Text style={styles.header}>Terms and Conditions for Cook / Caterers</Text>
                            <Text style={styles.conditions}>Hello all fellow gentlemen, greetings from our end
                            We cordially welcome you to Our <Text style={styles.dark}>SUKALPA SEVA</Text> Mobile App We would need you co-operation at most to achive our goal.</Text>
                            <Text style={styles.head}>
                            How does Sukalpa Seva Works ???
                            </Text>
                            <Text style={styles.conditions}>
                            1. Basically our app is a one stop solution to book purohits and
                            cook/catering service online flawlessly.
                            </Text>
                            <Text style={styles.conditions}>
                            2.	Cooks / Caterers are expected to get registered in our App with all the necessary details.
                            </Text>
                            <Text style={styles.conditions}>
                            3.	Customers will book either cook / opt for catering service based on the event , along with number of members.
                            </Text>
                            <Text style={styles.conditions}>
                            4.	Based on the location and time slot , a message/app notification will be triggered on your mobile and you can accept the same if you are available for the given date and time. Then the booking will get confirmed.
                            </Text>
                            <Text style={styles.conditions}>
                            5.	Once booking is confirmed, you will be receiving a message as well as app notification about all details of customer.
                            </Text>
                            <Text style={styles.head}>
                            T & C
                            </Text>
                            <Text style={styles.conditions}>
                            1.	By taking everyone in to consideration, we have prepared a standard menu nand rate list by making survey of multiple occasions.
                            </Text>
                            <Text style={styles.conditions}>
                            2.	Customers can opt for extra sweets/ extra dishes at extra cost.
                            </Text>
                            <Text style={styles.conditions}>
                            3.	Once booking is confirmed by Cook, there will be no option to cancel it (Unless it’s a inevitable situation).
                            </Text>
                            <Text style={styles.conditions}>
                            4.	Bookings cannot be transferred from one person to other.
                            </Text>
                            <Text style={styles.conditions}>
                            5.	Customers can pay all the fare during booking or they can do part payment. It’s totally their choice.
                            </Text>
                            <Text style={styles.conditions}>
                            6.	If the part payment is done, remaining amount will be given at the venue by customer either by cash or online transaction.
                            </Text>
                            <Text style={styles.conditions}>
                            7.	We have promised customer that we will be delivering service very promptly  and with hygiene being very important.
                            </Text>
                            <Text style={styles.conditions}>
                            8.	We expect you not to compromise in quality and quantity of the food.
                            </Text>
                            <Text style={styles.conditions}>
                            9.	For cooks, based on the event and for the number of  people food need to be prepared and served. We have only considered standard number of  assistants required and their fare also been added to the rate list.
                            </Text>
                            <Text style={styles.conditions}>
                            10.	TA/DA has already been considered during the time of fixation of rate list . No extra amount will be provided for this.
                            </Text>
                            <Text style={styles.conditions}>
                            11.	After end of every service, customer can write review and give rating for cook/caterer . Those who gets more number of positive comments and good rating, they will be offered with more number of bookings.
                            </Text>
                            <Text style={styles.conditions}>
                            12.	For any clarification, you can reach out to our Customer Help line number.
                            </Text>

                        </ScrollView>
                        </View>
                        </Modal>
                    </View>
                        </>
                        
                        </ScrollView>
                    </View>
            }
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    regSelection: {
        fontSize: 22,
        color: '#444'
    },
    styleLinkContainer: {
        justifyContent: 'flex-start'
    },
    link: {
        color: '#74B9FF'
    },
    tnc: {
        margin: 15,
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    header: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 8
    },
    conditions: {
        fontSize:13,
        marginBottom: 10
    },
    dark: {
        color: 'blue'
    },
    head: {
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 12
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        marginLeft: 190,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})

Register.propTypes = {
    regCustomer: PropTypes.func.isRequired,
    regPurohit: PropTypes.func.isRequired,
    regCook: PropTypes.func.isRequired
}

const mapDispatchToProps = { regCustomer, regPurohit, regCook }

export default connect(null, mapDispatchToProps)(Register)

