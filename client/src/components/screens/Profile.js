import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableHighlight,
  Dimensions 
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

//import DropdownPicker from './DropdownPicker';
import TypesOfService from './Profile_Related/TypesOfService';
//import SearchDropdown from './SearchDropdown';
import SelectServices from './Profile_Related/SelectServices';
//import SelectingServices from './Profile_Related/SelectingServices';
import ServiceSelect from './Profile_Related/ServiceSelect';
import SelectStateCity from './Profile_Related/SelectStateCity';
import PurohitCaste from './Profile_Related/PurohitCaste';
import ServiceCaste from './Profile_Related/ServiceCaste';
import SearchArea from './Profile_Related/SearchArea';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Feather';
import Iconlocation from 'react-native-vector-icons/SimpleLineIcons';
import Iconback from 'react-native-vector-icons/AntDesign';

//import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import ImagePicker from 'react-native-image-crop-picker'

import Accordian from '../Reusable_Component/Acoordian';
import TextFieldGroup from '../Reusable_Component/TextFieldGroup';
import FieldButton from '../Reusable_Component/FieldButton';

import { getDistrictOrCity, getAreas } from '../../redux/actions/cityAreaActions';
import { getCastes } from '../../redux/actions/casteActions';


const initialState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  alternateNumber: '',
  email: '',
  account: '',
  reconfirm: '',
  ifsc: '',
  aadhar: '',
  selectedServices: [],
  castes: '',
  serviceCastes: [],
  area: '',
  landmark: '',
  city: '',
  state: ''
}


