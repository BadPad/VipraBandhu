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
          selectToggleText: {
            fontSize: 16,
            paddingLeft: 7
          }
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