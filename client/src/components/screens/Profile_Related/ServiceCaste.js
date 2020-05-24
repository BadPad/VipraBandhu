import React, { Component } from 'react';
import { View } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

const ServiceCaste = ({ caste, selectedCaste, selectedItems }) => {

  function setID(item, index) {
    const newFormat = {"id": index,"name": item};
    return newFormat;
  }

  const output = caste && caste.map(setID);

  const onSelectedItemsChange = selectedItems => {
    selectedCaste(selectedItems)
  }
  return (
    <View>
      <SectionedMultiSelect
        items={output}
        uniqueKey="id"
        selectText="Caste"
        styles={{
          selectedItem: {
            backgroundColor:'red'
          },
          selectToggleText:{
            paddingTop:8
          },
          container: {
            maxHeight: 250,
          },
          modalWrapper: {
            alignContent: 'center'
          },
          selectToggle:{
            width: "100%",
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: 25,
            paddingHorizontal: 16,
            fontSize: 16,
            marginVertical: 3,
            minHeight: 40,
            marginBottom: 10
          },
        }}
        showDropDowns={true}
        hideSearch={true}
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={selectedItems}
      />
    </View>
  );
};

export default ServiceCaste;