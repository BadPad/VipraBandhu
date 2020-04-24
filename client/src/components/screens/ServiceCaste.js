import React, { Component } from 'react';
import { View } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

const items = [
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
];

export default class SelectServices extends Component {
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
    return (
      <View>
        <SectionedMultiSelect
          items={items}
          uniqueKey="id"
          
          selectText="Caste"
          showDropDowns={true}
          hideSearch={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
        />
      </View>
    );
  }
}