import React, { useState } from 'react';
import { Picker, View, StyleSheet, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SelectStateCity = ({ 
  districtOrCity, 
  selectState, 
  selectCity, 
  selectedState, 
  selectedCity,
  stateError,
  cityError
}) => {
  const handleChange = (value) => {
    if(value.state && value.state !== 0) {
      // console.log(value.state)
      selectState(value.state)
    }

    if(value.city && value.city !== 0) {
      // console.log(value.city)
      selectCity(value.city)
    }
  } 
  return (
    <>
    <Text style = {styles.texts}>State:  <FontAwesome5 name="star-of-life" color="rgba(214, 48, 49, 1)" size={8} /></Text>
    <View style={styles.container}>
      <Picker 
        style={styles.text}
        selectedValue={selectedState === '' ? 1 : selectedState}
        onValueChange={(itemValue) => handleChange({state: itemValue})}
      > 
        <Picker.Item key={0} label="Select State" value={0} />
        <Picker.Item key={1} label="Karnataka" value="Karnataka" />
      </Picker>
    </View>
    {stateError && <Text style={styles.error}><FontAwesome5 name="exclamation" />  {stateError}</Text>}
    <Text style = {[styles.texts, styles.cityTexts]}>City:  <FontAwesome5 name="star-of-life" color="rgba(214, 48, 49, 1)" size={8} /></Text>
    <View style={styles.container}>
      <Picker
        style={styles.text}
        selectedValue={selectedCity === '' ? 0 : selectedCity}
        onValueChange={(itemValue) => handleChange({city: itemValue})}
      >
        <Picker.Item key={0} label="Select City" value={0} />
        {districtOrCity && districtOrCity.map((list, i) => (
          <Picker.Item key={i + 1} label={list} value={list} />
        ))}
      </Picker> 
    </View>
    {cityError && <Text style={styles.error}><FontAwesome5 name="exclamation" />  {cityError}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 2,
    borderWidth:0.5,
    borderColor:'rgba(68,68,68,1)',
    height: 40
  },
  text: {
    fontSize: 16,
    padding: 5,
    paddingLeft: 10,
  },
  texts: {
    fontSize: 13,
  marginTop: 7,
    color: '#008b8b'
  },
  cityTexts: {
    marginTop: 17
  },
  error: {
    color: '#c81912'
  }
});

export default SelectStateCity;