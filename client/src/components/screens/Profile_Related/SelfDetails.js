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

    const openGallery = () => {
        ImagePicker.openPicker({
          width: 100,
          height: 100,
          cropping: true
        }).then(image => {
          console.log(image);
          setAvatarSrc({...image})
        });
        /* ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        }).then(image => {
          console.log(image);
          setAvatarSrc({...image})
        }); */
    }

    const sourceUri = avatarSrc.path ? { uri: avatarSrc.path }
    : {uri: 'http://www.sumadhwaseva.com/wp-content/uploads/2020/06/diwalii.png'};

    return (
        <View style={styles.container}>
            <ScrollView>
                <View  style={styles.avatarContainer}>
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
                </View>
                <TextFieldGroup 
                    name="First Name"
                    value={formData.FirstName}
                    onChange={text => updatedForm({...formData, FirstName: text})}
                />
                <TextFieldGroup 
                    name="Last Name"
                    value={formData.LastName}
                    onChange={text => updatedForm({...formData, LastName: text})}
                />
                <TextFieldGroup 
                    type="numeric"
                    name="Phone Number"
                    value={formData["phone number"]}
                    onChange={text => updatedForm({...formData, "phone number": text})}
                />
                <TextFieldGroup 
                    type="numeric"
                    name="Alternate Number"
                    value={formData.alternateNumber}
                    onChange={text => updatedForm({...formData, alternateNumber: text})}
                />
                <TextFieldGroup 
                    type="email-address"
                    name="Email Address"
                    value={formData.EmailId}
                    onChange={text => updatedForm({...formData, EmailId: text})}
                />
                <TextFieldGroup 
                    type="numeric"
                    name="Account Numbe"
                    value={formData.account}
                    onChange={text => updatedForm({...formData, account: text})}
                />
                <TextFieldGroup 
                    type="numeric"
                    name="Re-enter Number"
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
                />
                <View style={styles.contentBlock}>
                    <Text style = {styles.texts}>Caste:</Text>
                    <PurohitCaste 
                        caste={casteList && casteList}
                        selectedCaste={formData.purohitCaste}
                        selectCaste={purohitCaste => updatedForm({... formData, purohitCaste})}
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
                    <Text style = {styles.texts}>Area:</Text>
                    <SearchArea 
                        area={cityAreaList && cityAreaList.getAreasList}
                        selectedArea={formData.area}
                        selectArea={area => updatedForm({...formData, area})}
                    />
                </View>
                <FieldButton 
                    name="Update Profile"
                    onPress={updateProfile}
                />
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
