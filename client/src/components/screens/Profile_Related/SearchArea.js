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
      console.log(areas)

      const data = areas;
      data.sort();
        function setID(item, index) {
            const newFormat = {"id": index,"name": item};
            return newFormat;
        }

        const output = data.map(setID);
        console.log(output);

    return (
      <View>
        <SectionedMultiSelect
          items={output}
          uniqueKey="id"
          selectText="Areas"
          showDropDowns={true}
          single={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
        />
      </View>
    );
  }
}