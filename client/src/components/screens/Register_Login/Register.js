// import React, { useState } from 'react';
// import { StyleSheet, View, FlatList, ScrollView, Text, TouchableOpacity, Modal, Alert, TouchableHighlight} from 'react-native';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types'
// import Container from '../../Reusable_Component/Container';
// import RegisterGridTiles from '../../utils/RegisterGridTiles';
// import TextFieldGroup from '../../Reusable_Component/TextFieldGroup';
// import FieldButton from '../../Reusable_Component/FieldButton';
// import InputCheckbox from '../../Reusable_Component/InputCheckbox';
// import Heading from '../../Reusable_Component/Heading';
// import TextLink from '../../Reusable_Component/TextLink';
// //import ModalTncc from '../../Reusable_Component/ModalTncc';
// import { regCustomer, regPurohit, regCook } from '../../../redux/actions/authActions';
// import { validateRegisterInput } from '../../Reusable_Component/Validation/Register';

// import Icon from 'react-native-vector-icons/AntDesign';

// const registerType = [
//     { key: 1, name: 'Cook' },
//     { key: 2, name: 'Purohit' },
//     { key: 3, name: 'Customer' }
// ]

// const initialState = {
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     area: '',
//     landmark: '',
//     aadharNo: '',
//     accountNo: '',
//     serviceList: '',
//     typeOfService: ''
// };

// const Register = ({ navigation, regCustomer, regPurohit, regCook }) => {
//     const [formData, setFormData] = useState({...initialState});
//     const [regType, setRegType] = useState(false);
//     const [regData, setRegData] = useState('');
//     const [tc, setTc] = useState(false);
//     const [errors, setErrors] = useState({})

//     const onSelected = data => {
//         setRegType(true);
//         setRegData(data);
//     }

//     const renderRegisterType = type => {
//         return(
//             <RegisterGridTiles 
//                 data={type.item} 
//                 onSelect={onSelected}
//             />
//         )
//     }
    
//     const resetNav = () => {
//         setRegType(false)
//         setFormData(initialState)
//         setErrors({})
//         setTc(false)
//         navigation.navigate('Login')
//     }

//     const [modalVisible, setModalVisible] = useState(false);

//     const submit = () => {

//         const { errors, isValid } = validateRegisterInput(formData, regData, tc)
        
//         if(isValid) {
//             setErrors(errors)

//             const regCustomers = {
//                 FirstName: formData.firstName,
//                 LastName: formData.lastName,
//                 MobileNumber: parseInt(formData.phone),
//                 EmailId: formData.email,
//                 Password: formData.confirmPassword,
//                 Area: formData.area,
//                 Landmark: formData.landmark,
//             }

//             const regVendor = {
//                 FirstName: formData.firstName,
//                 LastName: formData.lastName,
//                 MobileNumber: parseInt(formData.phone),
//                 EmailId: formData.email,
//                 Password: formData.confirmPassword,
//                 Area: formData.area,
//                 AadharNumber: formData.aadharNo,
//                 AccountNumber: formData.accountNo,
//                 ServiceList: formData.serviceList,
//                 TypeOfService: formData.typeOfService
//             }

//             regData === 'Cook' ?
//                 regCook(regVendor)
//             : regData === 'Purohit' ?
//                 regPurohit(regVendor)
//             :  regData === 'Customer' ?
//                 regCustomer(regCustomers)
//             : null

//         } else {
//             setErrors(errors)
//         }
//     }

//     return (
//         <Container style={styles.container}>
//             {
//                 !regType ?
//                     <View>
//                         <Heading 
//                             name="What you want to register as ?" 
//                             style={styles.regSelection} 
//                         />
//                         {/* <Text style={styles.heading}>What you want to register as ?</Text> */}
//                         <FlatList 
//                             keyExtractor={(item) => item.key.toString()}
//                             data={registerType}
//                             renderItem={renderRegisterType}
//                         />
//                     </View>
//                 :
//                     <View>
//                         <ScrollView>
                        
