import React from 'react'
import { StyleSheet, FlatList, ScrollView } from 'react-native'
import ServicesCardList from '../../utils/ServicesCardList';
import staticData from "../../Reusable_Component/Search/staticData";

const ServicesList = ({ navigation, route }) => {

    const onSelectService = data => {
        navigation.navigate('Service', { id: data })
    }

    const renderServicesList = ({ item }) => {
        return(
            <ServicesCardList data={item} onSelectService={onSelectService} />
        )
    }

    const serviceCategory = route.params.category;
    const filteredList = staticData.filter(list => list.category === serviceCategory);
    return (
        <ScrollView style={styles.container}>
            <FlatList 
                keyExtractor={item => item.id.toString()}
                data={filteredList}
                renderItem={renderServicesList}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C8C8C8'
    },
})

export default ServicesList
