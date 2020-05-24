import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight, Modal, Alert } from 'react-native'
import Card from '../Reusable_Component/Card/Card'
import CardSection from '../Reusable_Component/Card/CardSection'
import InputCheckbox from '../Reusable_Component/InputCheckbox';
import TextFieldGroup from '../Reusable_Component/TextFieldGroup';
import Icon from 'react-native-vector-icons/Ionicons';

const ServicesCardCookList = ({ data, onSelectCookService }) => {
    const [checked, unchecked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    //const checkedCount = useState(0);

    const checkBoxSelect = (selectedItemId, selectedItemName) => {
        unchecked(!checked);
        onSelectCookService(selectedItemId, selectedItemName, !checked)
    }
    return (


        <View>
            <View style={styles.outerView}>
                <View style={styles.checkBoxView}>
                    <InputCheckbox
                        checkValue={checked}
                        //onchange={() => unchecked(!checked)}
                        onchange={() => checkBoxSelect(data.serviceId, data.serviceName)}
                    ></InputCheckbox>
                </View>
                <View style={styles.serviceNameView}>
                    <Text style={styles.serviceName}>{data.serviceName}</Text>
                </View>
                <View style={styles.servicePriceView}>
                    <Text style={styles.servicePrice}>Rs. {data.servicePrice}</Text>
                </View>
                <View style={styles.infoView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            //Alert.alert("Close the terms and conditions.");
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TouchableHighlight
                                    style={{ ...styles.closeIconStyle, backgroundColor: "#D63031" }}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Icon style={styles.iconCircle} name="ios-close-circle" size={30}
                                        color="#fff" backgroundColor="#D63031"
                                    ></Icon>
                                </TouchableHighlight>
                                <Text style={styles.serviceDesc}>
                                    {data.serviceDescription}
                                </Text>
                                
                            </View>
                        </View>
                    </Modal>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                            setModalVisible(true);
                        }}
                        underlayColor="#fff">

                        <Icon style={styles.iconInfo} name="ios-information-circle" size={20}
                            color="#D63031"
                        ></Icon>
                    </TouchableHighlight>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    outerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        flex: 1,
    },
    checkBoxView: {
        height: 35,
        alignSelf: 'center',
        justifyContent: 'center',
        width: '10%',
    },
    serviceNameView: {
        height: 35,
        alignSelf: 'center',
        width: '50%',
        padding: 5
    },
    servicePriceView: {
        height: 35,
        alignSelf: 'center',
        padding: 5,
        width: '20%',
    },
    infoView: {
        height: 35,
        alignSelf: 'center',
        padding: 5,
        width: '20%',
    },
    cardContainer: {
        padding: 0,
        margin: 0,
        borderBottomWidth: 0.8,
        borderBottomColor: '#D63031'
    },
    imageStyle: {
        height: 30,
        width: 30
    },
    serviceName: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 15,
        paddingLeft: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,

    },
    modalView: {
        margin: 25,
        backgroundColor: "#D63031",
        borderRadius: 5,
        paddingLeft: 20,
        paddingBottom: 10,
        paddingTop: 5,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.25,
        shadowRadius: 25.84,
        elevation: 15
    },
    closeIconStyle: {
        width: '100%',
        alignSelf: 'flex-end',
        backgroundColor: '#D63031',
        color: '#fff',

    },
    iconCircle:{
        paddingRight:10
    },
    closeIconText: {
        fontSize: 18,
        backgroundColor: '#D63031',
        color: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
        padding: 5,
        borderRadius: 15,
        width: 30,
        textAlign: 'center'
    },
    closeTextStyle: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
        padding: 0,
        color: '#fff',
        borderRadius: 0,
        backgroundColor: '#D63031'

    },
    serviceDesc: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
        paddingLeft: 5,
        marginBottom: 15,
        color: '#fff'
    },
    servicePrice: {
        fontFamily: 'OpenSans-Regular',

        alignSelf: 'center',
        fontSize: 15,
        paddingLeft: 5
    },
    iconInfo: {
        alignSelf: 'center',
        paddingLeft: 20
    }

})

export default ServicesCardCookList
