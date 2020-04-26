import React, { Component } from 'react';
import { View } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

const items = [
  // this is the parent or 'item'
  {
    name: 'Pooja',
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: 'Sathyanarayana Pooja',
        id: 10,
      },
      {
        name: 'Punyavarchane',
        id: 11,
      },
      {
        name: 'Vaascal/ Baagilu Pooje',
        id: 12,
      },
      {
        name: 'Naandi',
        id: 13,
      },
      {
        name: 'Angadi / Shop Opening / Lakshmi Pooje during Deepavali',
        id: 14,
      },
      {
        name: 'DevaraPooje – Mane devaraPooje',
        id: 15,
      },
      {
        name: 'Navagraha Pooje / Japa',
        id: 16,
      },
      {
        name: 'Durga Pooje / Durga Namaskara',
        id: 17,
      },
      {
        name: 'Ganapathi Pooje (On Ganesha Chaturthi)',
        id: 18,
      },
      {
        name: 'Swarna GouriPooje',
        id: 19,
      },
      {
        name: 'AnanthaPadmanabha Vratha',
        id: 20,
      },
      {
        name: 'Mangala gowri Vratha',
        id: 21,
      },
      {
        name: 'BheeemanaAmavasye Vratha',
        id: 22,
      },
      {
        name: 'Navagraha  Japa / Shanthi',
        id: 23,
      },
    ],
  },
  {
    // next parent item
    name: 'Homa',
    id: 1,
    // these are the children or 'sub items'
    children: [
        {
            name: 'Gana Homa',
            id: 24,
        },
        {
            name: 'Pavamana Homa',
            id: 25,
        },
        {
            name: 'Vishnu SahasranaamaHoma',
            id: 26,
        },
        {
            name: 'Mrutyunjaya Homa',
            id: 27,
        },
        {
            name: 'Sudarshana Homa',
            id: 28,
        },
        {
            name: 'Ayushya Homa',
            id: 29,
        },
        {
            name: 'Manyusuktha Homa',
            id: 30,
        },
        {
            name: 'VaasthuHoma / Vashtu Shanthi',
            id: 31,
        },
        {
            name: 'BruhatiSahasra Homa',
            id: 32,
        },
    ]
  },
  
  {
    // next parent item
    name: 'Functions',
    id: 2,
    // these are the children or 'sub items'
    children: [
        {
            name: 'Namakarana',
            id: 33,
        },
        {
            name: 'Upanayana',
            id: 34,
        },
        {
            name: 'Marriage',
            id: 35,
        },
        {
            name: 'Gruha Pravesha',
            id: 36,
        },
        {
            name: 'JavaLa/Chandike',
            id: 37,
        },
    ]
},
  
{
    // next parent item
    name: 'Shraddha/Tithi',
    id: 3,
    // these are the children or 'sub items'
    children: [
        {
            name: 'Sankalpa Shraddha /Chataka Shraddha',
            id: 38,
        },
        {
            name: 'Paksha',
            id: 39,
        },
        {
            name: 'Vaikunta Samaradhane',
            id: 40,
        },
        {
            name: 'Godaana',
            id: 41,
        },
    ]
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
          subKey="children"
          selectText="Select your Services"
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
        />
      </View>
    );
  }
}