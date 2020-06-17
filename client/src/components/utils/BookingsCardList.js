import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal, TouchableHighlight } from 'react-native'
import FieldButton from '../Reusable_Component/FieldButton';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomModal from "../Reusable_Component/CustomModal";

const BookingsCardList = ({ data, onSelectBooking, status, userType }) => {

    const [modalVisible, setModalVisible] = React.useState(false);

    return (

        <View style={styles.outerBoxVendor}>
            <TouchableOpacity activeOpacity={.9} onPress={() => onSelectBooking(data.id)}>
                <View style={styles.box}>
                    <View style={styles.values}>
                        <Text style={styles.dataServiceText}>{data.name}</Text>

                    </View>
                    <View style={styles.arrow}>
                        <Icon name="ios-arrow-forward" size={20}
                            backgroundColor="transparent" color="#fff"
                        ></Icon >
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.detailsBox}>
                <View style={styles.values}>
                    <Text style={styles.dataText}>Date - {data.date} ({data.time})</Text>
                    <Text style={styles.dataText}>Area - {data.area}</Text>
                    <Text style={styles.dataText}>Type - {data.type}</Text>
                </View>
            </View>
            {
                (userType === "purohit" || userType === "cook") && (status === "pending") ?

                    <View style={styles.accept}>
                        <View style={styles.buttonView}>
                            <View style={styles.button}>
                                <FieldButton buttonTouch={styles.buttonTouchDetails}
                                    buttonTouchText={styles.buttonTextDetails} name='Details'
                                    onPress={() => onSelectBooking(data.id)}
                                ></FieldButton>
                            </View>
                            <View style={styles.button}>
                                <FieldButton buttonTouch={styles.buttonTouch} buttonTouchText={styles.buttonText}
                                    name='Accept'
                                    onPress={() => setModalVisible(true)}
                                ></FieldButton>
                            </View>
                        </View>

                        <CustomModal visibility={modalVisible}
                            modalText={"Are you sure want to confirm this booking"}
                            closeIconPress={() => {
                                setModalVisible(false);
                            }}
                            cancelButtonPress={() => {
                                setModalVisible(false);
                            }}
                            submitButtonPress={() => {
                                setModalVisible(false);
                            }}
                        ></CustomModal>
                    </View>
                    
                    : null
            }



        </View >
    )
}

const styles = StyleSheet.create({
    outerBoxVendor: {
        backgroundColor: 'white',
        margin: 10,
        marginBottom: 0,
        borderWidth: 0.5,
        borderColor: "darkgrey",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.25,
        shadowRadius: 25.84,
        elevation: 15
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 0,
        marginTop: 0.5,
        padding: 10,
        fontFamily: 'OpenSans-Regular',
        borderBottomWidth: 1,
        borderBottomColor: '#D63031',
        backgroundColor: "#D63031",
    },
    detailsBox: {
        padding: 10,
        fontFamily: 'OpenSans-Regular',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },
    accept: {
        marginTop: 0
    },
    values: {
        width: '90%'
    },
    arrow: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        width: '10%'
    },
    dataServiceText: {
        fontSize: 17,
        fontFamily: 'OpenSans-Bold',
        color: 'white'
    },
    dataText: {
        fontSize: 15,
        fontFamily: 'OpenSans-Regular',

    },
    button: {
        padding: 10,
        textAlign: "center",
        width: "40%",
        alignSelf: "center",

    },
    buttonView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonTouchDetails: {
        backgroundColor: 'lightgrey',
        borderRadius: 5,
    },
    buttonTouch: {
        backgroundColor: 'lightgrey',
        borderRadius: 5,

    },
    buttonText: {
        fontFamily: 'OpenSans-Bold',
        color: 'black'
    },
    buttonTextDetails: {
        fontFamily: 'OpenSans-Bold',
        color: 'black'
    },
    infoView: {

        alignSelf: 'center',
        padding: 5,
        width: '20%',
    },
    mdlCenteredView: {
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
    mdlCloseIconStyle: {
        width: '100%',
        alignSelf: 'flex-end',
        backgroundColor: '#D63031',
        color: '#fff',

    },
    mdlIconCircle: {
        paddingRight: 10
    },
    mdlText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
        paddingLeft: 5,
        marginBottom: 15,
        color: '#fff'
    },
    mdlbtnText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
        color: 'red'
    },
    mdlbtnOuter: {
        backgroundColor: "#fff",

    },

    mdlButtonView: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    mdlButton: {
        width: '30%',
        padding: 5
    },

})

export default BookingsCardList
