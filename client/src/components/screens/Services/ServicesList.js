import React from 'react'
import { StyleSheet, FlatList, ScrollView, Text, View } from 'react-native'
import ServicesCardList from '../../utils/ServicesCardList';
import staticData from "../../Reusable_Component/Search/staticData";
import isEmpty from '../../Reusable_Component/is-empty';
import Heading from '../../Reusable_Component/Heading';

const ServicesList = ({ navigation, route }) => {

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
    if (serviceCategory !== undefined || null) {
        filteredList = staticData.filter(list => list.category === serviceCategory);
        filteredList_Purohit_Pooja = filteredList.filter(list => list.subcategory === 'pooja');
        filteredList_Purohit_Homa = filteredList.filter(list => list.subcategory === 'homa');
        filteredList_Purohit_Function = filteredList.filter(list => list.subcategory === 'function');
        filteredList_Purohit_Shraddha = filteredList.filter(list => list.subcategory === 'shraddha');
    } else if (serviceName !== undefined || null) {
        filteredList = staticData.filter(list => list.name.toLowerCase().includes(serviceName.toLowerCase()));
    }

    if (isEmpty(filteredList) === false) {
        return (
            <ScrollView style={styles.container}>
                {
                    (serviceCategory === 'pooja') ?
                        <>
                        <View style={styles.subCategory}>
                            <Text style={styles.subCategoryTitle}>
                                Pooja
                            </Text>
                            <FlatList
                                keyExtractor={item => item.id.toString()}
                                data={filteredList_Purohit_Pooja}
                                renderItem={renderServicesList}
                            />
                        </View>

                        <View style={styles.subCategory}>
                            <Text style={styles.subCategoryTitle}>
                                Homa
                            </Text>
                            <FlatList
                                keyExtractor={item => item.id.toString()}
                                data={filteredList_Purohit_Homa}
                                renderItem={renderServicesList}
                            />
                        </View>

                        <View style={styles.subCategory}>
                            <Text style={styles.subCategoryTitle}>
                                Functions
                            </Text>
                            <FlatList
                                keyExtractor={item => item.id.toString()}
                                data={filteredList_Purohit_Function}
                                renderItem={renderServicesList}
                            />
                        </View>

                        <View style={styles.subCategory}>
                            <Text style={styles.subCategoryTitle}>
                                Shraddha
                            </Text>
                            <FlatList
                                keyExtractor={item => item.id.toString()}
                                data={filteredList_Purohit_Shraddha}
                                renderItem={renderServicesList}
                                
                            />
                        </View>
                        </>
                        :
                        <FlatList
                            keyExtractor={item => item.id.toString()}
                            data={filteredList}
                            renderItem={renderServicesList}
                        />
                }
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

export default ServicesList
