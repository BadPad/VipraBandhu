import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { App_Color, Font_Name_Regular, Font_Name_Bold } from '../../Reusable_Component/ConstantValues';
import staticData from '../../Reusable_Component/StaticData/eSeva';
import ESevaServicesCardList from '../../utils/eSevaServicesCardList';
// import { ScrollView } from 'react-native-gesture-handler';

const eSevaBooking = ({ navigation, route }) => {

    const type = route.params.type;


    navigation.setOptions({ title: type })


    const rendereSevaServicesList = ({ item }) => {
        return (
            <ESevaServicesCardList data={item} onSelectService={onSelectService} />
        )
    }

    const onSelectService = data => {
        navigation.navigate('eSevaBooking', { content: data })
    }

    return (
        <>
            {
                (type === 'Saamoohika') ?
                    <View style={styles.container}>
                        <View style={styles.boxes}>
                            <ScrollView>
                                <>
                                    <FlatList
                                        keyExtractor={(item, index) => index.toString()}
                                        data={staticData}
                                        renderItem={rendereSevaServicesList}
                                    />
                                </>
                            </ScrollView>
                        </View>
                    </View>

                    : (type === 'Pratyeka') ?
                        <View style={styles.container}>
                            <View style={styles.boxes}>
                                <ScrollView>
                                    <View style={styles.textView}>
                                        <Text style={styles.textStyle}>
                                            Pratyeka - We all know how difficult it is to organize or conduct an event where we have to talk to various service providers like purohit, catering, groceries, pooja items, etc.. get their contacts & book for various services, negotiate, run behind them, follow up and then to succeed is a nightmare.
                                        </Text>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>

                        : null

            }
        </>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',

    },
    topHeader: {
        backgroundColor: '#D63031',
        alignItems: 'center'
    },
    textStyle: {
        marginBottom: 5,
        fontSize: 14,
        fontFamily: Font_Name_Regular,
    },
    boxes: {
        padding: 10
    },
    headerText: {
        fontSize: 22,
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'sans-serif-medium'
    },
    textView: {
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: 'lightgrey'
    },

    sevaList: {
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        flex: 1,
        flexDirection: 'row',

    },
    sevaText: {
        fontSize: 16,
        fontFamily: Font_Name_Regular,
        color: '#fff'
    },
    sevaDescription: {
        fontSize: 13,
        fontFamily: Font_Name_Regular,
        color: '#fff'
    },
    icon: {
        textAlign: 'center'
    }

})

export default eSevaBooking