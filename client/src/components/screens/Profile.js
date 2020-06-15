import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelfDetails from './Profile_Related/SelfDetails';
import ServiceDetails from './Profile_Related/ServiceDetails';
import { getDistrictOrCity, getAreas } from '../../redux/actions/cityAreaActions';
import { getCastes } from '../../redux/actions/casteActions';
import { updateCook, updatePurohit, updateCustomer } from '../../redux/actions/profileActions';

const initialLayout = { width: Dimensions.get('window').width };

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

  const renderScene = SceneMap({
    first: () => (
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
    ),
    second: () => (
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
    ),
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
