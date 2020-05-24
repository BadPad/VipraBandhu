import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimeField from './DateTimeField';

const DatePicker = ({
    pickerContainer,
    pickerText,
    displayDateTime,
    name,
    onPress,
    show,
    timeZoneOffsetInMinutes,
    value,
    mode,
    is24Hour,
    display,
    onChange
}) => {
    return (
        <View style={{...styles.container, pickerContainer}}>
            <DateTimeField 
                pickerText={pickerText}
                displayDateTime={displayDateTime}
                onPress={onPress}
                mode={mode}
                name={name}
                value={value}
            />
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
                    value={value}
                    mode={mode}
                    is24Hour={is24Hour}
                    display={display}
                    onChange={onChange}
                    textColor="blue"
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 20
    }
})

export default DatePicker;