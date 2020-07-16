import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity  } from 'react-native';

import Iconback from 'react-native-vector-icons/AntDesign';

import FieldButton from '../Reusable_Component/FieldButton';

const MyBookings = ({ navigation }) => {
    const [showView, setShowView] = useState(false)

    const showReview = () => {
        setShowView(true)
    }

    const goBack = () => {
        setShowView(false)
    }

    return (
        <>
        <ScrollView>
        {!showView ? ( 
        <View >
            <TouchableOpacity onPress={showReview}>
            <View style={styles.container}>
                <Text style={styles.header}>Sathyanarayana Pooja</Text>
                <Text style={styles.date}>24.03.2020</Text>
                <Image style={styles.sathya} source={require('../images/sathya.jpeg')} />
                <Text><Iconback style={styles.back} name="back" color="#000" /></Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.container} onPress={showReview}>
                <Text style={styles.header}>Pavamana Homa</Text>
                <Text style={styles.date}>12.02.2020</Text>
                <Image style={styles.sathya} source={require('../images/sathya.jpeg')} />
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.container} onPress={showReview}>
                <Text style={styles.header}>Aslesha Bali</Text>
                <Text style={styles.date}>01.12.2019</Text>
                <Image style={styles.sathya} source={require('../images/sathya.jpeg')} />
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.container} onPress={showReview}>
                <Text style={styles.header}>Durga Pooja</Text>
                <Text style={styles.date}>09.11.2019</Text>
                <Image style={styles.sathya} source={require('../images/sathya.jpeg')} />
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.container} onPress={showReview}>
                <Text style={styles.header}>Namakarna</Text>
                <Text style={styles.date}>01.10.2019</Text>
                <Image style={styles.sathya} source={require('../images/sathya.jpeg')} />
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.container} onPress={showReview}>
                <Text style={styles.header}>Gruhapravesha</Text>
                <Text style={styles.date}>01.02.2019</Text>
                <Image style={styles.sathya} source={require('../images/sathya.jpeg')} />
                
            </View>
            </TouchableOpacity>
        </View>
        ) : (
        <View>
            <TouchableOpacity onPress={goBack}>
            <Text style={styles.back}> <Iconback style={styles.back} name="back" color="#000" /> Back</Text>
            </TouchableOpacity>
            <View style={styles.orderPage}>
            <Image style={styles.pooja} source={require('../images/sathya.jpeg')} />
                <Text style={styles.head}>Sathyanarayana Pooja</Text>
                <Text style={styles.dates}>24.03.2020</Text>
                <Text style={styles.dates}>10:30am - 12:30pm</Text>
                <Text></Text>
            </View>
            <View style={styles.orderPage}>
                <Text style={styles.priest}>Priest:</Text>
                <Text style={styles.name}>Manyutej Achar</Text>
                
                <Text></Text>
                
            </View>
            <View style={styles.billDetails}>
                <Text style={styles.head}>Bill Details</Text>
                <Text style={styles.fare}>Seva Fare                                                             $ 80.28</Text>
                <Text style={styles.fare}>Total Access Fare                                              $ 23.27</Text>
                <Text style={styles.line}></Text>
                <Text style={styles.fare}>Rounded Off                                                        $ 0.46</Text>
                <Text style={styles.line}></Text>
                <Text style={styles.fares}>Total Bill                                                                $ 104</Text>
                <Text style={styles.tax}>Includes $3.35 Taxes</Text>
            </View>
            <View>
                <Text style={styles.dots}></Text>
                <Text style={styles.fares}> Payment</Text>
                <Text style={styles.fare}>Cash                                                                     $ 80.28</Text>
            </View>
            <View style={styles.button}>
                <FieldButton 
                    name='Rebook'
                ></FieldButton>
                <FieldButton 
                    name='Feedback'
                ></FieldButton>
            </View>
        </View>
        )}
        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop:10,
        height:100
    },
    header:{
        marginLeft:100,
        fontSize:18,
        color: "#696969",
        fontWeight: "600"
    },
    date:{
        marginLeft:100,
        fontSize:15,
        color: "#696969",
        fontWeight: "400"
    },
    sathya: {
        width: 100,
        height: 90,
        
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'stretch',
        position: 'absolute',
        marginTop:30
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
          height:200
      },
      head:{
        marginTop:12,
        marginLeft:10,
        fontSize:18,
        color: "#000",
        fontWeight: "600"
    },
    dates:{
        marginLeft:10,
        fontSize:15,
        color: "#696969",
        fontWeight: "400"
    },
    priest: {
        marginLeft:10,
        color: "#696969",
        fontSize: 15
    },
    billDetails:{
        marginTop: 10
    },
    name: {
        marginLeft:10,
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
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute'
      },
    fare:{
        marginTop:15,
        marginLeft:10,
        fontSize:15,
        color: "#696969",
        fontWeight: "400"
    },
    fares:{
        marginTop:15,
        marginLeft:10,
        fontSize:15,
        color: "#000",
        fontWeight: "400"
    },
    tax: {
        fontSize: 10,
        marginLeft:10,
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
    button: {
        marginTop: 25
    }
})

export default MyBookings

