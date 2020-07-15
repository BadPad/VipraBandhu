import React, { Component } from 'react';
import { View } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

export default class SearchArea extends Component {
  
  onSelectedItemsChange = (selectedItems) => {
    const { selectArea } = this.props;
    selectArea(selectedItems)
  };

  render() {
    const { area, selectedArea } = this.props;
    function setID(item, index) {
        const newFormat = {"id": index,"name": item};        
        return newFormat;
    }

    const output = area && area.map(setID);
    //console.log(output);
  
    return (
      <View>
        <SectionedMultiSelect
          items={output}
          uniqueKey="id"
          selectText="Area"
          styles={{
            selectToggleText:{
              
            },
            selectToggle:{
              width: "100%",
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: 2,
              paddingHorizontal: 16,
              fontSize: 16,
              marginVertical: 3,
              padding: 5,
              paddingLeft: 10,
              borderWidth:0.5,
              borderColor:'rgba(68,68,68,1)',
              height: 40
            },
          }}
          showDropDowns={true}
          single={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedArea}
          hideConfirm={true}
        />
      </View>
    );
  }
}