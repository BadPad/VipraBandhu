import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Feather';
import Iconlocation from 'react-native-vector-icons/SimpleLineIcons';
import Iconback from 'react-native-vector-icons/AntDesign';

import TextFieldGroup from '../Reusable_Component/TextFieldGroup';
import FieldButton from '../Reusable_Component/FieldButton';

const initialState = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    area: '',
    landmark: '',
    city: ''
}

const Profile = () => {
    const [formData, setFormData] = useState({...initialState});
    const [editView, setEditView] = useState(false)

    const showEdit = () => {
        setEditView(true)
    }

    const goBack = () => {
        setEditView(false)
    }

    const submit = () => {
        setEditView(false)
    }

    return (
      <View style={styles.container}>
        <ScrollView>
            {editView ? (
                <>
                    <View style={styles.header}>
                        <TouchableOpacity>
                            <Text style={styles.edit} onPress={goBack} > <Iconback style={styles.edit} name="back" color="#000" /> Back</Text>
                        </TouchableOpacity>
                    </View>
                    <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
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
                    <View style={styles.header}>
                        <TouchableOpacity>
                            <Text style={styles.edit} onPress={showEdit} > <Icon style={styles.edit} name="edit" color="#000" /> Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                            <Text style={styles.name}>Pavan Gautham</Text>
                            <Text style={styles.info}><Icon style={styles.info} name="phone" color="#000" />  7259691900</Text>
                            <Text style={styles.description}><Icons style={styles.mail} name="mail" color="#000" /> pavan.gautham17@gmail.com</Text>
                            <Text style={styles.location}><Iconlocation style={styles.address} name="location-pin" color="#000" />  Shakambari nagar,opp Banashankari Temple, Bangalore-70</Text>
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
    backgroundColor: "#232f3e",
    height:100,
  },
  edit: {
      color: "#FFF",
      marginLeft: 10,
      marginTop: 10,
      fontSize: 20
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:30
  },
  bodyEdit:{
    marginTop:30,
  },
  bodyEditContent: {
    flex: 1,
    padding:20,
  },
  body:{
    marginTop:40,
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
 
export default Profile;