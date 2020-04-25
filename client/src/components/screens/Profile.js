import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//import DropdownPicker from './DropdownPicker';
import TypesOfService from './TypesOfService';
//import SearchDropdown from './SearchDropdown';
import SelectServices from './SelectServices';
//import SelectingServices from './SelectingServices';
import SelectStateCity from './SelectStateCity';
import PurohitCaste from './PurohitCaste';
import ServiceCaste from './ServiceCaste';
import SearchArea from './SearchArea';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Feather';
import Iconlocation from 'react-native-vector-icons/SimpleLineIcons';
import Iconback from 'react-native-vector-icons/AntDesign';

//import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import ImagePicker from 'react-native-image-crop-picker'

import TextFieldGroup from '../Reusable_Component/TextFieldGroup';
import FieldButton from '../Reusable_Component/FieldButton';

import { getDistrictOrCity, getAreas } from '../../redux/actions/cityAreaActions';

const initialState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  area: '',
  landmark: '',
  city: '',
  state: ''
}

const Profile = ({ auth, services, getDistrictOrCity, getAreas, cityAreaList }) => {
    const [formData, setFormData] = useState({...initialState});
    const [editView, setEditView] = useState(false);
    const [avatarSrc, setAvatarSrc] = useState({});

    useEffect(() => {
      getDistrictOrCity();
    }, [])

    useEffect(()=> {
      const { user } = auth;
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        email: user.email,
        area: user.area,
        landmark: user.landmark,
        city: user.city
      })
    }, auth)

    const showEdit = () => {
        setEditView(true)
    }

    const goBack = () => {
        setEditView(false)
    }

    const submit = () => {
      setEditView(false)
      console.log(formData)
    }

    const openGallery = () => {
      ImagePicker.openPicker({
        width: 100,
        height: 100,
        cropping: true
      }).then(image => {
        console.log(image);
        /* this.setState({
          avatarSrc: image
        }) */
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
        : {uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'};

    const { fullServiceList } = services;

    const category = fullServiceList.filter(list => list.serviceCategory === 'purohit');

    const subCatList = category.map(list => list.serviceSubCategory).filter((value, index, self) => self.indexOf(value) === index)
    
    return (
      <View style={styles.container}>
        <ScrollView>
            {editView ? (
                <>
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.edit} onPress={goBack} > <Iconback style={styles.edit} name="back" color="#000" /> Back</Text>
                        </TouchableOpacity>
                    </View>
                    
                      <TouchableHighlight onPress={openGallery}>
                        <Image 
                          source={ sourceUri } 
                          indicator={ProgressBar} 
                          style={styles.avatar}/>
                      </TouchableHighlight>
                    
                    {/* <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/> */}
                    <View style={styles.bodyEdit}>
                        <View style={styles.bodyEditContent}>
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
                                placeholder="Phone Number"
                                onChange={text => setFormData({...formData, phoneNumber: text})}
                                value={formData.phoneNumber}                    
                            />
                            <TextFieldGroup                     
                                placeholder="Email Id"
                                onChange={text => setFormData({...formData, email: text})}
                                value={formData.email}                    
                            />
                            {/* <DropdownPicker /> */}
                            {/* <SelectingServices /> */}
                            <SelectServices />
                            
                            <PurohitCaste />                            
                            <TypesOfService />
                            <ServiceCaste />
                            <SelectStateCity 
                              districtOrCity={cityAreaList.getDistricrOrCity} 
                              selectedState={state => setFormData({...formData, state})}
                              selectedCity={city => {
                                setFormData({...formData, city});
                                getAreas(city);
                              }}
                            />
                            <SearchArea 
                              areas={cityAreaList.getAreasList} 
                            />
                            {/* <SearchDropdown />                             */}
                            <TextFieldGroup                     
                                placeholder="Area"
                                onChange={text => setFormData({...formData, area: text})}
                                value={formData.area}                    
                            />
                            <TextFieldGroup                     
                                placeholder="Landmark"
                                onChange={text => setFormData({...formData, landmark: text})}
                                value={formData.landmark}                    
                            />
                            <TextFieldGroup                     
                                placeholder="City"
                                onChange={text => setFormData({...formData, city: text})}
                                value={formData.city}                    
                            />
                            <FieldButton 
                                name='Update Profile'
                                onPress={submit}
                            ></FieldButton>
                            
                        </View>
                    </View>
                </>
            ) : (
                <>
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.edit} onPress={showEdit} > <Icon style={styles.edit} name="edit" color="#000" /> Edit</Text>
                        </TouchableOpacity>
                    </View>
                      <TouchableHighlight onPress={openGallery}>
                        <Image 
                          source={ sourceUri } 
                          indicator={ProgressBar} 
                          style={styles.avatar}/>
                      </TouchableHighlight>
                      
                    {/* <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/> */}
                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                          <Text style={styles.name}>{formData.firstName} {formData.lastName} </Text>
                          <Text style={styles.info}><Icon style={styles.info} name="phone" color="#000" />{` ${formData.phoneNumber}`}</Text>
                          <Text style={styles.description}><Icons style={styles.mail} name="mail" color="#000" />{` ${formData.email}`}</Text>
                          <Text style={styles.location}><Iconlocation style={styles.address} name="location-pin" color="#000" />{` ${formData.area}, ${formData.landmark}, ${formData.city}`}</Text>
                        </View>
                    </View>
                </>
            )}          
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#D63031",
    height:100,
  },
  edit: {
      color: "#000",
      marginLeft: 10,
      marginTop: 10,
      fontSize: 20
  },
  avatar: {
    width: 160,
    height: 150,
    borderRadius: 103,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    //position: 'absolute',
    //marginTop:30
  },
  bodyEdit:{
    marginTop:10,
  },
  bodyEditContent: {
    flex: 1,
   // padding:20,
  },
  body:{
    marginTop:10,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:25,
    color: "#696969",
    marginTop:25,
    textAlign: 'center'
  },
  description:{
    fontSize:20,
    color: "#696969",
    marginTop:25,
    textAlign: 'center'
  },
  mail: {
    fontSize: 26,
    color: "#696969"
  },
  location: {
    fontSize:23,
    color: "#696969",
    marginTop:  25,
    textAlign: 'center'
  },
  address:{
    fontSize:25,
    color: "#696969"
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#232f3e",
    color: "#FFF",
  },
  textContainer : {
      color: "#FFF"
  }
});

Profile.propTypes = {
  getDistrictOrCity: PropTypes.func.isRequired,
  getAreas: PropTypes.func.isRequired,
  services: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  services: state.serviceList,
  cityAreaList: state.cityAreaList
})

const mapDispatchToProps = { getDistrictOrCity, getAreas };
 
export default connect(mapStateToProps, mapDispatchToProps)(Profile);