//                         <>
//                             <Heading name="Register" />
//                             <TextFieldGroup 
//                                 placeholder="First Name"
//                                 onChange={text => setFormData({...formData, firstName: text})}
//                                 value={formData.firstName}
//                                 errors={errors.firstName}
//                             />
//                             <TextFieldGroup 
//                                 placeholder="Last Name"
//                                 onChange={text => setFormData({...formData, lastName: text})}
//                                 value={formData.lastName}
//                                 errors={errors.lastName}
//                             />
//                             <TextFieldGroup 
//                                 type="numeric"
//                                 placeholder="Mobile Number"
//                                 onChange={text => setFormData({...formData, phone: text})}
//                                 value={formData.phone}
//                                 errors={errors.phone}
//                             />
//                             <TextFieldGroup 
//                                 type="email-address"
//                                 placeholder="Email-Address"
//                                 onChange={text => setFormData({...formData, email: text})}
//                                 value={formData.email}
//                                 errors={errors.email}
//                             />
//                             <TextFieldGroup 
//                                 secureTextEntry={true}
//                                 placeholder="Password"
//                                 onChange={text => setFormData({...formData, password: text})}
//                                 value={formData.password}
//                                 errors={errors.password}
//                             />
//                             <TextFieldGroup 
//                                 secureTextEntry={true}
//                                 placeholder="Confirm Password"
//                                 onChange={text => setFormData({...formData, confirmPassword: text})}
//                                 value={formData.confirmPassword}
//                                 errors={errors.confirmPassword}
//                             />
//                             <TextFieldGroup 
//                                 placeholder="Area"
//                                 onChange={text => setFormData({...formData, area: text})}
//                                 value={formData.area}
//                                 errors={errors.area}
//                             />
//                             {regData === 'Customer' && 
//                             <TextFieldGroup 
//                                 placeholder="Landmark"
//                                 onChange={text => setFormData({...formData, landmark: text})}
//                                 value={formData.landmark}
//                                 errors={errors.landmark}
//                             />}
//                             {regData === 'Cook' ||  regData === 'Purohit' ?
//                             <>
//                                 <TextFieldGroup 
//                                     type="numeric"
//                                     placeholder="Aadhar Number"
//                                     onChange={text => setFormData({...formData, aadharNo: text})}
//                                     value={formData.aadharNo}
//                                     errors={errors.aadharNo}
//                                 />
//                                 <TextFieldGroup 
//                                     type="numeric"
//                                     placeholder="Account Number"
//                                     onChange={text => setFormData({...formData, accountNo: text})}
//                                     value={formData.accountNo}
//                                     errors={errors.accountNo}
//                                 />
//                                 <TextFieldGroup 
//                                     placeholder="Service List"
//                                     onChange={text => setFormData({...formData, serviceList: text})}
//                                     value={formData.serviceList}
//                                     errors={errors.serviceList}
//                                 />
//                                 <TextFieldGroup 
//                                     placeholder="Types Of Service"
//                                     onChange={text => setFormData({...formData, typeOfService: text})}
//                                     value={formData.typeOfService}
//                                     errors={errors.typeOfService}
//                                 />
//                             </> : null}
//                             <InputCheckbox 
//                                 checkValue={tc}
//                                 onchange={() => setTc(!tc)}
//                                 errors={errors.checked}
//                             >
//                                 <TouchableHighlight>
//                                 <TextLink 
//                                     styleLinkContainer={styles.styleLinkContainer}
//                                     link={styles.link}
//                                     text="I have read and agreed to the"
//                                     linkText=" T & C"
//                                     onPress={() => {
//                                         setModalVisible(true);
//                                     }}
//                                 />
//                                 </TouchableHighlight>
//                             </InputCheckbox>
//                             <FieldButton 
//                                 name="Register"
//                                 onPress={submit}
//                             >
//                                 <TextLink 
//                                     text="Already have an account?"
//                                     linkText=" Log In"
//                                     onPress={resetNav}
//                                 />
//                             </FieldButton>
//                         </>
                        
                        
//                         <>
//                     <View>
                        
//                         <Modal
//                         animationType="slide"
//                         transparent={true}
//                         visible={modalVisible}
//                         onRequestClose={() => {
//                             Alert.alert("Close the terms and conditions.");
//                         }}
//                         >
//                         <View style={styles.tnc}>
//                             <TouchableHighlight
//                                 style={{ ...styles.openButton, backgroundColor: "#FFF" }}
//                                 onPress={() => {
//                                 setModalVisible(!modalVisible);
//                                 }}
//                             >
//                                 <Text style={styles.textStyle}><Icon style={styles.close} name="closecircleo" color="#D63031" /></Text>
//                             </TouchableHighlight>
//                         <ScrollView>
                            
