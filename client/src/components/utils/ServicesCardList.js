import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Card from '../Reusable_Component/Card/Card'
import CardSection from '../Reusable_Component/Card/CardSection'
import Icon from 'react-native-vector-icons/Ionicons';

const ServicesCardList = ({ data, onSelectService }) => {
    return (
        <TouchableOpacity onPress={() => onSelectService(data)}>
            <Card style={styles.cardContainer}>
                <CardSection>
                    <Icon name="ios-arrow-dropright-circle" size={20} 
                        backgroundColor="transparent" color="#D63031" 
                    ></Icon >
                    <Text style={styles.headerTextStyle}>{data.serviceName}</Text>
                </CardSection>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        padding: 5,
        margin: 0,
        
        borderWidth:0
    },
    imageStyle: {
        height: 30,
        width: 30
    },
    headerTextStyle: {
        justifyContent: 'center',
        fontSize: 15,
        paddingLeft: 5
    }
})

export default ServicesCardList
