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
]; */

export default class ServiceCaste extends Component {
  constructor() {
    super();
    this.state = {
      selectedItems: [],
    };
  }
  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
    this.props.selectedCaste(selectedItems);
    console.log(selectedItems);
  };

  render() {
    const { caste } = this.props;

    function setID(item, index) {
      const newFormat = {"id": index,"name": item};
      return newFormat;
  }

  const output = caste && caste.map(setID);
  console.log(output);
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
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
        />
      </View>
    );
  }
}