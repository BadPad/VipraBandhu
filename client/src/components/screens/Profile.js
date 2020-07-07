import React from 'react';
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
import { getDistrictOrCity, getAreas } from '../../redux/actions/cityAreaActions';
import { getCastes } from '../../redux/actions/casteActions';
import { updateCook, updatePurohit, updateCustomer } from '../../redux/actions/profileActions';
import Accordian from '../Reusable_Component/Acoordian';
import Iconback from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconlocation from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import FieldButton from '../Reusable_Component/FieldButton';



const Profile = ({ auth, navigation }) => {

  const currentUserType = auth.userType;

  // console.log(user);
  const services = auth.user.selectedServices;
  let selectedServices = '';

  if (services != null) {

    for (var i = 0; i < services.length; i++) {
      var obj = services[i];
      selectedServices = selectedServices + obj.label + ', '
    }

    selectedServices = selectedServices.replace(/,\s*$/, "");
  }

  //console.log(auth.user.serviceCastes)

  const selectedCaste = auth.user.serviceCastes;
  let sc;
  if (selectedCaste != null) {
    const scs = selectedCaste.filter(list => list.value)
    sc = [scs.map(list => list.value)]
    sc = sc.join(', ')
  }
  return (
    <>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileEdit')}>
            <Text style={{ color: '#fff', fontSize: 20, paddingTop: 15, paddingRight: 10, alignSelf: "flex-end" }}><Iconback name="form" style={{ color: '#fff', fontSize: 20 }} />Edit</Text>
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Image style={styles.avatar}
              source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar1.png' }} />

            <Text style={styles.name}>
              {/* {user.FirstName} {user.LastName} */}
              {auth.user.FirstName} {auth.user.LastName}
            </Text>
            <Text style={styles.name}>
              {/* {user['phone number']} */}
              {auth.user['phone number']}
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <Icon name="mail" style={{ fontSize: 20 }} />
          <View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>Email</Text>
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt} numberOfLines={2} ellipsizeMode="tail">{auth.user.EmailId} </Text>
              {/* <Text style={styles.mblTxt}>Mobile</Text> */}
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <Icon name="phone" style={{ fontSize: 20 }} />
          <View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>Alternate Mobile No</Text>
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt} numberOfLines={2} ellipsizeMode="tail">{auth.user.alternateNumber} </Text>
              {/* <Text style={styles.mblTxt}>Mobile</Text> */}
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <Icon name="user" style={{ fontSize: 20 }} />
          <View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>Caste</Text>
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt} numberOfLines={2} ellipsizeMode="tail">{auth.user.purohitCaste} </Text>
              {/* <Text style={styles.mblTxt}>Mobile</Text> */}
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <Iconlocation name="location" style={{ fontSize: 20 }} />
          <View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>Address</Text>
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt} numberOfLines={4} ellipsizeMode="tail">{auth.user.AddressOne},{auth.user.city},{auth.user.state} </Text>
              {/* <Text style={styles.mblTxt}>Mobile</Text> */}
            </View>
          </View>
        </View>
        {
          (currentUserType != "customer") ?

            <View>
              <Text style={{ textAlign: 'center', color: 'green', fontSize: 20 }}>Offered Services</Text>
              {
                (currentUserType != "cook") ?
                  <View style={styles.row}>
                    <Icons name="room-service-outline" style={{ fontSize: 20 }} />

                    <View>
                      <View style={styles.msgContainer}>
                        <Text style={styles.msgTxt}>Services</Text>
                      </View>
                      <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt} numberOfLines={10} ellipsizeMode="tail">{selectedServices} </Text>
                        {/* <Text style={styles.mblTxt}>Mobile</Text> */}
                      </View>
                    </View>



                  </View>
                  : null
              }
              <View style={styles.row}>
                <Icons name="room-service-outline" style={{ fontSize: 20 }} />
                <View>
                  <View style={styles.msgContainer}>
                    <Text style={styles.msgTxt}>Service Type</Text>
                  </View>
                  <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt} numberOfLines={4} ellipsizeMode="tail">{auth.user.typeOfService} </Text>
                    {/* <Text style={styles.mblTxt}>Mobile</Text> */}
                  </View>
                </View>
              </View>
              <View style={styles.row}>
                <Icon name="user" style={{ fontSize: 20 }} />
                <View>
                  <View style={styles.msgContainer}>
                    <Text style={styles.msgTxt}>Preferred Caste</Text>
                  </View>
                  <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt} numberOfLines={4} ellipsizeMode="tail">{sc} </Text>
                    {/* <Text style={styles.mblTxt}>Mobile</Text> */}
                  </View>
                </View>
              </View>
            </View>
            : null
        }
      </ScrollView>

    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#D63031",
  },
  headerContent: {
    padding: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 115,
    height: 115,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 16,
    width: 260,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
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