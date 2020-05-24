import React, { useState, createRef } from 'react'
import { StyleSheet, FlatList, ScrollView, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';

import Card from '../../Reusable_Component/Card/Card';
import CardSection from '../../Reusable_Component/Card/CardSection';
import ServicesCardList from '../../utils/ServicesCardList';
import ServicesCardCookList from '../../utils/ServicesCardCookList';
import isEmpty from '../../Reusable_Component/is-empty';
import Heading from '../../Reusable_Component/Heading';
import SearchServices from '../../Reusable_Component/SearchServices';
import { searchServices, selectedCategory, filterCategory } from '../../../redux/actions/serviceListActions';
import BottomScrollSheet from '../../Reusable_Component/BottomScrollSheet';
import FieldButton from '../../Reusable_Component/FieldButton';
import FilterCategory from '../../utils/FilterCategory';
import Accordian from '../../Reusable_Component/Accordian';

const { height } = Dimensions.get('window');

const ServicesList = ({ navigation, route, serviceList, searchServices, selectedCategory, filterCategory }) => {

    const [checkedCategory, setCheckedCategory] = useState('');

    //let selectedCookItems = [];
    const [selectedCookItemsCount, setCount] = useState(0);
    const [selectedCookItems, setItems] = useState([]);

    const onSelectService = data => {
        navigation.navigate('Service', { id: data, serviceType: "purohit" })
    }

    const renderServicesList = ({ item }) => {
        return (
            <ServicesCardList data={item} onSelectService={onSelectService} />
        )
    }

    const updateCookSelectedCount = (selected) => {
        if (selected === "add") {
            setCount(selectedCookItemsCount + 1);
        }
        else {
            setCount(selectedCookItemsCount - 1);
        }
    }

    const AddCookItems = (data, value) => {
        setItems([...selectedCookItems, {
            id: data,
            value: value
        }])
    }

    const RemoveCookItems = (data, value) => {
        setItems(selectedCookItems.filter(item => item.id != data));
    }

    const ShowSelectedItems = () => {
        navigation.navigate('Service', { id: selectedCookItems, cookData: selectedCookItems, serviceType: "cook" })
    }

    const onSelectCookService = (data, value, isChecked) => {
        if (isChecked) {
            updateCookSelectedCount("add");
            AddCookItems(data, value);
        }
        else {
            updateCookSelectedCount("subtract");
            //setCount(selectedCookItemsCount - 1);
            RemoveCookItems(data, value);
        }
    }

    const renderServicesCookList = ({ item }) => {
        return (
            <ServicesCardCookList data={item} onSelectCookService={onSelectCookService} />
        )
    }

    const serviceCategory = route.params.category;
    const serviceName = route.params.name;

    let filteredList;
    let filteredList_Purohit_Pooja;
    let filteredList_Purohit_Homa;
    let filteredList_Purohit_Function;
    let filteredList_Purohit_Shraddha;

    let filteredList_Cook_Breakfast;
    let filteredList_Cook_Lunch;
    let filteredList_Cook_Snacks;
    let filteredList_Cook_Dinner;

    const services = serviceList.filteredList;
    const allServices = serviceList.fullServiceList;
    if (serviceCategory !== undefined || null) {
        filteredList = services.filter(list => list.serviceCategory === serviceCategory);

        filteredList_Purohit_Pooja = filteredList.filter(list => list.serviceSubCategory === 'pooja');
        filteredList_Purohit_Homa = filteredList.filter(list => list.serviceSubCategory === 'homa');
        filteredList_Purohit_Function = filteredList.filter(list => list.serviceSubCategory === 'function');
        filteredList_Purohit_Shraddha = filteredList.filter(list => list.serviceSubCategory === 'shraddha');

        filteredList_Cook_Breakfast = allServices.filter(list => list.serviceSubCategory === 'breakfast');
        filteredList_Cook_Lunch = allServices.filter(list => list.serviceSubCategory === 'lunch');
        filteredList_Cook_Snacks = allServices.filter(list => list.serviceSubCategory === 'snacks');
        filteredList_Cook_Dinner = allServices.filter(list => list.serviceSubCategory === 'dinner');

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
                renderItem={({ item, index }) => (
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
                    snapPoints={[height / 2, 0]}
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
                            : serviceCategory === 'Catering' ?
                                <>
                                    {isEmpty(filteredList_Cook_Breakfast) === false &&
                                        <View style={styles.subCategory}>
                                            <Accordian title="Breakfast" >
                                                <FlatList
                                                    keyExtractor={item => item.serviceId.toString()}
                                                    data={filteredList_Cook_Breakfast}
                                                    renderItem={renderServicesCookList}
                                                />
                                            </Accordian>
                                        </View>}

                                    {isEmpty(filteredList_Cook_Lunch) === false &&
                                        <View style={styles.subCategory}>
                                            <Accordian title="Lunch">
                                                <FlatList
                                                    keyExtractor={item => item.serviceId.toString()}
                                                    data={filteredList_Cook_Lunch}
                                                    renderItem={renderServicesCookList}
                                                />
                                            </Accordian>
                                        </View>}

                                    {isEmpty(filteredList_Cook_Snacks) === false &&
                                        <View style={styles.subCategory}>
                                            <Accordian title="Snacks">
                                                <FlatList
                                                    keyExtractor={item => item.serviceId.toString()}
                                                    data={filteredList_Cook_Snacks}
                                                    renderItem={renderServicesCookList}
                                                />
                                            </Accordian>
                                        </View>}

                                    {isEmpty(filteredList_Cook_Dinner) === false &&
                                        <View style={styles.subCategory}>
                                           <Accordian title="Dinner">
                                            <FlatList
                                                keyExtractor={item => item.serviceId.toString()}
                                                data={filteredList_Cook_Dinner}
                                                renderItem={renderServicesCookList}
                                            />
                                            </Accordian>
                                        </View>}

                                </>
                                : null
                    }
                </ScrollView>
                <View>
                    {
                        serviceCategory === 'Catering' ?
                            <>
                                {
                                    < FieldButton
                                        name={'Next ( ' + selectedCookItemsCount + " selected)"}
                                        butonContainer={styles.buttonContainer}
                                        buttonTouch={styles.buttonTouch}
                                        onPress={ShowSelectedItems}
                                    ></FieldButton>
                                }
                            </>
                            : null
                    }
                </View>
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
        backgroundColor: '#fff',
        flexDirection:"column"
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
        borderColor: '#000',
        borderWidth: 0.5
    },
    subCategoryTitle: {
        fontFamily: 'OpenSans-Bold',
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
    submitCategory: {
        marginVertical: 20
    },
    buttonTouch: {
        backgroundColor: '#D63031',
        borderRadius: 5,
        fontFamily: 'OpenSans-Regular',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderRadius: 0,
        fontFamily: 'OpenSans-Regular',
    }
})

ServicesList.propTypes = {
    searchServices: PropTypes.func.isRequired,
    selectedCategory: PropTypes.func.isRequired,
    filterCategory: PropTypes.func.isRequired,
    serviceList: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    serviceList: state.serviceList
})

const mapDispatchToProps = { searchServices, selectedCategory, filterCategory }

export default connect(mapStateToProps, mapDispatchToProps)(ServicesList)
