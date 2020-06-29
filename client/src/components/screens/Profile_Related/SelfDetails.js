import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import ImagePicker from 'react-native-image-crop-picker';
import TextFieldGroup from '../../Reusable_Component/TextFieldGroup';
import PurohitCaste from './PurohitCaste';
import SelectStateCity from './SelectStateCity';
import SearchArea from './SearchArea';

import Foundation from 'react-native-vector-icons/Foundation'
import FieldButton from '../../Reusable_Component/FieldButton';

const SelfDetails = ({ 
    formData, 
    updatedForm, 
    casteList ,
    cityAreaList,
    getAreas,
    updateProfile
}) => {
    const [avatarSrc, setAvatarSrc] = useState({});

    /* const openGallery = () => {
        ImagePicker.openPicker({
          width: 100,
          height: 100,
          cropping: true
        }).then(image => {
          console.log(image);
          setAvatarSrc({...image})
        });
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        }).then(image => {
          console.log(image);
          setAvatarSrc({...image})
        }); 
    } */

    const sourceUri = avatarSrc.path ? { uri: avatarSrc.path }
    : {uri: 'http://www.sumadhwaseva.com/wp-content/uploads/2020/06/diwalii.png'};

    return (
        <View style={styles.container}>
            <ScrollView>
               {/*  <View  style={styles.avatarContainer}>
                    <TouchableOpacity onPress={openGallery}>
                        <Image 
                            source={sourceUri}
                            indicator={ProgressBar}
                            style={styles.avatar}
                            imageStyle={styles.avatarImage}
                        />
                        <View style={styles.imageEdit}>
                            <Foundation name="camera" size={20} />
                        </View>
                    </TouchableOpacity>
                </View> */}
                
                <TextFieldGroup 
                    name="First Name"
                    star="*"
                    value={formData.FirstName}
                    onChange={text => updatedForm({...formData, FirstName: text.replace(/[^A-Za-z]/ig, '')})}
                />
                <TextFieldGroup 
                    name="Last Name"
                    value={formData.LastName}
                    onChange={text => updatedForm({...formData, LastName: text.replace(/[^A-Za-z]/ig, '')})}
                />
                <TextFieldGroup 
                    type="numeric"
                    name="Phone Number"
                    star="*"
                    maxLength={13}
                    value={formData["phone number"]}
                    onChange={text => updatedForm({...formData, "phone number": text.replace(/[^0-9]/g, '')})}
                />
                <TextFieldGroup 
                    type="numeric"
                    name="Alternate Number"
                    maxLength={10}                    
                    value={formData.alternateNumber}
                    //onChange={text => onTextChanged(text)}
                    //onChange={text => updatedForm({...formData, alternateNumber: text})}
                    onChange={text => updatedForm({...formData, alternateNumber: text.replace(/[^0-9]/g, '')})}
                />
                <TextFieldGroup 
                    type="email-address"
                    name="Email Address"
                    value={formData.EmailId}
                    onChange={text => updatedForm({...formData, EmailId: text})}
                />
                {/* <TextFieldGroup 
                    type="numeric"
                    name="Account Number"
                    value={formData.account}
                    onChange={text => updatedForm({...formData, account: text})}
                />
                <TextFieldGroup 
                    type="numeric"
                    name="Re-Confirm Account Number"
                    value={formData.reConfirm}
                    onChange={text => updatedForm({...formData, reConfirm: text})}
                />
                <TextFieldGroup 
                    name="IFSC code"
                    value={formData.ifsc}
                    onChange={text => updatedForm({...formData, ifsc: text})}
                /> 
                <TextFieldGroup 
                    name="Aadhar Number"
                    value={formData.aadharNo}
                    onChange={text => updatedForm({...formData, aadharNo: text})}
                />*/}
                <View style={styles.contentBlock}>
                    <Text style = {styles.texts}>Caste: <Text style={{ color: 'red', fontSize: 15, paddingLeft: 10 }}>*</Text></Text>
                    <PurohitCaste 
                        caste={casteList && casteList}
                        selectedCaste={formData.purohitCaste}
                        selectCaste={purohitCaste => updatedForm({... formData, purohitCaste})}
                    />
                    <Text style={{ fontSize: 20, marginTop: 10, marginBottom: 10 }}>Address</Text>
                    <TextFieldGroup 
                        name="Address 1"
                        star="*"
                        multiline={true}
                        value={formData.AddressOne}
                        onChange={text => updatedForm({...formData, AddressOne: text})}
                    />
                    <TextFieldGroup 
                        name="Address 2"
                        star="*"
                        multiline={true}
                        value={formData.AddressTwo}
                        onChange={text => updatedForm({...formData, AddressTwo: text})}
                    />
                    <TextFieldGroup 
                        name="Address 3"
                        star="*"
                        multiline={true}
                        value={formData.AddressThree}
                        onChange={text => updatedForm({...formData, AddressThree: text})}
                    />
                    <SelectStateCity 
                        districtOrCity={cityAreaList && cityAreaList.getDistricrOrCity}
                        selectedState={formData.state}
                        selectedCity={formData.city}
                        selectState={state => updatedForm({...formData, state})}
                        selectCity={city => {
                        updatedForm({...formData, city});
                        getAreas(city);
                        }}
                    />
                    <Text style = {styles.texts}>Area: <Text style={{ color: 'red', fontSize: 15, paddingLeft: 10 }}>*</Text></Text>
                    <SearchArea 
                        area={cityAreaList && cityAreaList.getAreasList}
                        selectedArea={formData.area}
                        selectArea={area => updatedForm({...formData, area})}
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    {
                    formData.FirstName === '' || formData['phone number'] === '' ?
                        null
                    :
                        <FieldButton 
                            name="Update Profile"
                            onPress={updateProfile}
                        />
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    },
    avatarContainer: {
        alignItems: 'center',
        margin: 10,
    },
    avatarImage: {
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 3
    },
    avatar: {
        width: 160,
        height: 160
    },
    imageEdit: {
        position: 'absolute',
        right: 25,
        bottom: -5,
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 20,
        borderColor: '#fff',
        borderWidth: 2
    },
    contentBlock: {
        marginHorizontal: 10
    },
    texts: {
        fontSize: 13,
        marginTop: 10,
        paddingLeft: 5,
        color: "#696969"
    }
})

export default SelfDetails
