import React from 'react';
import { Picker, View, StyleSheet } from 'react-native';

const Dropdown = ({ data, selectDrop, selectedItem, style, pickerStyle }) => {
    const handleChange = (value) => {
        if(value.item && value.item !== 0) {
        //   console.log(value.item)
          selectDrop(value.item)
        }
    } 
      
    return (
        <View style={[styles.container, style]}>
            <Picker
                style={[styles.picker, pickerStyle]}
                selectedValue={selectedItem === '' ? 0 : selectedItem}
                onValueChange={(itemValue) => handleChange({item: itemValue})}
            >
                {data && data.map((item, i) => (
                    <Picker.Item key={i} label={item.label} value={item.value} />
                ))}
            </Picker> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 2,
        borderWidth:0.5,
        borderColor:'lightgrey',
        paddingVertical: 5
    },
    picker: {
        height: 30
    }
});

export default Dropdown
