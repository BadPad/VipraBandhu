import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Card from '../../Reusable_Component/Card/Card';
import CardSection from '../../Reusable_Component/Card/CardSection';
import Heading from '../../Reusable_Component/Heading';
import FieldButton from '../../Reusable_Component/FieldButton';
import staticData from "../../Reusable_Component/StaticData/BookingsStaticData";

import Iconback from 'react-native-vector-icons/AntDesign';

//const { width, height } = Dimensions.get('window');

const Booking = ({ navigation, route }) => {

    const serviceId = route.params.id;    

    const displayService = staticData.find(service => service.id === serviceId);

    navigation.setOptions({ title: displayService.date })

    return (
        <View style={styles.topView}>
            <ScrollView>
                <View style={styles.innerView}>


                    {/* <View>
                        <Heading containerStyle={styles.containerTitle} style={styles.serviceTitleStyle} name={displayService.name} />
                    </View> */}
                    {/* <TouchableOpacity onPress={goBack}>
                            <Text style={styles.back}> <Iconback style={styles.back} name="back" color="#000" /> Back</Text>
                        </TouchableOpacity> */}
                    <View style={styles.orderPage}>

                        <Text style={styles.head}>{displayService.name}</Text>
                        <Text style={styles.dates}>{displayService.date}</Text>
                        <Text style={styles.dates}>{displayService.time}</Text>
                        <Text></Text>
                    </View>
                    <View style={styles.orderPage}>
                        <Text style={styles.priest}>Priest:</Text>
                        <Text style={styles.name}>Manyutej Achar</Text>
                        <Image style={styles.teju} source={require('client/src/components/images/teju.jpg')} />
                        <Text></Text>

                    </View>
                    <View style={styles.billDetails}>
                        <Text style={styles.head}>Bill Details</Text>
                        <Text style={styles.fare}>Seva Fare                                                             800</Text>
                        
                        <Text style={styles.fares}>Total Bill                                                                800</Text>
                        <Text style={styles.tax}>Includes 3.35 Taxes</Text>
                    </View>
                    <View>
                        <Text style={styles.dots}></Text>
                        <Text style={styles.fares}> Payment</Text>
                        <Text style={styles.fare}>Cash                                                                     800</Text>
                    </View>
                    <View style={styles.buttonView}>
                        <View style={styles.button}>
                            <FieldButton name='Rebook' ></FieldButton>
                        </View>
                        <View style={styles.button}>
                            <FieldButton name='Feedback' ></FieldButton>
                        </View>
                        
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    topView: {
        backgroundColor:"white"
    },
    innerView:{
        borderWidth: 0.5,
        borderColor: "lightgrey",
        backgroundColor:"white",
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
    buttonView: {
        marginTop: 25,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    button:{
        width:'45%',
    }
})

export default Booking;
