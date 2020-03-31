import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children, style }) => {
    return (
        <View style={{...styles.containerStyles, ...style}}>
            {children}
        </View>
    );
};

const styles = {
    containerStyles: {
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}

export default CardSection;