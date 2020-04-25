// import component
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

const items = [
    {
    id: 1,
    name: 'Banashankari',
    },
    {
    id: 2,
    name: 'Jayanagar',
    },
    {
    id: 3,
    name: 'Jp nagar',
    },
    {
    id: 4,
    name: 'Basavanagudi',
    },
    {
    id: 5,
    name: 'Saraki',
    },
    {
    id: 6,
    name: 'Majestic',
    },
    {
    id: 7,
    name: 'Shanthi nagar',
    },
    {
    id: 8,
    name: 'Bommanalli',
    },
    {
    id: 9,
    name: 'Bommanalli',
    },
    {
    id: 10,
    name: 'Bommanalli',
    },
    {
    id: 11,
    name: 'Bommanalli',
    },
    {
    id: 12,
    name: 'Bommanalli',
    },
    {
    id: 13,
    name: 'Bommanalli',
    },
    {
    id: 14,
    name: 'Bommanalli',
    },
    {
    id: 15,
    name: 'Bommanalli',
    }
];

class ServiceArea extends Component {

  state = {
    selectedItems : []
  };

  
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };

  render() {
    const { selectedItems } = this.state;
    const { areas } = this.props;
    console.log(areas)
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Area "
          searchInputPlaceholderText="Search Items..."
          onChangeInput={ (text)=> console.log(text)}
          styleTextDropdown={{ marginLeft: 15, fontSize: 15 }}
          styleTextDropdownSelected={{ marginLeft: 15, fontSize: 15 }}
          single={true}
          fixedHeight={true}
          /* altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000" */
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#000"
          submitButtonText="Confirm"
        />
        </ScrollView>
      </View>
    );
  }
}

export default ServiceArea;