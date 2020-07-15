import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import ModalView from './ModalView';
import SelectMultiple from 'react-native-select-multiple'
import FieldButton from './FieldButton';
import isEmpty from './is-empty';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MultipleSelectionDropdown = ({
    data,
    SelectedData,
    selectedItems
}) => {
    const [isModel, setIsModel] = useState(false);
    const modalContent = (
        <View style={styles.modelContent}>
            <SelectMultiple 
                items={data}
                selectedItems={selectedItems}
                onSelectionsChange={onSelectedData => SelectedData(onSelectedData)}
            />
            <FieldButton 
                butonContainer={styles.butonContainer}
                name="Confirm"
                onPress={() => setIsModel(!isModel)}
            />
        </View>
    )
    return (
        <View>
            <ModalView 
                isVisible={isModel}
                close={() => setIsModel(!isModel)}
                children={modalContent}
                modalContainer={styles.modelContainer}
            />
            <TouchableHighlight onPress={() => setIsModel(!isModel)}>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>{isEmpty(selectedItems) ? 'Multiple' : `Selected (${selectedItems.length})`}</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={18} />
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 2,
        borderWidth:0.9,
        paddingLeft: 8,
        paddingRight: 3,
        borderColor: 'rgba(68,68,68,0.1)',
        height: 40
    },
    textStyle:{
        fontSize: 16,
        marginRight: 20
    },
    modelContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 0
    },
    modelContent: {
        flex: 1
    },
    butonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    }
})

export default MultipleSelectionDropdown