//                             <Text style={styles.header}>Terms and Conditions for Cook / Caterers</Text>
//                             <Text style={styles.conditions}>Hello all fellow gentlemen, greetings from our end
//                             We cordially welcome you to Our <Text style={styles.dark}>SUKALPA SEVA</Text> Mobile App We would need you co-operation at most to achive our goal.</Text>
//                             <Text style={styles.head}>
//                             How does Sukalpa Seva Works ???
//                             </Text>
//                             <Text style={styles.conditions}>
//                             1. Basically our app is a one stop solution to book purohits and
//                             cook/catering service online flawlessly.
//                             </Text>
//                             <Text style={styles.conditions}>
//                             2.	Cooks / Caterers are expected to get registered in our App with all the necessary details.
//                             </Text>
//                             <Text style={styles.conditions}>
//                             3.	Customers will book either cook / opt for catering service based on the event , along with number of members.
//                             </Text>
//                             <Text style={styles.conditions}>
//                             4.	Based on the location and time slot , a message/app notification will be triggered on your mobile and you can accept the same if you are available for the given date and time. Then the booking will get confirmed.
//                             </Text>
//                             <Text style={styles.conditions}>
//                             5.	Once booking is confirmed, you will be receiving a message as well as app notification about all details of customer.
//                             </Text>
//                             <Text style={styles.head}>
//                             T & C
//                             </Text>
//                             <Text style={styles.conditions}>
//                             1.	By taking everyone in to consideration, we have prepared a standard menu nand rate list by making survey of multiple occasions.
//                             </Text>
//                             <Text style={styles.conditions}>
//                             2.	Customers can opt for extra sweets/ extra dishes at extra cost.
//                             </Text>
//                             <Text style={styles.conditions}>
//                             3.	Once booking is confirmed by Cook, there will be no option to cancel it (Unless it’s a inevitable situation).
//                             </Text>
//                             <Text style={styles.conditions}>
//                             4.	Bookings cannot be transferred from one person to other.
//                             </Text>
//                             <Text style={styles.conditions}>
//                             5.	Customers can pay all the fare during booking or they can do part payment. It’s totally their choice.
//                             </Text>
//                             <Text style={styles.conditions}>
//                             6.	If the part payment is done, remaining amount will be given at the venue by customer either by cash or online transaction.
//                             </Text>
//                             <Text style={styles.conditions}>
//                             7.	We have promised customer that we will be delivering service very promptly  and with hygiene being very important.
//                             </Text>
//                             <Text style={styles.conditions}>
//                             8.	We expect you not to compromise in quality and quantity of the food.
//                             </Text>
//                             <Text style={styles.conditions}>
//                             9.	For cooks, based on the event and for the number of  people food need to be prepared and served. We have only considered standard number of  assistants required and their fare also been added to the rate list.
//                             </Text>
//                             <Text style={styles.conditions}>
//                             10.	TA/DA has already been considered during the time of fixation of rate list . No extra amount will be provided for this.
//                             </Text>
//                             <Text style={styles.conditions}>
//                             11.	After end of every service, customer can write review and give rating for cook/caterer . Those who gets more number of positive comments and good rating, they will be offered with more number of bookings.
//                             </Text>
//                             <Text style={styles.conditions}>
//                             12.	For any clarification, you can reach out to our Customer Help line number.
//                             </Text>

//                         </ScrollView>
//                         </View>
//                         </Modal>
//                     </View>
//                         </>
                        
//                         </ScrollView>
//                     </View>
//             }
//         </Container>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         justifyContent: 'center',
//         backgroundColor: '#FFF'
//     },
//     regSelection: {
//         fontSize: 22,
//         color: '#444'
//     },
//     styleLinkContainer: {
//         justifyContent: 'flex-start'
//     },
//     link: {
//         color: '#74B9FF'
//     },
//     tnc: {
//         margin: 15,
//         backgroundColor: '#FFF',
//         borderRadius: 20,
//         padding: 35,
//         paddingTop: 5,
//         alignItems: "center",
//         shadowColor: "#000",
//         shadowOffset: {
//           width: 0,
//           height: 2
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5
//     },
//     header: {
//         textAlign: 'center',
//         fontSize: 15,
//         fontWeight: 'bold',
//         marginTop: 10,
//         marginBottom: 8
//     },
//     conditions: {
//         fontSize:13,
//         marginBottom: 10
//     },
//     dark: {
//         color: 'blue'
//     },
//     head: {
//         fontSize: 13,
//         fontWeight: 'bold',
//         marginTop: 12
//     },
//     centeredView: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: 22
//       },
//       modalView: {
//         margin: 20,
//         backgroundColor: "white",
//         borderRadius: 20,
//         padding: 30,
//         alignItems: "center",
//         shadowColor: "#000",
//         shadowOffset: {
//           width: 0,
//           height: 2
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5
//       },
//       openButton: {
//         backgroundColor: "#F194FF",
//         borderRadius: 20,
        
//         marginLeft: 230,
//         // elevation: 2
//       },
//       textStyle: {
//         color: "#000",
//         fontWeight: "bold",
//         textAlign: "center",
//         fontSize: 15
//       },
//       close: {
//           fontSize: 23
//       },
//       modalText: {
//         marginBottom: 15,
//         textAlign: "center"
//       }
// })

// Register.propTypes = {
//     regCustomer: PropTypes.func.isRequired,
//     regPurohit: PropTypes.func.isRequired,
//     regCook: PropTypes.func.isRequired
// }

// const mapDispatchToProps = { regCustomer, regPurohit, regCook }

// export default connect(null, mapDispatchToProps)(Register)

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
    const [selectRegData, setSelectRegData] = useState(false)

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
                        onChange={args => args[0].nativeEvent.text}
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
                        secureTextEntry={true}
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
        marginVertical: 15
    },
    regTypeText: {
        textAlign: 'center',
        padding: 5,
        marginBottom: 10,
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
        borderColor: '#D63031'
    },
    blogText: {
        color: '#3c3b37',
        width: 100,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 15
    },
    selectedIcon: {
        position: 'absolute',
        top: -6,
        right: -6,
        color: '#D63031',
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
