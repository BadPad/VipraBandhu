import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Card from '../Reusable_Component/Card/Card'
import CardSection from '../Reusable_Component/Card/CardSection'

const ServicesCardList = ({ data, onSelectService }) => {
    return (
        <TouchableOpacity onPress={() => onSelectService(data.id)}>
            <Card style={styles.cardContainer}>
                <CardSection>
                    <Image 
                        source={data.category === 'pooja' ? require('../images/Logo.png') : require('../images/catering.jpg')} 
                        style={styles.imageStyle}
                    />
                    <Text style={styles.headerTextStyle}>{data.name}</Text>
                </CardSection>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        padding: 5,
        margin: 1
    },
    imageStyle: {
        height: 100,
        width: 100
    },
    headerTextStyle: {
        justifyContent: 'center',
        fontSize: 18
    }
})

export default ServicesCardList
