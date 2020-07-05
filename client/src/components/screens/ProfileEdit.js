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
import SelfDetails from './Profile_Related/SelfDetails';
import ServiceDetails from './Profile_Related/ServiceDetails';
import { getDistrictOrCity, getAreas } from '../../redux/actions/cityAreaActions';
import { getCastes } from '../../redux/actions/casteActions';
import { updateCook, updatePurohit, updateCustomer } from '../../redux/actions/profileActions';
import Accordian from '../Reusable_Component/Acoordian';
import Iconback from 'react-native-vector-icons/AntDesign';
import FieldButton from '../Reusable_Component/FieldButton';
import Profile from './Profile';

const ProfileEdit = ({
  auth, 
  services, 
  getDistrictOrCity, 
  getAreas, 
  getCastes, 
  cityAreaList, 
  casteList,
  updateCook, 
  updatePurohit, 
  updateCustomer,  
  navigation
}) => {

  const [formData, setFormData] = useState({...auth.user});
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Self Details' },
    { key: 'second', title: 'Service Details' },
  ]);


  useEffect(() => {
    getCastes();
    getDistrictOrCity();
    getAreas(formData.city)
  }, [])

  return (
    <>
    <ScrollView> 
    <View style={styles.header}>      
      <View style={styles.headerContent}>
          <Image style={styles.avatar}
            source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>

          <Text style={styles.name}>
            {auth.user.FirstName} {auth.user.LastName}
          </Text>
          <Text style={styles.name}>
            {auth.user['phone number']}
          </Text>
      </View>
    </View>
    <View style={styles.container}>
                                               
        <Accordian title="Self Details">                                                                            
          <View style={styles.bodyEdit}>
            <SelfDetails 
              formData={formData} 
              casteList={casteList && casteList.getCasteList}
              cityAreaList={cityAreaList && cityAreaList}
              getAreas={city => getAreas(city)}
              updatedForm={data => setFormData(data)}              
            />
          </View>
        </Accordian>                    

        {auth.userType !== 'customer'&& 
        <Accordian title="Service Details">                                                                                                       
          <View style={styles.bodyEdit}>
            <ServiceDetails 
              formData={formData} 
              auth={auth}
              casteList={casteList && casteList.getCasteList}
              services={services && services}
              updatedForm={data => setFormData(data)}
              /* updateProfile={() => {
                if(auth.userType === 'cook') {
                  updateCook(formData)
                } else if(auth.userType === 'purohit') {
                  updatePurohit(formData)
                } else if(auth.userType === 'customer') {
                  updateCustomer(formData)
                }
              }} */
            />
          </View>
        </Accordian>}
        
    </View>
    </ScrollView>
    <View style={{ marginTop: 20 }}>
        {
        formData.FirstName === '' || formData['phone number'] === '' || formData.AddressOne === '' ?
            null
        :
            <FieldButton 
                name="Update Profile"
                onPress={() => {                      
                  if(auth.userType === 'cook') {
                    updateCook(formData, navigation)
                  } else if(auth.userType === 'purohit') {
                    updatePurohit(formData, navigation)
                  } else if(auth.userType === 'customer') {
                    updateCustomer(formData, navigation)
                  }
                }}
            />
        }
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#D63031",
  },
  headerContent:{
    padding:10,
    alignItems: 'center',
  },
  avatar: {
    width: 115,
    height: 115,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:18,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  bodyEdit:{
    marginTop:10,
    
  },
  bodyEditContent: {
    flex: 1,
    
   // padding:20,
  },
});

ProfileEdit.propTypes = {
  getDistricrOrCity: PropTypes.func.isRequired,
  getAreas: PropTypes.func.isRequired,
  getCastes: PropTypes.func.isRequired,
  updateCook: PropTypes.func.isRequired, 
  updatePurohit: PropTypes.func.isRequired, 
  updateCustomer: PropTypes.func.isRequired,
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

const mapDispatchToProps = { 
  getDistrictOrCity, 
  getAreas, 
  getCastes, 
  updateCook, 
  updatePurohit, 
  updateCustomer 
}

 
export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit)