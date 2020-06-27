import React, { useState } from 'react';
import { Picker, View, StyleSheet, Text} from 'react-native';

const SelectStateCity = ({ districtOrCity, selectState, selectCity, selectedState, selectedCity }) => {
  
  const handleChange = (value) => {
    if(value.state && value.state !== 0) {
      console.log(value.state)
      selectState(value.state)
    }

    if(value.city && value.city !== 0) {
      console.log(value.city)
      selectCity(value.city)
    }
  } 
  return (
    <>
    <Text style = {styles.texts}>State:</Text>
    <View style={styles.container}>
      <Picker 
        style={styles.text}
        selectedValue={selectedState === '' ? 1 : selectedState}
        onValueChange={(itemValue) => handleChange({state: itemValue})}
      > 
        <Picker.Item key={0} label="Select State" value={0} />
        <Picker.Item key={1} label="karnataka" value="karnataka" />
      </Picker>
    </View>
    <Text style = {styles.texts}>City:</Text>
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
    borderWidth:0.5,
    borderColor:'lightgrey'
  },
  text: {
    fontSize: 16,
    padding: 5,
    paddingLeft: 10,
   },
   texts: {
    fontSize: 13,
    //alignSelf: 'center'
    marginTop: 10,
    paddingLeft: 5,
    color: "#696969"
   }
});

export default SelectStateCity;