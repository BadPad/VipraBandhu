import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Modal, TouchableHighlight, Alert } from 'react-native';
import Card from '../../Reusable_Component/Card/Card';
import CardSection from '../../Reusable_Component/Card/CardSection';
import Heading from '../../Reusable_Component/Heading';
import FieldButton from '../../Reusable_Component/FieldButton';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Ionicons';
import staticData from "../../Reusable_Component/StaticData/BookingsStaticData";
import CustomModal from "../../Reusable_Component/CustomModal";
import moment from "moment";
import { cancelCustomerBooking } from '../../../redux/actions/myBookingActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


//const { width, height } = Dimensions.get('window');

const Booking = ({ navigation, route, cancelCustomerBooking }) => {

    const [modalCustomerVisible, setModalCustomerVisible] = React.useState(false);
    const [modalVisible1, setModalVisible1] = React.useState(false);

    const [modalTextCustomer, setModalTextCustomer] = React.useState("");

    const displayService = route.params.rowData;
    const userType = route.params.userType;
    const bookingStatus = displayService.bookingStatus;
    const bookingId = displayService.bookingID;
    const serviceDateTime = displayService.serviceDate.toString();
    const serviceDate = serviceDateTime.split('T')[0];
    const serviceTime = serviceDateTime.split('T')[1].split(':')[0] + ":" + serviceDateTime.split('T')[1].split(':')[1];


    //console.warn(serviceDate);
    navigation.setOptions({ title: serviceDate })

    const cancelCustomerBookingBtn = () => {

        const dtServiceDate = serviceDate + " " + serviceTime
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

    const customerCancelClick = () => {
        const data = {
            "bookingID": bookingId
        }
        cancelCustomerBooking(data, navigation)
    }

    return (
        <View style={styles.topView}>
            <ScrollView>
                <View style={styles.innerView}>
                    <View style={styles.vendorBox}>
                        <View >
                            <Text style={styles.vendorHeader}>Booking Details</Text>
                        </View>
                        <View>
                            <Grid>
                                <Row >
                                    <Col style={styles.colHeader}>
                                        <Text style={styles.bookingDetailsHeader}>Name:</Text>
                                    </Col>
                                    <Col style={styles.colDetails}>
                                        <Text style={styles.bookingDetails}>{displayService.serviceName}</Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={styles.colHeader}>
                                        <Text style={styles.bookingDetailsHeader}>Date:</Text>
                                    </Col>
                                    <Col style={styles.colDetails}>
                                        <Text style={styles.bookingDetails}>{serviceDate}</Text>
                                    </Col>
                                </Row>
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
                                        <Text style={styles.bookingDetailsHeader}>Address:</Text>
                                    </Col>
                                    <Col style={styles.colDetails}>
                                        <Text style={styles.bookingDetails}>{displayService.location}</Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={styles.colHeader}>
                                        <Text style={styles.bookingDetailsHeader}>Type:</Text>
                                    </Col>
                                    <Col style={styles.colDetails}>
                                        <Text style={styles.bookingDetails}>{displayService.contractType}</Text>
                                    </Col>
                                </Row>

                            </Grid>
                        </View>
                    </View>

                    {
                        (bookingStatus === "pending") && (userType === "customer") ?
                            <View style={styles.accept}>
                                <View style={styles.buttonView}>
                                    <View style={styles.button}>

                                        <FieldButton
                                            buttonTouch={styles.buttonTouch}
                                            name='Cancel Booking'
                                            onPress={() => {
                                                cancelCustomerBookingBtn();
                                            }}
                                        ></FieldButton>
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
                                                customerCancelClick()
                                            }}
                                        ></CustomModal>

                                    </View>
                                </View>
                            </View>

                            : (bookingStatus === "pending") && (userType === "purohit" || userType === "cook") ?
                                <View style={styles.accept}>
                                    <View style={styles.buttonView}>
                                        <View style={styles.button}>

                                            <FieldButton
                                                buttonTouch={styles.buttonTouch}
                                                name='Accept Booking'
                                                onPress={() => {
                                                    setModalVisible(true);
                                                }}
                                            ></FieldButton>
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
                                    </View>
                                </View>

                                : bookingStatus === "accepted" ?
                                    <View style={styles.accept}>
                                        <View style={styles.buttonView}>
                                            <View style={styles.button}>
                                                <FieldButton
                                                    buttonTouch={styles.buttonTouch}
                                                    name='Cancel Booking'
                                                    onPress={() => {
                                                        cancelBookingBtn();
                                                    }}
                                                ></FieldButton>
                                                <CustomModal visibility={modalVisible1}
                                                    modalText={"Are you sure want to cancel this booking"}
                                                    closeIconPress={() => {
                                                        setModalVisible1(false);
                                                    }}
                                                    cancelButtonPress={() => {
                                                        setModalVisible1(false);
                                                    }}
                                                    submitButtonPress={() => {
                                                        setModalVisible1(false);
                                                    }}
                                                >
                                                </CustomModal>
                                            </View>
                                        </View>
                                    </View>
                                    : null
                    }


                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    vendorBox: {
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: "lightgrey",
    },
    vendorHeader: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'OpenSans-Bold',
        paddingBottom: 10
    },
    colHeader: {
        width: '30%',
    },
    colDetails: {
        width: '70%',
    },
    bookingDetailsHeader: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
        padding: 5,
    },
    bookingDetails: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
        padding: 5,
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
    button: {
        width: '50%',
        padding: 5
    },
    buttonView: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    topView: {
        backgroundColor: "white"
    },
    innerView: {
        borderWidth: 0.5,
        borderColor: "lightgrey",
        backgroundColor: "white",
        margin: 5,
    },
    header: {
        marginLeft: 100,
        fontSize: 18,
        color: "#696969",
        fontWeight: "600"
    },
    date: {
        marginLeft: 100,
        fontSize: 15,
        color: "#696969",
        fontWeight: "400"
    },
    sathya: {
        width: 100,
        height: 90,

        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'stretch',
        position: 'absolute',
        marginTop: 30
    },
    back: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 20
    },
    orderPage: {
        marginTop: 10,
        borderBottomWidth: 0.4,
        borderBottomColor: 'black',
        width: 400
    },
    pooja: {
        margin: 10,
        width: 340,
        height: 200
    },
    head: {
        marginTop: 12,
        marginLeft: 10,
        fontSize: 18,
        color: "#000",
        fontWeight: "600"
    },
    dates: {
        marginLeft: 10,
        fontSize: 15,
        color: "#696969",
        fontWeight: "400"
    },
    priest: {
        marginLeft: 10,
        color: "#696969",
        fontSize: 15
    },
    billDetails: {
        marginTop: 10
    },
    name: {
        marginLeft: 10,
        color: "#696969",
        fontSize: 20,
        fontWeight: "600"
    },
    teju: {
        width: 60,
        height: 60,
        borderRadius: 63,
        borderWidth: 1,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute'
    },
    fare: {
        marginTop: 15,
        marginLeft: 10,
        fontSize: 15,
        color: "#696969",
        fontWeight: "400"
    },
    fares: {
        marginTop: 15,
        marginLeft: 10,
        fontSize: 15,
        color: "#000",
        fontWeight: "400"
    },
    tax: {
        fontSize: 10,
        marginLeft: 10,
        color: "#696969"
    },
    line: {
        margin: 10,
        borderBottomWidth: 0.4,
        borderBottomColor: 'black'
    },
    dots: {
        marginTop: 20,
        borderStyle: 'dotted',
        borderBottomWidth: 0.4,
        borderBottomColor: 'black'
    },

})

//export default Booking;



Booking.propTypes = {    
    cancelCustomerBooking: PropTypes.func.isRequired,    
}

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = { cancelCustomerBooking }
//const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Booking)