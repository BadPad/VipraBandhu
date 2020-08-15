import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import { ScrollView } from 'react-native-gesture-handler';

const PurohitOnline = ({ navigation }) => {

    return (

        <View style={styles.container}>
            <View style={styles.boxes}>

                <ScrollView>
                    <View style={styles.textView}>
                        <Text style={styles.textStyle}>
                            We all know how difficult it is to organize or conduct an event where we have to talk to various service providers like purohit, catering, groceries, pooja items, etc.. get their contacts & book for various services, negotiate, run behind them, follow up and then to succeed is a nightmare. Instead, what if there is an easy and efficient way to book for all your pooja and catering services.
                        </Text>

                    </View>
                    <View style={styles.serviceBody}>
                        <View style={styles.serviceBodyBox}>
                            <TouchableOpacity style={styles.imageContainerTouchable2}>
                                <Image
                                    style={styles.serviceIcons}
                                    source={require('../images/Kalasha.png')}
                                />
                                <Text style={styles.serviceBodyBoxTitle}>Pooja</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <View style={styles.serviceBodyBox}>
                            <TouchableOpacity style={styles.imageContainerTouchable2} >
                                <Image
                                    style={styles.serviceIcons}
                                    source={require('../images/Vaadya.png')}
                                />
                                <Text style={styles.serviceBodyBoxTitle}>Functions</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceBodyBox}>
                            <TouchableOpacity style={styles.imageContainerTouchable2} >
                                <Image
                                    style={styles.serviceIcons}
                                    source={require('../images/Shraddha.png')}
                                />
                                <Text style={styles.serviceBodyBoxTitle}>Shraddha</Text>
                            </TouchableOpacity>
                        </View>
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
    textStyle: {
        marginBottom: 5,
        fontSize: 16,
        padding: 10
    },
    boxes: {
        marginTop: 0,
        paddingLeft: 0,
    },
    
    textView: {
        paddingLeft: 5,
        paddingRight: 10,

    },
    serviceBody: {
        marginTop:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        height: 90,
    },
    serviceBodyBox: {
        width: 80,
        height: 90,
        marginLeft: 5,
        marginRight: 5
    },
    imageContainerTouchable2: {
        backgroundColor: '#fff',
    },
    serviceIcons: {
        width: 50,
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 5,
        marginTop: 5,
    },
    serviceBodyBoxTitle: {
        textAlign: 'center',
        
    },
})

export default PurohitOnline