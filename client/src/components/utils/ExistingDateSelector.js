import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import DateTimeField from '../Reusable_Component/DateTimeSelector/DateTimeField';
import moment from "moment";
import { App_Color } from '../Reusable_Component/ConstantValues';

const ExistingDateSelector = ({
    mode,
    value,
    selectedDate,
    onSelectedDate
}) => {
    const getDate = date => {
        return moment(date).format('DD/MM/YYYY')
    }
    return (
        <TouchableOpacity 
            style={getDate(selectedDate) === getDate(value) ? {...styles.existingDate, ...styles.existingDateChecked} : styles.existingDate}
            onPress={() => onSelectedDate(value)}
        >
            <CheckBox 
                containerStyle={styles.dateCheck}
                checkedColor={App_Color}
                uncheckedIcon='circle-o'
                checked={getDate(selectedDate) === getDate(value) ? true : false}
            />
            <View style={styles.dateTimeContainer}>
                <DateTimeField 
                    displayDateTime={styles.displayDateTime}
                    dateContent={styles.dateContent}
                    mode={mode}
                    value={value}
                    onPress={() => onSelectedDate(value)}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    existingDate: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
        borderColor: 'rgba( 0 , 0 , 0 , 0.251 )',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 5
    },
    existingDateChecked: {
        borderColor: App_Color
    },
    dateTimeContainer: {
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        alignItems: 'center'
    },
    displayDateTime: {
        borderWidth: 0
    },
    dateContent: {
        textAlign: 'auto'
    },
    dateCheck: {
        padding: 0,
        margin: 0
    }
})

export default ExistingDateSelector
