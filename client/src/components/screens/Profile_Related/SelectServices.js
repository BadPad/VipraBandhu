import React from 'react';
import { View } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

const SelectServices = ({ services, selectedServices, selectedItems }) => {

  const category = services.filter(list => list.serviceCategory === 'purohit');

  const subCatList = category.map(list => list.serviceSubCategory).filter((value, index, self) => self.indexOf(value) === index)
  
  const servicesList = subCatList.map((list,i) => {
    const subCatType = services.filter(service => service.serviceSubCategory === list)
    return {
      name: list,
      id: i,
      services: subCatType.map(list => {
        return {
          name: list.serviceName, 
          id: list.serviceId
        }
      })
    }
  })

  const onSelectedItemsChange = selectedItems => {
    selectedServices(selectedItems)
  }

  return (
    <View>
      <SectionedMultiSelect
        items={servicesList}
        uniqueKey="id"
        subKey="services"
        selectText="Select your Services"
        styles={{
          subItemText : {
            color: '#000'
          },
          selectedItem: {
            //backgroundColor:'red'
          },
          selectToggleText:{
            //paddingTop:8
          },
          selectToggle:{
            width: "100%",
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: 5,
            paddingHorizontal: 16,
            fontSize: 16,
            marginVertical: 3,
            padding: 5,
            paddingLeft: 10,
            borderWidth:0.5,
            borderColor:'lightgrey'            
          }
        }}
        showDropDowns={true}
        readOnlyHeadings={true}
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={selectedItems}
      />
    </View>
  );
};

export default SelectServices;