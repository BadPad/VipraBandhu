import React from 'react'
import { StyleSheet, FlatList, ScrollView } from 'react-native'
import ServicesCardList from '../../utils/ServicesCardList';
import staticData from "../../Reusable_Component/Search/staticData";
import isEmpty from '../../Reusable_Component/is-empty';
import Heading from '../../Reusable_Component/Heading';

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
    const serviceName = route.params.name;
    
    let filteredList;
    if(serviceCategory !== undefined || null) {
        filteredList = staticData.filter(list => list.category === serviceCategory);
    } else if(serviceName !== undefined || null) {
        filteredList = staticData.filter(list => list.name.toLowerCase().includes(serviceName.toLowerCase()));
    }

    if(isEmpty(filteredList) === false) {
        return (
            <ScrollView style={styles.container}>
                <FlatList 
                    keyExtractor={item => item.id.toString()}
                    data={filteredList}
                    renderItem={renderServicesList}
                />
            </ScrollView>
        )
    } else {
        return (
            <>
                <Heading containerStyle={styles.containernoResult} style={styles.noResult} name={`No Result for ${serviceName}`} />
                <Heading style={styles.noResultTag} name="Try checking you spelling or use more general Pooja/Catering service" />
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C8C8C8'
    },
    containernoResult: {
        paddingBottom: 0
    },
    noResult: {
        fontSize: 20
    },
    noResultTag: {
        fontSize: 11
    }
})

export default ServicesList
