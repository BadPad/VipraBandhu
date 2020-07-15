import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { getDistrictOrCity, getAreas } from '../../redux/actions/cityAreaActions';
import { getCastes } from '../../redux/actions/casteActions';
import { updateCook, updatePurohit, updateCustomer } from '../../redux/actions/profileActions';
import FieldButton from '../Reusable_Component/FieldButton';
import PurohitCaste from './Profile_Related/PurohitCaste';
import SelectStateCity from './Profile_Related/SelectStateCity';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SearchArea from './Profile_Related/SearchArea';
import isEmpty from '../Reusable_Component/is-empty';
import ServiceSelect from './Profile_Related/ServiceSelect';
import TypesOfService from './Profile_Related/TypesOfService';
import ServiceCaste from './Profile_Related/ServiceCaste';
import MultipleFieldButton from '../Reusable_Component/MultipleFieldButton';
import TextFieldGroup from '../Reusable_Component/TextFieldGroup';

const { width } = Dimensions.get('screen');

const ProfileEdit = ({
  auth, 
  services, 
  getDistrictOrCity, 
  getAreas, 
  getCastes, 
  cityAreaList, 
  casteList,
  ListView_Ref,
  updateCook, 
  updatePurohit, 
  updateCustomer,  
  navigation
}) => {

  const { control, errors, formState, handleSubmit } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    validateCriteriaMode: 'all',
    submitFocusError: true,
    nativeValidation: true,
  });
  const [formData, setFormData] = useState({...auth.user});
  const [formUpdated, setFormUpdated] = useState(false)
  const [validError, setValidError] = useState({})
  const [selectedTab, setSelectedTab] = useState(0);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Self Details' },
    { key: 'second', title: 'Service Details' },
  ]);

  useEffect(() => {
    if(isEmpty(formData.state)) {
      setFormData({...formData, state: "Karnataka" })
    }
    getCastes();
    getDistrictOrCity();
    getAreas(formData.city)
  }, [])

  const profileEditView = [
    { id: 0, name: 'Self Details' },
    { id: 1, name: 'Service Details' }
  ]

  const validate = () => {
    let isError = false;

    const validError = {
      validError: {}
    }

    if(!isEmpty(formData.FirstName) && formData.FirstName.length < 4) {
      isError = true;
      validError.validError.firstName = 'First Name minimum Length should be 4';
    }

    if(isEmpty(formData.FirstName)) {
      isError = true;
      validError.validError.firstName = 'First Name is required!';
    }

    if(!isEmpty(formData.alternateNumber) && formData.alternateNumber.length !== 10) {
      isError = true;
      validError.validError.alternateNumber = 'Mobile number Should be 10 digit';
    }
    
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
    if(!isEmpty(formData.EmailId) && !regex.test(formData.EmailId)) {
      isError = true;
      validError.validError.email = 'Email is invalid!';
    }

    if(isEmpty(formData.caste)) {
      isError = true;
      validError.validError.caste = `${auth.userType} caste is required!`;
    }

    if(!isEmpty(formData.address) && formData.address.length > 250) {
      isError = true;
      validError.validError.address = 'Address should be maximum 250 Characters';
    }

    if(isEmpty(formData.add)) {
      isError = true;
      validError.validError.address = 'Address is required!';
    }

    if(isEmpty(formData.state)) {
      isError = true;
      validError.validError.state = 'Select your State';
    }

    if(isEmpty(formData.city)) {
      isError = true;
      validError.validError.city = 'Select your City';
    }

    if(isEmpty(formData.area)) {
      isError = true;
      validError.validError.area = 'Select you address area';
    }

    if(isEmpty(formData.selectedServices) && auth.userType === 'purohit' && auth.userType !== 'customer') {
      isError = true;
      validError.validError.selectedServices = 'Select Your Offering Services'
    }

    if(isEmpty(formData.typeOfService) && auth.userType !== 'customer') {
      isError = true;
      validError.validError.typeOfService = 'Select Your Offering Service Type'
    }

    if(isEmpty(formData.serviceCastes) && auth.userType !== 'customer') {
      isError = true;
      validError.validError.serviceCastes = 'Select Your Offering Service Castes'
    }
    
    setValidError({...validError.validError})

    return isError;
  }

  const onSubmit = data => {

    const err = validate();

    if(!err) {
      const { user } = auth;
      // console.log(user)
      // console.log(formData)
      const newFormData = formData;
      if(isEmpty(user.address)) {
        newFormData.address = [{
          nickname: 'home',
          address: newFormData.add
        }];
      } else {
        newFormData.address[0] = {
          nickname: 'home',
          address: newFormData.add
        }
      }
      delete newFormData.add;
      // console.log(newFormData)
      if(auth.userType === 'cook') {
        updateCook(newFormData, navigation)
      } else if(auth.userType === 'purohit') {
        updatePurohit(newFormData, navigation)
      } else if(auth.userType === 'customer') {
        updateCustomer(newFormData, navigation)
      }
    }
  }

  const { userType } = auth;

  return (
    <View style={styles.fullContainer}>
      <ScrollView
        ref={ref => ListView_Ref = ref}
      > 
        <View style={styles.header}>      
          <View style={styles.headerContent}>
              <Image style={styles.avatar}
                source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}
              />
              <Text style={styles.name}>
                {auth.user['phone number']}
              </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.container}>
            {userType === 'purohit' || userType === 'cook' ?
            <View style={styles.tabs} >
              <FlatList 
                key={tabs => tabs.id.toString()}
                data={profileEditView}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                  <TouchableOpacity key={item.id} style={selectedTab === item.id ? [styles.tabContent, styles.tabContentSelected] :styles.tabContent} onPress={() => setSelectedTab(item.id)}>
                    <Text style={selectedTab === item.id ? [styles.tabText, styles.tabTextSelected] : styles.tabText}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
            :null}
            <View style={styles.detailsContainer}>
                {selectedTab === 0 ?
                  <View style={styles.selfDetailsView}>
                    {/* <TextFieldHookGroup 
                      title="First Name"
                      name="FirstName"
                      required
                      control={control}
                      onChange={args => {
                        args[0].nativeEvent.text.replace(/[^A-Za-z]/ig, '');
                        setFormData({...formData, FirstName: args[0].nativeEvent.text.replace(/[^A-Za-z]/ig, '')});
                        setFormUpdated(true)
                      }}
                      defaultValue={formData.FirstName}
                      errors={validError.firstName ? validError.firstName : null}
                    /> */}
                    <TextFieldGroup 
                      title="First Name"
                      required
                      onChange={text => {
                        setFormData({...formData, FirstName: text.replace(/[^A-Za-z]/ig, '')})
                        setFormUpdated(true)
                      }}
                      value={formData.FirstName}
                      errors={validError.firstName ? validError.firstName : null}
                    />
                    <TextFieldGroup 
                      title="Last Name"
                      onChange={text => {
                        setFormData({...formData, LastName: text.replace(/[^A-Za-z]/ig, '')})
                        setFormUpdated(true)
                      }}
                      value={formData.LastName}
                    />
                    <TextFieldGroup 
                      type="numeric"
                      title="Alternate Number"
                      onChange={text => {
                        setFormData({...formData, alternateNumber: text})
                        setFormUpdated(true)
                      }}
                      value={formData.alternateNumber && formData.alternateNumber.replace("+91", "")}
                      errors={validError.alternateNumber ? validError.alternateNumber : null}
                    />
                    <TextFieldGroup 
                      type="email-address"
                      title="Email Address"
                      onChange={text => {
                        setFormData({...formData, EmailId: text})
                        setFormUpdated(true)
                      }}
                      value={formData.EmailId}
                      errors={validError.email ? validError.email : null}
                    />
                    <View style={styles.contentBlock}>
                      <View style={styles.blockContent}>
                        <Text style={styles.title}>Caste:  <FontAwesome5 name="star-of-life" color="rgba(214, 48, 49, 1)" size={8} /></Text>
                        <PurohitCaste 
                          caste={casteList && casteList.getCasteList}
                          selectedCaste={casteList && casteList.getCasteList && casteList.getCasteList[formData.caste]}
                          selectCaste={caste => {
                            setFormData({... formData, caste: casteList.getCasteList.indexOf(caste)})
                            setFormUpdated(true)
                          }}
                        />
                        {validError.caste && <Text style={styles.error}><FontAwesome5 name="exclamation" />  {validError.caste}</Text>}
                      </View>
                    </View>
                    <View style={styles.blockContent}>
                      <TextFieldGroup 
                        title="Address"
                        required
                        placeholder="#Home No, Home Name, Nearest Land Mark"
                        multiline
                        onChange={text => {
                          setFormData({...formData, add: text})
                          setFormUpdated(true)
                        }}
                        value={formData.add ||(formData.address && formData.address[0].address)}
                        errors={validError.address ? validError.address : null}
                      />
                    </View>
                    <View style={styles.contentBlock}>
                      <SelectStateCity 
                        districtOrCity={cityAreaList && cityAreaList.getDistricrOrCity}
                        selectedState={formData.state}
                        selectedCity={cityAreaList && cityAreaList.getDistricrOrCity && cityAreaList.getDistricrOrCity[formData.city]}
                        stateError={validError.state}
                        cityError={validError.city}
                        selectState={state => {
                          setFormData({...formData, state})
                          setFormUpdated(true)
                        }}
                        selectCity={city => {
                          setFormData({... formData, city: cityAreaList.getDistricrOrCity.indexOf(city)});
                          getAreas(city);
                          ListView_Ref.scrollToEnd({ animated: true });
                          setFormUpdated(true)
                        }}
                      />
                      {cityAreaList && cityAreaList.getDistricrOrCity && cityAreaList.getDistricrOrCity[formData.city] === 'Bengaluru' &&
                      <View style={styles.blockContentArea}>
                        <Text style={styles.title}>Area:  <FontAwesome5 name="star-of-life" color="rgba(214, 48, 49, 1)" size={8} /></Text>
                        <SearchArea 
                          area={cityAreaList && cityAreaList.getAreasList}
                          selectedArea={[formData.area]}
                          selectArea={area => {
                            setFormData({...formData, area: area[0]});
                            setFormUpdated(true)
                          }}
                        />
                        {validError.area && <Text style={styles.error}><FontAwesome5 name="exclamation" />  {validError.area}</Text>}
                      </View>}
                    </View>
                  </View>
                :
                  <View style={styles.serviceDetailsView}>
                    {userType === 'purohit' &&
                    <View style={styles.blockContent}>
                      <Text style={styles.title}>Select Services:  <FontAwesome5 name="star-of-life" color="rgba(214, 48, 49, 1)" size={8} /></Text>
                      <ServiceSelect 
                        services={services && services.fullServiceList}
                        selectedServices={selectedServices => {
                          setFormData({...formData, selectedServices: selectedServices.map(list => list.value)})
                          setFormUpdated(true)
                        }}
                        selectedItems={formData.selectedServices}
                      />
                      {validError.selectedServices && <Text style={styles.error}><FontAwesome5 name="exclamation" />  {validError.selectedServices}</Text>}
                      {isEmpty(formData.selectedServices) === false && (
                        <View style={styles.selectedItems}>
                        {formData.selectedServices.map(list => {
                          const getSelectedList = services && services.fullServiceList.find(item => item.serviceId === list && item.serviceCategory === 'purohit');
                          return (
                            <Text  style={styles.selectedText} key={getSelectedList.serviceId}>{getSelectedList.serviceName}</Text>
                          )
                        })}
                        </View>
                      )}
                    </View>}
                    {userType === 'cook' || userType === 'purohit' ?
                      <>
                        <View style={styles.blockContent}>
                          <Text style={styles.title}>Service Type:  <FontAwesome5 name="star-of-life" color="rgba(214, 48, 49, 1)" size={8} /></Text>
                          <TypesOfService 
                            selectedTypeOfService={typeOfService => {
                              setFormData({...formData, typeOfService})
                              setFormUpdated(true)
                            }}
                            selectedItem={formData.typeOfService}
                          />
                          {validError.typeOfService && <Text style={styles.error}><FontAwesome5 name="exclamation" />  {validError.typeOfService}</Text>}
                        </View>
                        <View style={styles.blockContentArea}>
                          <Text style={styles.title}>Preferred Caste:  <FontAwesome5 name="star-of-life" color="rgba(214, 48, 49, 1)" size={8} /></Text>
                          <ServiceCaste 
                            caste={casteList && casteList.getCasteList}
                            selectedCaste={serviceCastes => {
                              setFormData({... formData, serviceCastes: serviceCastes.map(list => list.value)})
                              setFormUpdated(true)
                            }}
                            selectedItems={formData.serviceCastes}
                          />
                          {validError.serviceCastes && <Text style={styles.error}><FontAwesome5 name="exclamation" />  {validError.serviceCastes}</Text>}
                          {!isEmpty(formData.serviceCastes) &&
                          <View style={styles.selectedItems}>
                            {formData.serviceCastes.map(list => {
                              const getSelectesCastes = casteList && casteList.getCasteList[list];
                              return (
                                <Text  style={styles.selectedText} key={list}>{getSelectesCastes}</Text>
                              )
                            })}
                          </View>}
                        </View>
                      </>
                    :null}
                  </View>
              }
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{ marginTop: 20 }}>
          {formState.dirty || formUpdated ?
            selectedTab === 0 ?
              userType === 'customer' ?
                <FieldButton 
                  name="Update Profile"
                  onPress={handleSubmit(onSubmit)}
                />
              : 
                <FieldButton 
                  name="Next"
                  onPress={() => setSelectedTab(1)}
                />
            :
              <MultipleFieldButton 
                name="Update Profile"
                onPressBck={() => setSelectedTab(0)}
                onPressCheck={handleSubmit(onSubmit)}
              />
          :null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullContainer: {
    flex:1,
    backgroundColor: '#f9f9f9'
  },
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
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tabContent: {
    width: width / 2,
    padding: 10,
    borderWidth: 0.7,
    borderColor: '#ddd'
  },
  tabText: {
    textAlign: 'center'
  },
  tabContentSelected: {
    // borderColor: '#D63031',
  },
  tabTextSelected: {
    fontWeight: 'bold',
    color: '#D63031'
  },
  detailsContainer: {
    paddingHorizontal: 10
  },
  serviceDetailsView: {
    paddingHorizontal: 10
  },
  contentBlock: {
    marginHorizontal: 10
  },
  blockContent: {
    marginTop: 7
  },
  blockContentArea: {
    marginTop: 12
  },
  title: {
    color: '#008b8b'
  },
  error: {
    color: '#c81912'
  },
  selectedItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch'
  },
  selectedText: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    margin: 2
  }
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