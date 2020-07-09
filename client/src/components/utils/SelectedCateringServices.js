import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CardSection from '../Reusable_Component/Card/CardSection'

const SelectedCateringServices = ({ data }) => {
    return (
        <View style={styles.container}>
            <CardSection style={styles.content}>
                <Text style={styles.serviceName}>{data.serviceName}</Text>
                <Text>Rs. {data.serviceAmount}</Text>
            </CardSection>
            {data.serviceSubCategory === 'lunch' || data.serviceSubCategory === 'dinner' ?
                <View style={styles.itemsContainer}>
                    <Text style={styles.items}>Items : </Text>
                    <Text style={styles.itemsList}>{data.serviceItems.join(', ')}</Text>
                </View>
            : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 2,
        borderWidth: 1,
        borderColor: '#ddd',
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderRadius: 2
    },
    content: {
        justifyContent: 'space-between',
        borderBottomColor: '#ddd',
        borderBottomWidth: 0.5,
        alignItems: 'center',
    },
    serviceName: {
        fontWeight: 'bold'
    },
    itemsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 5
    },
    items: {
        color: '#AAA6A5',
        fontWeight: 'bold'
    },
    itemsList: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'stretch'
    }
})

export default SelectedCateringServices
