import React, { useEffect } from "react";
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchServices from "../Reusable_Component/SearchServices";

import { serviceList, poojaServices, homaServices, functionServices, searchServices } from '../../redux/actions/serviceListActions';

const Welcome = ({ 
    navigation, 
    route, 
    serviceList, 
    poojaServices, 
    homaServices, 
    functionServices, 
    services,
    searchServices
}) => {

    useEffect(() => {
        serviceList()
    }, [])

    const pooja = (type) => {
        if(type === 'pooja') {
            poojaServices('searchPooja')
        } else if(type === 'homa') {
            homaServices('searchHoma')
        } else if(type === 'function') {
            functionServices('searchFunction')
        }
        navigation.navigate('ServicesList', { category: 'purohit' })
    }

    const catering = () => {
        navigation.navigate('ServicesList', { category: 'catering' })
    }

    return (
        <View style={styles.container}>
            <SearchServices 
                navigation={navigation} 
                route={route}
                services={services.fullServiceList} 
                searchServices={searchServices}
            />
            <ScrollView>
                <View style={styles.imageContainer}>
                    <TouchableOpacity style={styles.imageContainerTouchable} onPress={() => _onPressButton}>
                        <Image resizeMode='contain'
                            style={styles.images}
                            source={require('../images/Fest-Banner.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <TouchableOpacity style={styles.imageContainerTouchable} onPress={() => _onPressButton}>
                        <Image
                            style={styles.images2}
                            source={require('../images/Ads.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.serviceHeader}>
                    <Text style={styles.serviceHeaderText}>Pooja Services</Text>
                </View>
                <View style={styles.serviceBody}>
                    <View style={styles.serviceBodyBox}>
                        <TouchableOpacity style={styles.imageContainerTouchable2} onPress={() => pooja('pooja')}>
                            <Image
                                style={styles.images3}
                                source={require('../images/Kalasha.png')}
                            />
                            <Text style={styles.serviceBodyBoxTitle}>Pooja</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.serviceBodyBox}>
                        <TouchableOpacity style={styles.imageContainerTouchable2} onPress={() => pooja('homa')}>
                            <Image
                                style={styles.images3}
                                source={require('../images/Homa.png')}
                            />
                            <Text style={styles.serviceBodyBoxTitle}>Homas</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.serviceBodyBox}>
                        <TouchableOpacity style={styles.imageContainerTouchable2} onPress={() => pooja('function')}>
                            <Image
                                style={styles.images3}
                                source={require('../images/Functions.png')}
                            />
                            <Text style={styles.serviceBodyBoxTitle}>Functions</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.serviceBodyBox}>
                        <TouchableOpacity style={styles.imageContainerTouchable2} onPress={() => pooja('shraddha')}>
                            <Image
                                style={styles.images3}
                                source={require('../images/pooja.png')}
                            />
                            <Text style={styles.serviceBodyBoxTitle}>Shraddha</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={styles.serviceHeader}>
                    <Text style={styles.serviceHeaderText}>Cooking Services</Text>
                </View>
                <View style={styles.serviceBody}>
                    <View style={styles.serviceBodyBox}>
                        <TouchableOpacity style={styles.imageContainerTouchable2} onPress={() => catering}>
                            <Image
                                style={styles.images3}
                                source={require('../images/catering.jpg')}
                            />
                            <Text style={styles.serviceBodyBoxTitle}>Cook</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.serviceBodyBox}>
                        <TouchableOpacity style={styles.imageContainerTouchable2} onPress={() => catering}>
                            <Image
                                style={styles.images3}
                                source={require('../images/catering.jpg')}
                            />
                            <Text style={styles.serviceBodyBoxTitle}>Cook</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.serviceBodyBox}>
                        <TouchableOpacity style={styles.imageContainerTouchable2} onPress={() => catering}>
                            <Image
                                style={styles.images3}
                                source={require('../images/catering.jpg')}
                            />
                            <Text style={styles.serviceBodyBoxTitle}>Cook</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.serviceBodyBox}>
                        <TouchableOpacity style={styles.imageContainerTouchable2} onPress={() => catering}>
                            <Image
                                style={styles.images3}
                                source={require('../images/catering.jpg')}
                            />
                            <Text style={styles.serviceBodyBoxTitle}>Cook</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C8C8C8'
    },
    title: {
        alignItems: "center",
        marginBottom: 10
    },
    heading: {
        padding: 10,
        fontSize: 40
    },
    subHeading: {
        letterSpacing: 1,
        fontSize: 17
    },
    buttonContainer: {
        padding: 30,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    ImageContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',

    },
    imageContainerTouchable: {
        backgroundColor: '#fff',
        marginTop: 10
    },
    imageContainerTouchable2: {
        backgroundColor: '#fff',
        
    },
    button: {
        width: 100
    },
    images: {
        width: '95%',
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
        shadowRadius: 10,
        shadowColor: 'blue',
        marginTop: 10,
    },
    images2: {
        width: '95%',
        height: 150,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
        marginTop: 10,
    },
    images3: {
        width: '95%',
        height: 90,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
        marginTop: 10,
    },
    serviceHeader:{
        marginTop:10,
        backgroundColor:'#fff'
    },
    serviceHeaderText:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 15 
    },
    serviceBody:{
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor:'#fff',
        height:130,
    },
    serviceBodyBox:{
        width: 80,
        height: 100,
        marginLeft:5,
        marginRight:5
    },
    serviceBodyBoxTitle:{
        textAlign:'center',
        fontWeight:'bold'
    }
})

Welcome.propTypes = {
    serviceList: PropTypes.func.isRequired,
    poojaServices: PropTypes.func.isRequired,
    homaServices: PropTypes.func.isRequired,
    functionServices: PropTypes.func.isRequired,
    searchServices: PropTypes.func.isRequired,
    services: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    services: state.serviceList
})

const mapDispatchToProps = { serviceList, poojaServices, homaServices, functionServices, searchServices }

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
