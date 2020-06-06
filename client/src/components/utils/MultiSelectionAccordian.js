import React from 'react';
import { View, Text } from 'react-native';
import Accordian from '../Reusable_Component/Acoordian';
import SelectMultiple from 'react-native-select-multiple';

const MultiSelectionAccordian = ({ data, selectedData, selectedItems }) => {
    console.log(data)

    return (
        <View>
            <Accordian title={data.name} >
                <SelectMultiple 
                    items={data.services}
                    selectedItems={selectedItems}
                    onSelectionsChange={onSelectedData => selectedData(onSelectedData)}
                />
            </Accordian>
        </View>
    )
}

export default MultiSelectionAccordian
