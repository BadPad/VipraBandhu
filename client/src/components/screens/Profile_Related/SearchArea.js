import React, { Component } from 'react';
import { View } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

 /* const items = [
    {
        id: 1,
        name: 'Madhwa',
    },
    {
        id: 2,
        name: 'Smartha',
    },
    {
        id: 3,
        name: 'Iyengar',
    },
    {
        id: 4,
        name: 'Any',
    },
];  */

export default class SearchArea extends Component {
  constructor() {
    super();
    this.state = {
      selectedItems: [],
    };
  }
  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  };

  render() {
    const { areas } = this.props;
    function setID(item, index) {
        const newFormat = {"id": index,"name": item};        
        return newFormat;
    }

    const output = areas && areas.map(setID);
    console.log(output);
    

    return (
      <View>
        <SectionedMultiSelect
          items={output}
          uniqueKey="id"
          selectText="Areas"
          styles={{
            selectToggleText:{
              paddingTop:8
            },
            selectToggle:{
              width: "100%",
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: 25,
              paddingHorizontal: 16,
              fontSize: 16,
              marginVertical: 3,
              minHeight: 40,
              marginBottom: 5
            },
          }}
          showDropDowns={true}
          single={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
        />
      </View>
    );
  }
}