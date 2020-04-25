import React, { useState } from 'react';
import { Picker, View, StyleSheet, Text} from 'react-native';

const SelectStateCity = ({ districtOrCity, selectedState, selectedCity }) => {
  const [state, setState] = useState('0');
  const [city, setCity] = useState('0');
  const handleChange = (value) => {
    if(value.state && value.state !== 0) {
      console.log(value.state)
      setState(value.state);
      selectedState(value.state)
    }

    if(value.city && value.city !== 0) {
      console.log(value.city)
      setCity(value.city)
      selectedCity(value.city)
    }
  } 
  return (
    <View style={styles.container}>
      <Picker 
        style={styles.text}
        selectedValue={state}
        onValueChange={(itemValue) => handleChange({state: itemValue})}
      > 
        <Picker.Item key={0} label="Select your State" value={0} />
        <Picker.Item key={1} label="Karnataka" value="karnataka" />
        <Picker.Item key={2} label="TamilNadu" value="TamilNadu" />
      </Picker>
      <Picker
        style={styles.text}
        selectedValue={city}
        onValueChange={(itemValue) => handleChange({city: itemValue})}
      >
        <Picker.Item key={0} label="Select your City" value={0} />
        {districtOrCity.map((list, i) => (
          <Picker.Item key={i + 1} label={list} value={list} />
        ))}
      </Picker> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  text: {
    fontSize: 20,
    marginLeft: 8
   }
});

export default SelectStateCity;