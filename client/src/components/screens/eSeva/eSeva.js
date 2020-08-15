import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { App_Color, Font_Name_Regular, Font_Name_Bold } from '../../Reusable_Component/ConstantValues';

// import { ScrollView } from 'react-native-gesture-handler';

const eSeva = ({ navigation }) => {

    return (

        <View style={styles.container}>
            <View style={styles.boxes}>
                <ScrollView>
                    <View style={styles.textView}>
                        <Text style={styles.textStyle}>
                            We all know how difficult it is to organize or conduct an event where we have to talk to various service providers like purohit, catering, groceries, pooja items, etc.. get their contacts & book for various services, negotiate, run behind them, follow up and then to succeed is a nightmare.
                        </Text>
                    </View>

                    <View>
                        <TouchableOpacity activeOpacity={.9} onPress={() => navigation.navigate('eSevaBookingList', { type: 'Saamoohika' })} >
                            <LinearGradient
                                colors={["#09203f", "#537895"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={{ flex: 1, width: '100%'}}>

                                <View style={styles.sevaList}>
                                    <View style={{ width: '90%' }}>
                                        <Text style={styles.sevaText}>
                                            Saamoohika Seva (ಸಾಮೂಹಿಕ ಸೇವೆ)
                                        </Text>
                                    </View>
                                    <View style={{ width: '10%', justifyContent: 'center' }}>
                                        <Icon style={styles.icon} name="ios-arrow-dropright-circle" size={25}
                                            backgroundColor="transparent" color="#fff"></Icon>
                                    </View>
                                </View>
                            </LinearGradient>
                            <View style={{ padding: 5, borderWidth: 1, borderColor: 'lightgrey', marginBottom:5 }}>
                                <Text style={{ color: '#000' }}>
                                    - Line 1 Content
                                </Text>
                                <Text style={{ color: '#000' }}>
                                    - Line 2 Content
                                </Text>
                                <Text style={{ color: '#000' }}>
                                    - Line 3 Content
                                </Text>
                            </View>
                            
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={.9} onPress={() => navigation.navigate('eSevaBookingList', { type: 'Pratyeka' })} >
                            <LinearGradient
                                colors={["#09203f", "#537895"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={{ flex: 1, width: '100%' }}>

                                <View style={styles.sevaList}>
                                    <View style={{ width: '90%' }}>
                                        <Text style={styles.sevaText}>
                                            Pratyeka Seva (ಪ್ರತ್ಯೇಕ ಸೇವೆ)
                                        </Text>
                                    </View>
                                    <View style={{ width: '10%', justifyContent: 'center' }}>
                                        <Icon style={styles.icon} name="ios-arrow-dropright-circle" size={25}
                                            backgroundColor="transparent" color="#fff"></Icon>
                                    </View>
                                </View>

                            </LinearGradient>
                            <View style={{ padding: 5, borderWidth: 1, borderColor: 'lightgrey', marginBottom:5 }}>
                                <Text style={{ color: '#000' }}>
                                    - Line 1 Content
                                </Text>
                                <Text style={{ color: '#000' }}>
                                    - Line 2 Content
                                </Text>
                                <Text style={{ color: '#000' }}>
                                    - Line 3 Content
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>

        </View>

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

    },

    sevaList: {
        paddingLeft:5,
        marginTop: 5,
        marginBottom: 5,
        flex: 1,
        flexDirection: 'row',

    },
    sevaText: {
        fontSize: 17,
        fontFamily: Font_Name_Regular,
        color: '#fff',
        marginBottom: 5,
        textDecorationLine: 'underline'
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

export default eSeva