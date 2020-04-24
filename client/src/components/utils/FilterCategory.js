import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { CheckBox } from 'react-native-elements'

const FilterCategory = ({ filterCategory, category, onSelectedCategory }) => {
    return (
        <TouchableOpacity 
            style={filterCategory === category ? {...styles.subCategory, ...styles.subCategoryChecked} : styles.subCategory } 
            onPress={() => onSelectedCategory(category)}
        >
            <Text style={styles.categoryText}>{category}</Text>
            <CheckBox 
                containerStyle={styles.categoryCheck}
                checkedColor="#D63031"
                uncheckedIcon='circle-o'
                checked={filterCategory === category? true : false}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    subCategory: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,
        borderColor: 'rgba( 0 , 0 , 0 , 0.251 )',
        borderWidth: 1,
        borderRadius: 5,
        padding: 12
    },
    subCategoryChecked: {
        borderColor: '#D63031'
    },
    categoryText: {
        fontSize: 16,
        textTransform: 'uppercase'
    },
    categoryCheck: {
        padding: 0, 
        margin: 0
    }
})

export default FilterCategory
