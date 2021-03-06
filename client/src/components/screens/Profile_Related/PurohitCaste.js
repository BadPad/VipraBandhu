import React from 'react';
import { Picker, View, StyleSheet, Text} from 'react-native';

const PurohitCaste = ({ caste, selectCaste, selectedCaste }) => {
  const handleChange = (value) => {
    if(value.castes && value.castes !== 0) {
      // console.log(value.castes)
      selectCaste(value.castes)
    }
  } 
  
  return (
    <View style={styles.container}>
      <Picker
        style={styles.text}
        selectedValue={selectedCaste === '' ? 0 : selectedCaste}
        onValueChange={(itemValue) => handleChange({castes: itemValue})}
      >
        <Picker.Item key={0} label="Select Caste" value={0} />
        {caste && caste.map((list, i) => (
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
   }
});

export default PurohitCaste;