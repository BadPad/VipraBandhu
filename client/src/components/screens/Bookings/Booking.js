import React from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Ionicons';
import TextFieldGroup from '../../Reusable_Component/TextFieldGroup';
import ModalView from '../../Reusable_Component/ModalView';
import CustomModal from "../../Reusable_Component/CustomModal";
import moment from "moment";
import { cancelCustomerBooking, purohitBookingAcceptance } from '../../../redux/actions/myBookingActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { App_Color, Font_Name_Regular, Font_Name_Bold } from '../../Reusable_Component/ConstantValues';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


//const { width, height } = Dimensions.get('window');

const Booking = ({ navigation, route, cancelCustomerBooking, purohitBookingAcceptance }) => {

    const userType = route.params.userType;
    const selectedData = route.params.rowData;


    //If there are more than one bookings, get first booking
    const data = selectedData.bookings[0];

    //Calculate Service Date and Time
    let serviceDate = "";
    let serviceDateCalc = "";
    let serviceTime = "";
    let bookingDate = "";

    if (data.serviceDate != null) {
        var date = new Date(data.serviceDate);
        serviceDate = moment(date).format("DD-MMM-YYYY");
        serviceDateCalc = moment(date).format("YYYY-MM-DD");
        serviceTime = moment(date).format("hh:mm A");
    }
    if (data.bookingDate != null) {
        var date = new Date(data.bookingDate);
        bookingDate = moment(date).format("DD-MMM-YYYY");
    }

    const serviceAddress = data.location;
    const bookingStatus = data.bookingStatus;
    const bookingNumber = data.bookingNumber;
    const serviceType = data.serviceType;

    //const displayService = route.params.rowData;


    const [modalCustomerVisible, setModalCustomerVisible] = React.useState(false);
    const [modalVendorVisible, setModalVendorVisible] = React.useState(false);
    const [modalAddressVisible, setModalAddressVisible] = React.useState(false);

    const [modalTextCustomer, setModalTextCustomer] = React.useState("");
    const [modalTextVendor, setModalTextVendor] = React.useState("");

    const [txtAddress, setTxtAddress] = React.useState(serviceAddress);

    //Set Navigation Options
    navigation.setOptions({ title: serviceDate })


    //Customer booking cancellation (Modal View)
    const cancelCustomerBookingBtn = () => {

        const dtServiceDate = serviceDateCalc + " " + serviceTime
        const dtServiceDateMoment = moment(dtServiceDate, "YYYY-MM-DD HH:mm")

        let currentDate = new Date();
        let dtCurrentDate = moment(currentDate, "YYYY-MM-DD HH:mm")

        const dateDiff = dtServiceDateMoment.diff(dtCurrentDate, 'hours');
        console.warn(dateDiff)

        if ((dateDiff > 0) && (dateDiff < 25)) {
            setModalTextCustomer('By cancelling the booking within 24 hours of the service time, you will not be receiving any refund. Click "Yes" to continue and "No" to go back')
            setModalCustomerVisible(true);
        }

        else if ((dateDiff > 24) && (dateDiff < 49)) {
            setModalTextCustomer('By cancelling the booking between 24-48 hours of the service time, you will be receiving 50% of the partial amount as refund. Click "Yes" to continue and "No" to go back')
            setModalCustomerVisible(true);
        }

        else if ((dateDiff > 48) && (dateDiff < 73)) {
            setModalTextCustomer('By cancelling the booking between 48-72 hours of the service time, you will be receiving 75% of the partial amount as refund. Click "Yes" to continue and "No" to go back')
            setModalCustomerVisible(true);
        }

        else {
            setModalTextCustomer('By cancelling the booking within 72 hours of the service time, you will be receiving 100% refund amount. Click "Yes" to continue and "No" to go back')
            setModalCustomerVisible(true);
        }
    }

    //Customer booking cancellation
    const customerCancelConfirmed = () => {
        const data = {
            "bookingNumber": bookingNumber
        }
        cancelCustomerBooking(data, navigation)
    }

    //Vendor booking Acceptance (Modal View)
    const acceptBookingBtn = () => {
        setModalTextVendor('You are about to accept this booking. Do you want to confirm this booking ?')
        setModalVendorVisible(true);
    }

    //Vendor booking Acceptance
    const acceptBookingConfirmed = () => {
        const bookingIdArray = []
        bookingIdArray.push(parseInt(bookingId))

        const data = {
            "bookingID": bookingIdArray
        }

        purohitBookingAcceptance(data, navigation)
    }

    //Vendor booking Acceptance (Modal View)
    const changeAddressBtn = () => {
        setModalAddressVisible(true);
    }

    const renderData = ({ item }) => {
        let serviceDate;
        let serviceTime;

        if (item.serviceDate != null) {
            var date = new Date(item.serviceDate);
            serviceDate = moment(date).format("DD-MMM-YYYY");
            serviceTime = moment(date).format("hh:mm A");
        }

        return (
            <>
                {
                    (serviceType === "purohit") ?
                        <View style={styles.innerView}>
                            <View style={styles.vendorBox}>
                                <View>
                                    <View style={{ backgroundColor: '#ddd3ee' }}>
                                        <Text style={styles.bookingDetailsServiceName}>{item.serviceName}</Text>
                                    </View>
                                    <Grid>

                                        <Row>
                                            <Col style={styles.colHeader}>
                                                <Text style={styles.bookingDetailsHeader}>Time:</Text>
                                            </Col>
                                            <Col style={styles.colDetails}>
                                                <Text style={styles.bookingDetails}>{serviceTime}</Text>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={styles.colHeader}>
                                                <Text style={styles.bookingDetailsHeader}>Contract Type:</Text>
                                            </Col>
                                            <Col style={styles.colDetails}>
                                                <Text style={styles.bookingDetails}>{item.contractType}</Text>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={styles.colHeader}>
                                                <Text style={styles.bookingDetailsHeader}>Amount Paid:</Text>
                                            </Col>
                                            <Col style={styles.colDetails}>
                                                <Text style={styles.bookingDetails}>{item.amountPaid}</Text>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={styles.colHeader}>
                                                <Text style={styles.bookingDetailsHeader}>Balance Amount:</Text>
                                            </Col>
                                            <Col style={styles.colDetails}>
                                                <Text style={styles.bookingDetails}>{item.amountPaid}</Text>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </View>
                            </View>
                        </View>
                        : (serviceType === "cook") ?

                            <View style={styles.innerView}>
                                <View style={styles.vendorBox}>
                                    
                                    <View>
                                        <View style={{ backgroundColor: '#ddd3ee' }}>
                                            <Text style={styles.bookingDetailsServiceName}>{item.serviceName}</Text>
                                        </View>
                                        <Grid>
                                            <Row>
                                                <Col style={styles.colHeader}>
                                                    <Text style={styles.bookingDetailsHeader}>Time:</Text>
                                                </Col>
                                                <Col style={styles.colDetails}>
                                                    <Text style={styles.bookingDetails}>{serviceTime}</Text>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col style={styles.colHeader}>
                                                    <Text style={styles.bookingDetailsHeader}>Contract Type:</Text>
                                                </Col>
                                                <Col style={styles.colDetails}>
                                                    <Text style={styles.bookingDetails}>{item.contractType}</Text>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col style={styles.colHeader}>
                                                    <Text style={styles.bookingDetailsHeader}>Amount Paid:</Text>
                                                </Col>
                                                <Col style={styles.colDetails}>
                                                    <Text style={styles.bookingDetails}>{item.amountPaid}</Text>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col style={styles.colHeader}>
                                                    <Text style={styles.bookingDetailsHeader}>Balance Amount:</Text>
                                                </Col>
                                                <Col style={styles.colDetails}>
                                                    <Text style={styles.bookingDetails}>{item.amountPaid}</Text>
                                                </Col>
                                            </Row>
                                            
                                        </Grid>
                                    </View>
                                </View>
                            </View>
                            : null}
            </>
        );
    }


    return (
        <View style={styles.topView}>
            <View style={{ flex: 0.9, margin: 5 }}>
                <ScrollView style={{ height: '90%', flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
                    <View >
                        <Text style={styles.vendorHeader}>Booking Details</Text>
                    </View>
                    <Grid>
                        <Row>
                            <Col style={styles.colHeader}>
                                <Text style={styles.bookingDetailsHeader}>Booking Date:</Text>
                            </Col>
                            <Col style={styles.colDetails}>
                                <Text style={styles.bookingDetails}>{bookingDate}</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={styles.colHeader}>
                                <Text style={styles.bookingDetailsHeader}>Service Date:</Text>
                            </Col>
                            <Col style={styles.colDetails}>
                                <Text style={styles.bookingDetails}>{serviceDate}</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={styles.colHeader}>
                                <Text style={styles.bookingDetailsHeader}>Address:</Text>
                            </Col>
                            <Col style={styles.colDetails}>
                                <Text style={styles.bookingDetails}>{serviceAddress}</Text>
                            </Col>
                        </Row>
                    </Grid>
                    <FlatList
                        //keyExtractor={item => item.bookingID.toString()}
                        data={selectedData.bookings}
                        renderItem={renderData}
                    />
                </ScrollView>
            </View>
            <View style={styles.bottomView}>
                <TouchableOpacity style={styles.bottomBoxButtons} activeOpacity={.5} onPress={() => changeAddressBtn()}>
                    <Text style={styles.btnDetailsText}>Edit Details {" "}
                        <Icon style={{ paddingRight: 5 }} name="ios-create" size={20}
                            backgroundColor="transparent" color="#fff"
                        ></Icon >
                    </Text>

                    <ModalView
                        isVisible={modalAddressVisible}
                        close={() => setModalAddressVisible(!modalAddressVisible)}
                        animationIn="fadeInDownBig"
                        animationOut='fadeOutDownBig'
                        animationInTiming={0}
                        animationOutTiming={0}
                        children={
                            <View>
                                <View>
                                    <Text>
                                        New Address:
                                </Text>
                                    <TextInput
                                        style={styles.inputBox}
                                        maxLength={250}
                                        value={txtAddress}
                                        onChangeText={(text) => setTxtAddress(text)}

                                        multiline={true}
                                    />
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.bottomBoxButtonsRight1} activeOpacity={.5} >
                                        <Text style={styles.btnDetailsText1}>Update Details {" "}
                                            <Icon style={{ paddingRight: 5 }} name="md-close-circle" size={20}
                                                backgroundColor="transparent" color="#fff"
                                            ></Icon >
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }

                    />

                </TouchableOpacity>
                {
                    (bookingStatus === "pending") && (userType === "customer") ?
                        <>
                            <TouchableOpacity style={styles.bottomBoxButtonsRight} activeOpacity={.5} onPress={() => cancelCustomerBookingBtn()}>
                                <Text style={styles.btnDetailsText}>Cancel Booking {" "}
                                    <Icon style={{ paddingRight: 5 }} name="md-close-circle" size={20}
                                        backgroundColor="transparent" color="#fff"
                                    ></Icon >
                                </Text>
                                <CustomModal visibility={modalCustomerVisible}
                                    modalText={modalTextCustomer}
                                    closeIconPress={() => {
                                        setModalCustomerVisible(false);
                                    }}
                                    cancelButtonPress={() => {
                                        setModalCustomerVisible(false);
                                    }}
                                    submitButtonPress={() => {
                                        setModalCustomerVisible(false);
                                        customerCancelConfirmed()
                                    }}
                                ></CustomModal>
                            </TouchableOpacity>

                        </>


                        : (bookingStatus === "pending") && (userType === "purohit" || userType === "cook") ?

                            <TouchableOpacity style={styles.bottomBoxButtonsRight} activeOpacity={.5} onPress={() => acceptBookingBtn()}>
                                <Text style={styles.btnDetailsText}>Accept Booking {" "}
                                    <Icon style={{ paddingRight: 5 }} name="md-checkmark-circle" size={20}
                                        backgroundColor="transparent" color="#fff"
                                    ></Icon >
                                </Text>
                                <CustomModal visibility={modalVendorVisible}
                                    modalText={modalTextVendor}
                                    closeIconPress={() => {
                                        setModalVendorVisible(false);
                                    }}
                                    cancelButtonPress={() => {
                                        setModalVendorVisible(false);
                                    }}
                                    submitButtonPress={() => {
                                        acceptBookingConfirmed();
                                    }}
                                ></CustomModal>
                            </TouchableOpacity>


                            : bookingStatus === "accepted" ?
                                <TouchableOpacity style={styles.bottomBoxButtonsRight} activeOpacity={.5} onPress={() => cancelBookingBtn()}>
                                    <Text style={styles.btnDetailsText}>Cancel Booking {" "}
                                        <Icon style={{ paddingRight: 5 }} name="md-checkmark-circle" size={20}
                                            backgroundColor="transparent" color="#fff"
                                        ></Icon >
                                    </Text>
                                    <CustomModal visibility={modalVendorVisible}
                                        modalText={"Are you sure want to cancel this booking"}
                                        closeIconPress={() => {
                                            setModalVendorVisible(false);
                                        }}
                                        cancelButtonPress={() => {
                                            setModalVendorVisible(false);
                                        }}
                                        submitButtonPress={() => {
                                            setModalVendorVisible(false);
                                        }}
                                    >
                                    </CustomModal>
                                </TouchableOpacity>

                                : null
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    innerView: {
        margin: 5
    },
    vendorBox: {
        borderWidth: 1,
        borderColor: "lightgrey",
    },
    vendorHeader: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: Font_Name_Bold,
        paddingBottom: 10
    },
    colHeader: {
        width: '40%',
    },
    colDetails: {
        width: '60%',
    },
    colDetailsAddress: {
        width: '55%',
    },
    ColDetailsIcon: {
        width: '15%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bookingDetailsHeader: {
        fontFamily: Font_Name_Bold,
        fontSize: hp(2.1),
        padding: 5,
    },
    bookingDetails: {
        fontFamily: Font_Name_Regular,
        fontSize: hp(2.1),
        padding: 5,
    },
    bookingDetailsServiceName: {
        fontFamily: Font_Name_Bold,
        fontSize: hp(2.3),
        padding: 5,
        textAlign: 'center'
    },
    accept: {
        marginTop: 0
    },
    buttonTouch: {
        backgroundColor: '#009d00',
        borderRadius: 15,
    },
    infoView: {
        height: 35,
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
        fontFamily: Font_Name_Bold,
        fontSize: 16,
        paddingLeft: 5,
        marginBottom: 15,
        color: '#fff'
    },
    mdlbtnText: {
        fontFamily: Font_Name_Bold,
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
    button: {
        width: '100%',
        padding: 0
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    topView: {
        backgroundColor: "white",
        flex: 1,
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 0,
        fontFamily: Font_Name_Regular,
        backgroundColor: App_Color,

    },
    bottomBoxButtons: {
        width: '50%',
        alignItems: 'center',
        padding: 5
    },
    bottomBoxButtonsRight: {
        width: '50%',
        alignItems: 'center',
        borderLeftWidth: 0.7,
        borderLeftColor: '#fff',
        padding: 5
    },

    btnDetailsText: {
        fontFamily: Font_Name_Bold,
        fontSize: 16,
        color: '#fff'
    },
    inputBox: {
        width: "100%",
        borderRadius: 2,
        padding: 5,
        paddingLeft: 10,
        fontSize: 16,
        marginVertical: 2,
        borderWidth: 0.5,
        borderColor: 'rgba(68,68,68,1)',
        color: 'rgba(60, 59, 55, .9)',
        height: 80,
        textAlignVertical: 'top'
    },
})

//export default Booking;



Booking.propTypes = {
    cancelCustomerBooking: PropTypes.func.isRequired,
    purohitBookingAcceptance: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = { cancelCustomerBooking, purohitBookingAcceptance }
//const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Booking)