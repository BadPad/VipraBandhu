import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, TouchableHighlight } from 'react-native'
import FieldButton from '../Reusable_Component/FieldButton';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomModal from "../Reusable_Component/CustomModal";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { purohitBookingAcceptance, cookBookingAcceptance } from '../../redux/actions/myBookingActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from "moment";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { App_Color, Font_Name_Bold, Font_Name_Regular } from '../Reusable_Component/ConstantValues';

const BookingsCardList = ({ navigation, currentData, onSelectBooking, status, userType, isNotification, purohitBookingAcceptance, cookBookingAcceptance }) => {

    const [modalAcceptVisible, setModalAcceptVisible] = React.useState(false);
    const [modalTextAccept, setModalTextAccept] = React.useState("");

    //const bookingStatus = (data.bookingStatus === "pending") ? "Pending" : (data.bookingStatus === "active") ? "Active" : data.bookingStatus
    const bookingNumber = currentData.bookingNumber;
    const serviceCount = currentData.bookings.length;
    let serviceName = '';

    //Loop through all the bookings and get the booking name
    for (let i = 0; i < currentData.bookings.length; i++) {
        const newData = currentData.bookings[i];
        serviceName = serviceName + newData.serviceName + ", ";
    }

    serviceName = serviceName.replace(/,\s*$/, "");

    if(serviceName.length > 40)
    serviceName = serviceName.substring(0,40) + " ..."

    //If there are more than one bookings, get first booking
    const data = currentData.bookings[0];

    let bookingStatus = "";

    if (userType === "customer") {
        if (status === "pending") {
            bookingStatus = "Pending";
        }
        else if (status === "active") {
            bookingStatus = "Vendor Accepted";
        }
        else if (status === "cancelled") {
            bookingStatus = "Cancelled";
        }
        else if (status === "completed") {
            bookingStatus = "Service Completed";
        }
    }

    else if ((userType === "purohit") || (userType === "cook")) {
        if (status === "pending") {
            bookingStatus = "New Booking";
        }
        else if (status === "active") {
            bookingStatus = "Vendor Accepted";
        }
        else if (status === "cancelled") {
            bookingStatus = "Cancelled";
        }
        else if (status === "completed") {
            bookingStatus = "Service Completed";
        }
    }


    
    const serviceDateTime = data.serviceDate;
    const bookingDateTime = data.bookingDate;

    //Calculate Service Date and Time
    let serviceDate = "";
    let bookingDate = "";
    //let serviceTime = "";

    if (serviceDateTime != null) {
        var date = new Date(serviceDateTime);
        serviceDate = moment(date).format("DD-MMM-YYYY");
        //serviceTime = moment(date).format("hh:mm A");
    }
    if (bookingDateTime != null) {
        var date = new Date(bookingDateTime);
        bookingDate = moment(date).format("DD-MMM-YYYY");
        //serviceTime = moment(date).format("hh:mm A");
    }

    //Vendor booking Acceptance (Modal View)
    const acceptBookingBtn = () => {
        setModalTextAccept('You are about to accept this booking. Do you want to confirm this booking ?')
        setModalAcceptVisible(true);
    }

    //Vendor booking Acceptance
    const acceptBookingConfirmed = () => {
        const bookingNumberArray = []
        //bookingNumberArray.push(parseInt(bookingNumber))
        bookingNumberArray.push((bookingNumber))

        const data = {
            "bookingNumber": bookingNumber
        }

        if (userType === "purohit")
            purohitBookingAcceptance(data, navigation)
        else if (userType === "cook")
            cookBookingAcceptance(data, navigation)
    }

    return (
        <>

            {
                (data != null && isNotification === false) ?
                    <View style={styles.outerBoxVendor}>
                        <View style={styles.firstBox}>
                            <View style={styles.firstBoxView}>
                                <View style={styles.serviceNameView}>
                                    <Text style={styles.serviceNameText}>{serviceName}</Text>
                                </View>
                                <View style={styles.serviceDateView}>
                                    <View>
                                        <Text style={styles.serviceHeadersRegular}>Services:<Text style={styles.serviceValuesRegular}> {serviceCount}</Text></Text>
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
                                    <Text style={styles.serviceValues}>{"SS-"}{data.bookingNumber}</Text>
                                </View>
                                <View style={styles.secondBox2}>
                                    <Text style={styles.serviceHeaders}>Service Date:</Text>
                                    <Text style={styles.serviceValues}>{serviceDate}</Text>
                                </View>
                                <View style={styles.secondBox3}>
                                    <Text style={styles.serviceHeaders}>Booking Date:</Text>
                                    <Text style={styles.serviceValues}>{bookingDate}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.thirdBox}>
                            <View style={styles.thirdBoxView}>
                                <Icon name="ios-pin" size={20}
                                    backgroundColor="transparent" color={App_Color}
                                ></Icon >
                                <Text style={styles.serviceValuesRegular}>
                                    {""} {data.location}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.fourthBox}>
                            <View style={styles.fourthBoxView}>
                                <TouchableOpacity style={((userType === "customer") || (status === "active")) ? styles.boxDetailsFullWidth : styles.boxDetails} activeOpacity={.9} onPress={() => onSelectBooking(currentData, userType)}>
                                    <Text style={styles.btnDetailsText}>Details {""}
                                        <Icon style={{ paddingRight: 5 }} name="ios-arrow-dropright" size={20}
                                            backgroundColor="transparent" color="maroon"
                                        ></Icon >
                                    </Text>
                                </TouchableOpacity>
                                {
                                    ((userType === "purohit" || userType === "cook")) && (status === "pending") ?
                                        <TouchableOpacity style={styles.boxApprove} activeOpacity={.9}
                                            onPress={() => {
                                                acceptBookingBtn();
                                            }}>
                                            <Text style={styles.btnApproveText}>Accept {""}
                                                <Icon name="ios-checkmark-circle" size={20}
                                                    backgroundColor="transparent" color="green"
                                                ></Icon >
                                            </Text>
                                            <CustomModal visibility={modalAcceptVisible}
                                                modalText={modalTextAccept}
                                                closeIconPress={() => {
                                                    setModalAcceptVisible(false);
                                                }}
                                                cancelButtonPress={() => {
                                                    setModalAcceptVisible(false);
                                                }}
                                                submitButtonPress={() => {
                                                    setModalAcceptVisible(false);
                                                    acceptBookingConfirmed();
                                                }}
                                            ></CustomModal>
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
                    <View>
                        <View style={styles.outerBoxVendor2}>
                            <TouchableOpacity activeOpacity={.9} onPress={() => onSelectBooking(data, userType)}>
                                <View style={styles.firstBox}>
                                    <View style={styles.firstBoxView}>
                                        <Grid>
                                            <Row>
                                                <Col style={{ width: 40, justifyContent: "center" }}>
                                                    <Icon name="md-alarm" size={30}
                                                        backgroundColor="transparent" color={App_Color}
                                                    ></Icon >
                                                </Col>
                                                <Col >
                                                    <View style={styles.serviceNameView}>
                                                        <Text style={styles.serviceNameText}>{data.serviceName} {" ("} {serviceDate} {")"}</Text>
                                                    </View>
                                                    <View style={styles.serviceDateView}>
                                                        <View>
                                                            {
                                                                userType === "customer" ?
                                                                    <Text style={styles.notificationMessage}>Your booking has been confirmed. You will be notified once the booking is accepted by vendor.</Text>

                                                                    : userType === "purohit" || userType === "cook" ?
                                                                        <Text style={styles.notificationMessageVendor}>New booking available! Click here to view service details</Text>
                                                                        : null

                                                            }
                                                        </View>
                                                    </View>

                                                </Col>
                                            </Row>
                                        </Grid>

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
        margin: 0,

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
        fontSize: wp(3.6),
        fontFamily: Font_Name_Bold,
        color: 'black'
    },
    serviceDateView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 0,
        fontFamily: Font_Name_Regular,

    },
    serviceHeaders: {
        fontFamily: Font_Name_Bold,
        color: 'grey'
    },
    serviceHeadersRegular: {
        fontFamily: Font_Name_Regular,
        color: 'grey'
    },

    serviceValues: {
        fontFamily: Font_Name_Bold,
        color: 'black',

    },
    serviceValuesRegular: {
        fontFamily: Font_Name_Regular,
        color: 'black',
        fontSize: wp('3.6%')
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
        fontFamily: Font_Name_Regular,

    },
    thirdBoxView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 0,
        fontFamily: Font_Name_Regular,
        padding: 5
    },
    fourthBoxView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 0,
        fontFamily: Font_Name_Regular,
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
        fontFamily: Font_Name_Regular,
        fontSize: hp(2.4)
    },
    btnApproveText: {
        fontFamily: Font_Name_Regular,
        fontSize: hp(2.4)
    },
    notificationMessage: {
        fontFamily: Font_Name_Regular,
        color: 'grey',
        fontSize: hp(1.5)
    },
    notificationMessageVendor: {
        fontFamily: Font_Name_Regular,
        color: 'green',
        fontSize: hp(1.5)
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
        borderBottomColor: App_Color,

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
        backgroundColor: App_Color,
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
        backgroundColor: App_Color,
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
        backgroundColor: App_Color,
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

//export default BookingsCardList

BookingsCardList.propTypes = {
    purohitBookingAcceptance: PropTypes.func.isRequired,
    cookBookingAcceptance: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = { purohitBookingAcceptance, cookBookingAcceptance }

export default connect(mapStateToProps, mapDispatchToProps)(BookingsCardList)