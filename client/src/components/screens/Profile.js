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

const Profile = ({
  auth, 
  services, 
  getDistrictOrCity, 
  getAreas, 
  getCastes, 
  cityAreaList, 
  casteList,
  updateCook, 
  updatePurohit, 
  updateCustomer
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
    <View style={styles.container}>
      <ScrollView>                                          
        <Accordian title="Self Details">                                                                            
          <View style={styles.bodyEdit}>
            <SelfDetails 
              formData={formData} 
              casteList={casteList && casteList.getCasteList}
              cityAreaList={cityAreaList && cityAreaList}
              getAreas={city => getAreas(city)}
              updatedForm={data => setFormData(data)}
              updateProfile={() => {
                if(auth.userType === 'cook') {
                  updateCook(formData)
                } else if(auth.userType === 'purohit') {
                  updatePurohit(formData)
                } else if(auth.userType === 'customer') {
                  updateCustomer(formData)
                }
              }}
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
              updateProfile={() => {
                if(auth.userType === 'cook') {
                  updateCook(formData)
                } else if(auth.userType === 'purohit') {
                  updatePurohit(formData)
                } else if(auth.userType === 'customer') {
                  updateCustomer(formData)
                }
              }}
            />
          </View>
        </Accordian>}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  
  bodyEdit:{
    marginTop:10,
    
  },
  bodyEditContent: {
    flex: 1,
    
   // padding:20,
  },
});

Profile.propTypes = {
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

 
export default connect(mapStateToProps, mapDispatchToProps)(Profile)