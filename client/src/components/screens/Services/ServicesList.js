import React, { useState, createRef } from 'react'
import { StyleSheet, FlatList, ScrollView, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';

import Card from '../../Reusable_Component/Card/Card';
import CardSection from '../../Reusable_Component/Card/CardSection';
import ServicesCardList from '../../utils/ServicesCardList';
import isEmpty from '../../Reusable_Component/is-empty';
import Heading from '../../Reusable_Component/Heading';
import SearchServices from '../../Reusable_Component/SearchServices';
import { searchServices, selectedCategory, filterCategory } from '../../../redux/actions/serviceListActions';
import BottomScrollSheet from '../../Reusable_Component/BottomScrollSheet';
import FieldButton from '../../Reusable_Component/FieldButton';
import FilterCategory from '../../utils/FilterCategory';

const { height } = Dimensions.get('window');

const ServicesList = ({ navigation, route, serviceList, searchServices, selectedCategory, filterCategory }) => {

    const [checkedCategory, setCheckedCategory] = useState('');

    const onSelectService = data => {
        navigation.navigate('Service', { id: data })
    }

    const renderServicesList = ({ item }) => {
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

    const category = allServices.filter(list => list.serviceCategory === serviceCategory);

    const subCatList = category.map(list => list.serviceSubCategory).filter((value, index, self) => self.indexOf(value) === index)

    const bottomSheetRef = createRef();

    const renderInner = (
        <>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={subCatList}
                renderItem={({item, index}) => (
                    <FilterCategory 
                        key={index} 
                        category={item} 
                        filterCategory={serviceList.filterCategory} 
                        onSelectedCategory={category => {
                            setCheckedCategory(category)
                            selectedCategory(category)
                        }}
                    />
                )}
            />
            <FieldButton 
                butonContainer={styles.submitCategory}
                buttonTouch={styles.buttonTouch}
                name="Submit"
                onPress={() => {  
                    bottomSheetRef.current.snapTo(1);
                    filterCategory(checkedCategory);
                }}
            />
        </>
    )

    if (isEmpty(filteredList) === false) {
        return (
            <>
                <SearchServices 
                    navigation={navigation} 
                    route={route}
                    services={services}
                    searchServices={searchServices}
                />
                <BottomScrollSheet 
                    bottomSheetRef={bottomSheetRef}
                    snapPoints = {[height / 2, 0]}
                    initialSnap={1}
                    renderInner={renderInner}
                />
                <ScrollView style={styles.container}>
                    <Card>
                        <CardSection style={styles.filterSection}>
                            <Text style={styles.filterText} >{filteredList.length} Services Available</Text>
                            <TouchableOpacity style={styles.filterButton} onPress={() => bottomSheetRef.current.snapTo(0)}>
                                <Icon name="filter" style={styles.filterIcon} >Filter</Icon>
                            </TouchableOpacity>
                        </CardSection>
                    </Card>
                    {
                        serviceCategory === 'purohit' ?
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
                            : serviceCategory === 'catering' ?
                                <FlatList
                                    keyExtractor={item => item.serviceId.toString()}
                                    data={filteredList}
                                    renderItem={renderServicesList}
                                />
                            : null
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
    filterSection: {
        justifyContent: 'space-between',
        paddingHorizontal: 9
    },
    filterText: {
        paddingTop: 2
    },
    filterButton: {
        borderColor: '#444',
        borderWidth: 1,
        borderRadius: 5
    },
    filterIcon: {
        padding: 5
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
        marginVertical: 5,
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
    },
    panel: {
        height: 600,
        paddingHorizontal: 20,
        backgroundColor: '#EEE9E9',
    },
    submitCategory:{
        marginVertical: 20
    },
    buttonTouch: {
        backgroundColor: '#D63031',
        borderRadius:5
    }
})

ServicesList.propTypes = {
    searchServices: PropTypes.func.isRequired,
    selectedCategory: PropTypes.func.isRequired,
    filterCategory: PropTypes.func.isRequired,
    serviceList: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    serviceList : state.serviceList
})

const mapDispatchToProps = { searchServices, selectedCategory, filterCategory }

export default connect(mapStateToProps, mapDispatchToProps)(ServicesList)
