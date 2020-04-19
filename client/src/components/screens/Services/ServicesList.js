import React, { useState } from 'react'
import { StyleSheet, FlatList, ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import ServicesCardList from '../../utils/ServicesCardList';
import isEmpty from '../../Reusable_Component/is-empty';
import Heading from '../../Reusable_Component/Heading';
import SearchServices from '../../Reusable_Component/SearchServices';
import { searchServices } from '../../../redux/actions/serviceListActions';

const ServicesList = ({ navigation, route, serviceList, searchServices }) => {

    const onSelectService = data => {
        navigation.navigate('Service', { id: data })
    }

    const renderServicesList = ({ item, subCat }) => {
        return (
            <ServicesCardList data={item} onSelectService={onSelectService} />
        )
    }

    const serviceCategory = route.params.category;
    const serviceName = route.params.name;

    let filteredList;
    let filteredList_Purohit_Pooja;
    let filteredList_Purohit_Homa;
    let filteredList_Purohit_Function;
    let filteredList_Purohit_Shraddha;
    const services = serviceList.filteredList;
    const allServices = serviceList.fullServiceList
    if (serviceCategory !== undefined || null) {
        filteredList = services.filter(list => list.serviceCategory === serviceCategory);
        filteredList_Purohit_Pooja = filteredList.filter(list => list.serviceSubCategory === 'pooja');
        filteredList_Purohit_Homa = filteredList.filter(list => list.serviceSubCategory === 'homa');
        filteredList_Purohit_Function = filteredList.filter(list => list.serviceSubCategory === 'function');
        filteredList_Purohit_Shraddha = filteredList.filter(list => list.serviceSubCategory === 'shraddha');
    } else if (serviceName !== undefined || null) {
        filteredList = allServices.filter(list => list.serviceName.toLowerCase().includes(serviceName.toLowerCase()));
    }

    if (isEmpty(filteredList) === false) {
        return (
            <>
                <SearchServices 
                    navigation={navigation} 
                    route={route}
                    services={services}
                    searchServices={searchServices}
                />
                <ScrollView style={styles.container}>
                    {
                        (serviceCategory === 'purohit') ?
                            <>
                                {isEmpty(filteredList_Purohit_Pooja) === false &&
                                <View style={styles.subCategory}>
                                    <Text style={styles.subCategoryTitle}>
                                        Pooja
                                    </Text>
                                    <FlatList
                                        keyExtractor={item => item.serviceId.toString()}
                                        data={filteredList_Purohit_Pooja}
                                        renderItem={renderServicesList}
                                    />
                                </View>}

                                {isEmpty(filteredList_Purohit_Homa) === false &&
                                <View style={styles.subCategory}>
                                    <Text style={styles.subCategoryTitle}>
                                        Homa
                                    </Text>
                                    <FlatList
                                        keyExtractor={item => item.serviceId.toString()}
                                        data={filteredList_Purohit_Homa}
                                        renderItem={renderServicesList}
                                    />
                                </View>}

                                {isEmpty(filteredList_Purohit_Function) === false &&
                                <View style={styles.subCategory}>
                                    <Text style={styles.subCategoryTitle}>
                                        Functions
                                    </Text>
                                    <FlatList
                                        keyExtractor={item => item.serviceId.toString()}
                                        data={filteredList_Purohit_Function}
                                        renderItem={renderServicesList}
                                    />
                                </View>}

                                {isEmpty(filteredList_Purohit_Shraddha) === false &&
                                <View style={styles.subCategory}>
                                    <Text style={styles.subCategoryTitle}>
                                        Shraddha
                                    </Text>
                                    <FlatList
                                        keyExtractor={item => item.serviceId.toString()}
                                        data={filteredList_Purohit_Shraddha}
                                        renderItem={renderServicesList}
                                        
                                    />
                                </View>}
                            </>
                            :
                                <FlatList
                                    keyExtractor={item => item.serviceId.toString()}
                                    data={filteredList}
                                    renderItem={renderServicesList}
                                />
                    }
                </ScrollView>
            </>
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
        backgroundColor: '#fff'
    },
    containernoResult: {
        paddingBottom: 0
    },
    noResult: {
        fontSize: 20
    },
    noResultTag: {
        fontSize: 11
    },
    subCategory: {
        backgroundColor: '#fff',
        margin:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderColor:'#000',
        borderWidth:0.5
    },
    subCategoryTitle: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight:'bold',
        backgroundColor:'#595959',
        color:'#fff',
        padding:3
    }
})

ServicesList.propTypes = {
    serviceList: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    serviceList : state.serviceList
})

const mapDispatchToProps = { searchServices }

export default connect(mapStateToProps, mapDispatchToProps)(ServicesList)
