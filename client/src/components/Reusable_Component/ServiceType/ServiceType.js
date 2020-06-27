import React from 'react'
import { Picker, View, StyleSheet } from 'react-native';

const ServiceType = ({ data, selectedService, selectedItem }) => {
    const handleChange = (value) => {
        if(value.type && value.type !== 0) {
        //   console.log(value.type)
          selectedService(value.type)
        }
    } 
      
    return (
        <View style={styles.container}>
            <Picker
            style={styles.text}
            selectedValue={selectedItem === '' ? 0 : selectedItem}
            onValueChange={(itemValue) => handleChange({type: itemValue})}
            >
                {data.map((item, i) => (
                    <Picker.Item key={i} label={item.label} value={item.value} />
                ))}
            </Picker> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 5,
        borderWidth:0.5,
        borderColor:'lightgrey'
    },
    text: {
        fontSize: 16,
        padding: 5,
        paddingLeft: 10,
    }
});

export default ServiceType