const Profile = ({ auth, services, getDistrictOrCity, getAreas, getCastes, cityAreaList, casteList }) => {
    const [formData, setFormData] = useState({...initialState});
    const [avatarSrc, setAvatarSrc] = useState({});
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'Self Details' },
      { key: 'second', title: 'Service Details' },
    ]);

    const initialLayout = { width: Dimensions.get('window').width };

    useEffect(() => {
      getCastes();
      getDistrictOrCity();
      getAreas(formData.city)
    }, [])

    useEffect(()=> {
      const { user } = auth;
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        alternateNumber: user.alternateNumber,
        email: user.email,
        account: user.account,
        reconfirm: user.reconfirm,
        ifsc:user.ifsc,
        aadhar: user.aadhar,
        selectedServices: user.selectedServices,
        castes: user.castes,
        serviceCastes: user.serviceCastes,
        area: user.area,
        landmark: user.landmark,
        city: user.city,
        state: user.state
      })
    }, [auth])
    
    const submit = () => {
      //setService(true)
      //console.log(formData)
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
  
    const FirstRoute = () => (
      <View>
        <ScrollView>
          <View>
            {/* <Text style={{textAlign:"center",fontSize:15}}>Upload photo</Text> */}
            <TouchableHighlight onPress={openGallery}>
              <Image 
                source={ sourceUri } 
                indicator={ProgressBar} 
                style={styles.avatar}/>
            </TouchableHighlight>
          </View>
          <Text style = {styles.texts}>First Name:</Text>
          <TextFieldGroup 
              style={styles.inputBox}                    
              placeholder="First Name"
              onChange={text => setFormData({...formData, firstName: text})}
              value={formData.firstName}                    
          />
          <Text style = {styles.texts}>Last Name:</Text>
          <TextFieldGroup                     
              placeholder="Last Name"
              onChange={text => setFormData({...formData, lastName: text})}
              value={formData.lastName}                    
          />
          <Text style = {styles.texts}>Phone No:</Text>
          <TextFieldGroup
              type="numeric"                   
              placeholder="Phone Number"
              onChange={text => setFormData({...formData, phoneNumber: text})}
              value={formData.phoneNumber}                    
          />
          <Text style = {styles.texts}>Alternate Contact No:</Text>
          <TextFieldGroup
              type="numeric"                   
              placeholder="Alternate Number"
              onChange={text => setFormData({...formData, alternateNumber: text})}
              value={formData.alternateNumber}                    
          />
          <Text style = {styles.texts}>Email Id:</Text>
          <TextFieldGroup                     
              placeholder="Email Id"
              onChange={text => setFormData({...formData, email: text})}
              value={formData.email}                    
          />
          <Text style = {styles.texts}>Account No:</Text>
          <TextFieldGroup
              type="numeric"                     
              placeholder="Account Number"
              onChange={text => setFormData({...formData, account: text})}
              value={formData.account}                    
          />
          <Text style = {styles.texts}>Re-Enter Account No:</Text>
          <TextFieldGroup
              type="numeric"                     
              placeholder="Re-enter Number"
              onChange={text => setFormData({...formData, reconfirm: text})}
              value={formData.reconfirm}                    
          />
          <Text style = {styles.texts}>IFSC code:</Text>
          <TextFieldGroup                                                 
              placeholder="IFSC code"
              onChange={text => setFormData({...formData, ifsc: text})}
              value={formData.ifsc}                    
          />
          <Text style = {styles.texts}>Aadhar Number:</Text>
          <TextFieldGroup
              type="numeric"                     
              placeholder="Aadhar Number"
              onChange={text => setFormData({...formData, aadhar: text})}
              value={formData.aadhar}                    
          />
          <Text style = {styles.texts}>Caste:</Text>
          <PurohitCaste 
            caste={casteList && casteList.getCasteList}
            selectedCaste={formData.castes}
            selectCaste={castes => setFormData({... formData, castes})}
          /> 
          <SelectStateCity 
            districtOrCity={cityAreaList.getDistricrOrCity}
            selectedState={formData.state}
            selectedCity={formData.city}
            selectState={state => setFormData({...formData, state})}
            selectCity={city => {
              setFormData({...formData, city});
              getAreas(city);
            }}
          />
          <Text style = {styles.texts}>Area:</Text>
          <SearchArea 
            areas={cityAreaList && cityAreaList.getAreasList} 
          /> 
        </ScrollView>
      </View>
    );
     
    const SecondRoute = () => (
      <View>
        <Text style = {styles.texts}>Select Services:</Text>
          {/* <SelectServices 
            services={services && services.fullServiceList}
            selectedServices={selectedServices => setFormData({...formData, selectedServices})}
            selectedItems={formData.selectedServices}
          /> */}
          <ServiceSelect />
          <Text style = {styles.texts}>Service Type:</Text>                            
          <TypesOfService />
          <Text style = {styles.texts}>Preferred Caste:</Text>
          <ServiceCaste 
            caste={casteList && casteList.getCasteList}
            selectedCaste={serviceCastes => setFormData({... formData, serviceCastes})}
            selectedItems={formData.serviceCastes}
          />                                     
      </View>
    );

    const renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
    });

    const renderTabBar = props => (
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#fff' }}
        style={{ backgroundColor: '#D63031' }}
      />
    );

    return (
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#D63031",
    height:100,
  },
  selfnservice:{
    marginTop: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    //justifyContent: "space-between",
    justifyContent: "center",
    alignItems: "center"
  },
  inputBox:{
    borderStyle: 'dashed'
  },
  edit: {
      color: "red",
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
    //alignItems: 'center',
    padding:20,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:18,
    color: "#696969",
    marginTop:25,
    //textAlign: 'center'
  },
  infos:{
    fontSize:18,
    color: "#696969",
    //marginTop:25,
    //textAlign: 'center'
  },
  description:{
    fontSize:18,
    color: "#696969",
    marginTop:25,
    //textAlign: 'center'
  },
  descriptions:{
    fontSize:18,
    color: "#696969",
    //marginTop:25,
    //textAlign: 'center'
  },
  caste:{
    fontSize:18,
    color: "#696969",
    marginTop:25,
    //textAlign: 'center'
  },
  castes:{
    fontSize:18,
    color: "#696969",
    //marginTop:25,
    //textAlign: 'center'
  },
  mail: {
    fontSize: 26,
    color: "#696969"
  },
  location: {
    fontSize:18,
    color: "#696969",
    marginTop:  25,
    //textAlign: 'center'
  },
  locations: {
    fontSize:18,
    color: "#696969",
    //marginTop:  25,
    //textAlign: 'center'
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
  },
  texts: {
    fontSize: 13,
    //alignSelf: 'center'
    marginTop: 10,
    paddingLeft: 5,
    color: "#696969"
  }
});

Profile.propTypes = {
  getDistrictOrCity: PropTypes.func.isRequired,
  getAreas: PropTypes.func.isRequired,
  getCastes: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  services: PropTypes.object.isRequired,
  cityAreaList: PropTypes.object.isRequired,
  casteList: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  services: state.serviceList,
  cityAreaList: state.cityAreaList,
  casteList: state.casteList
})

const mapDispatchToProps = { getDistrictOrCity, getAreas, getCastes };
 
export default connect(mapStateToProps, mapDispatchToProps)(Profile);