import React from 'react';
import { Picker, View, StyleSheet } from 'react-native';

const TypesOfService = ({selectedTypeOfService, selectedItem }) => {
  const handleChange = (value) => {
    if(value.castes && value.castes !== 0) {
      // console.log(value.castes)
      selectedTypeOfService(value.castes)
    }
  } 
  
  return (
    <View style={styles.container}>
      <Picker
        style={styles.text}
        selectedValue={selectedItem === '' ? 0 : selectedItem}
        onValueChange={(itemValue) => handleChange({castes: itemValue})}
      >
        <Picker.Item key={0} label="Select your service type" value={0} />
        <Picker.Item key={1} label = "Full Contract" value = "Full Contract" />
        <Picker.Item key={2} label = "Labour Contract" value = "Labour Contract" />
        <Picker.Item key={3} label = "Both" value = "Full Contract and Labour Contract" />
      </Picker> 
    </View>
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
   }
});

export default TypesOfService;
