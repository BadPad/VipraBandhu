import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, TouchableHighlight } from 'react-native'
import FieldButton from '../Reusable_Component/FieldButton';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomModal from "../Reusable_Component/CustomModal";

const BookingsCardList = ({ data, onSelectBooking, status, userType, isNotification }) => {

    const [modalVisible, setModalVisible] = React.useState(false);

    const bookingStatus = (data.bookingStatus === "pending") ? "Pending" : data.bookingStatus
    const serviceDateTime = data.serviceDate;

    return (
        <>

            {
                (data != null && isNotification === false) ?
                    <View style={styles.outerBoxVendor}>
                        <View style={styles.firstBox}>
                            <View style={styles.firstBoxView}>
                                <View style={styles.serviceNameView}>
                                    <Text style={styles.serviceNameText}>{data.serviceName}</Text>
                                </View>
                                <View style={styles.serviceDateView}>
                                    <View>
                                        <Text style={styles.serviceHeadersRegular}>Type:<Text style={styles.serviceValuesRegular}> {data.contractType}</Text></Text>
                                    </View>
                                    <View>
                                        <Text style={styles.serviceHeadersRegular}>Status:<Text style={styles.serviceValuesRegular}> {bookingStatus}</Text></Text>
                                    </View>

                                </View>
                            </View>

                        </View>
                        <View style={styles.secondBox}>
                            <View style={styles.secondBoxView}>
                                <View style={styles.secondBox1}>
                                    <Text style={styles.serviceHeaders}>Booking ID:</Text>
                                    <Text style={styles.serviceValues}>{data.bookingNumber}</Text>
                                </View>
                                <View style={styles.secondBox2}>
                                    <Text style={styles.serviceHeaders}>Service Date:</Text>
                                    <Text style={styles.serviceValues}>{(serviceDateTime != null) ? serviceDateTime.split('T')[0] : serviceDateTime}</Text>
                                </View>
                                <View style={styles.secondBox3}>
                                    <Text style={styles.serviceHeaders}>Service Time:</Text>
                                    <Text style={styles.serviceValues}>{(serviceDateTime != null) ? serviceDateTime.split('T')[1].split(':')[0] + ":" + serviceDateTime.split('T')[1].split(':')[1] : serviceDateTime}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.thirdBox}>
                            <View style={styles.thirdBoxView}>
                                <Icon name="ios-pin" size={20}
                                    backgroundColor="transparent" color="#D63031"
                                ></Icon >
                                <Text style={styles.serviceValuesRegular}>
                                    {""} {data.location}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.fourthBox}>
                            <View style={styles.fourthBoxView}>
                                <TouchableOpacity style={(userType === "customer") ? styles.boxDetailsFullWidth : styles.boxDetails} activeOpacity={.9} onPress={() => onSelectBooking(data, userType)}>
                                    <Text style={styles.btnDetailsText}>Details {""}
                                        <Icon style={{ paddingRight: 5 }} name="ios-arrow-dropright" size={20}
                                            backgroundColor="transparent" color="maroon"
                                        ></Icon >
                                    </Text>
                                </TouchableOpacity>
                                {
                                    (userType === "purohit" || userType === "cook") && (status === "pending") ?
                                        <TouchableOpacity style={styles.boxApprove} activeOpacity={.9} onPress={() => onSelectBooking(data, userType)}>
                                            <Text style={styles.btnApproveText}>Accept {""}
                                                <Icon name="ios-checkmark-circle" size={20}
                                                    backgroundColor="transparent" color="green"
                                                ></Icon >
                                            </Text>
                                        </TouchableOpacity>

                                        : null
                                }


                            </View>
                        </View>
                    </View>
                    : null
            }

            {
                (data != null && isNotification === true) ?
                    <View style={{marginTop:10}}>
                        <View style={styles.outerBoxVendor2}>
                            <TouchableOpacity activeOpacity={.9} onPress={() => onSelectBooking(data, userType)}>
                                <View style={styles.firstBox}>
                                    <View style={styles.firstBoxView}>
                                        <View style={styles.serviceNameView}>
                                            <Text style={styles.serviceNameText}>{data.serviceName}</Text>
                                        </View>
                                        <View style={styles.serviceDateView}>
                                            <View>
                                                <Text style={styles.serviceHeadersRegular}>Service Date:<Text style={styles.serviceValuesRegular}> {(serviceDateTime != null) ? serviceDateTime.split('T')[0] : serviceDateTime}</Text></Text>
                                            </View>
                                            <View>
                                                <Text style={styles.serviceHeadersRegular}>Status:<Text style={styles.serviceValuesRegular}> {bookingStatus}</Text></Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    : null
            }

        </>

    )
}

const styles = StyleSheet.create({
    outerBoxVendor: {
        backgroundColor: 'white',
        margin: 10,
        marginBottom: 0,
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.25,
        shadowRadius: 25.84,
        elevation: 15
    },
    outerBoxVendor2: {
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight:10,
        marginBottom: 0,
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.25,
        shadowRadius: 25.84,
        elevation: 15
    },
    firstBox: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },
    secondBox: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },
    thirdBox: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        paddingLeft: 5
    },
    fourthBox: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },
    serviceNameView: {
        paddingBottom: 3
    },
    serviceNameText: {
        fontSize: 16,
        fontFamily: 'OpenSans-Bold',
        color: 'black'
    },
    serviceDateView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 0,
        fontFamily: 'OpenSans-Regular',

    },
    serviceHeaders: {
        fontFamily: 'OpenSans-Bold',
        color: 'grey'
    },
    serviceHeadersRegular: {
        fontFamily: 'OpenSans-Regular',
        color: 'grey'
    },
    serviceValues: {
        fontFamily: 'OpenSans-Bold',
        color: 'black'
    },
    serviceValuesRegular: {
        fontFamily: 'OpenSans-Regular',
        color: 'black'
    },
    firstBoxView: {
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    secondBoxView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 0,
        fontFamily: 'OpenSans-Regular',

    },
    thirdBoxView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 0,
        fontFamily: 'OpenSans-Regular',
        padding: 5
    },
    fourthBoxView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 0,
        fontFamily: 'OpenSans-Regular',
        backgroundColor: '#f5f5f5',

    },
    secondBox1: {
        width: '33%',
        alignItems: 'center',
        padding: 5
    },
    secondBox2: {
        width: '34%',
        alignItems: 'center',
        borderLeftWidth: 0.7,
        borderRightWidth: 0.7,
        borderLeftColor: 'lightgrey',
        borderRightColor: 'lightgrey',
        padding: 5
    },
    secondBox3: {
        width: '33%',
        alignItems: 'center',
        padding: 5

    },

    boxDetails: {
        width: '50%',
        alignItems: 'center',
        padding: 5
    },
    boxDetailsFullWidth: {
        width: '100%',
        alignItems: 'center',
        padding: 5
    },
    boxApprove: {
        width: '50%',
        alignItems: 'center',
        borderLeftWidth: 0.7,
        borderLeftColor: 'grey',
        padding: 5
    },
    btnDetailsText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 17
    },
    btnApproveText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 17
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

    },
    detailsBox: {
        padding: 10,
        fontFamily: 'OpenSans-Regular',

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
        color: 'black'
    },
    dataText: {
        fontSize: 15,
        fontFamily: 'OpenSans-Regular',

    },
    button: {
        padding: 10,
        textAlign: "center",
        width: "60%",
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
        backgroundColor: '#D63031',
        borderRadius: 5,

    },
    buttonText: {
        fontFamily: 'OpenSans-Bold',
        color: '#fff'
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
