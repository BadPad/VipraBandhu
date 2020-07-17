import React, { useEffect } from "react";
import { View, ScrollView, Text, Linking, StyleSheet, Platform, FlatList, Dimensions, UIManager, ImageBackground, LayoutAnimation, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchServices from "../Reusable_Component/SearchServices";
import Carousel from "../Reusable_Component/CarouselList";
import { serviceList, poojaServices, homaServices, functionServices, searchServices, cateringServices } from '../../redux/actions/serviceListActions';
import { upcomingFestivals } from '../../redux/actions/upcomingFestActions';
import Indicator from "../Reusable_Component/SpinnerIndicator/Indicator";
import { App_Color, Font_Name_Regular, Font_Name_Bold } from '../Reusable_Component/ConstantValues';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Welcome = ({
    navigation,
    route,
    serviceList,
    poojaServices,
    homaServices,
    functionServices,
    auth,
    services,
    searchServices,
    upcomingFestivals,
    festivals,
    cateringServices
}) => {

    useEffect(() => {
        serviceList(),
            upcomingFestivals()
    }, [])

    const pooja = (type) => {
        if (type === 'pooja') {
            poojaServices(type)
        } else if (type === 'homa') {
            homaServices(type)
        } else if (type === 'function') {
            functionServices(type)
        }
        navigation.navigate('ServicesList', { category: 'purohit' })
    }

    const catering = (type) => {
        if (type === 'catering') {
            cateringServices(type)
        }

        navigation.navigate('ServicesList', { category: 'catering' })
    }

    // const catering = (type) => {
    //     if (type === 'breakfast') {
    //         breakfastServices(type)
    //     } else if (type === 'lunch') {
    //         lunchServices(type)
    //     } else if (type === 'snacks') {
    //         snacksServices(type)
    //     } else if (type === 'dinner') {
    //         dinnerServices(type)
    //     }
    //     navigation.navigate('ServicesList', { category: 'Catering' })
    // }

    const { userType } = auth;
    return (
        <View style={styles.container}>
            {festivals.loading || services.loading ? <Indicator /> : null}
            <SearchServices
                navigation={navigation}
                route={route}
                services={services.fullServiceList}
                searchServices={searchServices}
            />
            <ScrollView>
                <View style={styles.innerView}>
                    <View style={styles.AdsContent}>

                        <Carousel
                            type="Ads"
                        />
                    </View>

                    <View style={styles.upcomingFestivals}>
                        <View style={styles.upFestHeader}>
                            {/* <Image resizeMode='contain'
                                style={styles.upFestImage}
                                source={require('../images/Fest-Banner.png')}
                            /> */}
                            <Text style={styles.upFestHeaderTitle}>
                                UPCOMING FESTIVALS
                            </Text>
                        </View>
                        <View style={styles.upFestContent}>
                            <Carousel
                                festivals={festivals.upcomingFunctionsList}
                                type="fest"
                            />

                        </View>
                    </View>
                    {
                        userType === null || userType === 'customer' ?
                            <>
                                <View style={styles.poojaView}>
                                    <View style={styles.serviceHeader}>
                                        <Text style={styles.serviceHeaderText}>Pooja Services</Text>
                                    </View>
                                    <View style={styles.serviceBody}>
                                        <View style={styles.serviceBodyBox}>
                                            <TouchableOpacity style={styles.imageContainerTouchable2} onPress={() => pooja('pooja')}>
                                                <Image
                                                    style={styles.serviceIcons}
                                                    source={require('../images/Kalasha.png')}
                                                />
                                                <Text style={styles.serviceBodyBoxTitle}>Pooja</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.serviceBodyBox}>
                                            <TouchableOpacity style={styles.imageContainerTouchable2} onPress={() => pooja('homa')}>
                                                <Image
                                                    style={styles.serviceIcons}
                                                    source={require('../images/Homa.png')}
                                                />
                                                <Text style={styles.serviceBodyBoxTitle}>Homas</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.serviceBodyBox}>
                                            <TouchableOpacity style={styles.imageContainerTouchable2} onPress={() => pooja('function')}>
                                                <Image
                                                    style={styles.serviceIcons}
                                                    source={require('../images/Vaadya.png')}
                                                />
                                                <Text style={styles.serviceBodyBoxTitle}>Functions</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.serviceBodyBox}>
                                            <TouchableOpacity style={styles.imageContainerTouchable2} onPress={() => pooja('shraddha')}>
                                                <Image
                                                    style={styles.serviceIcons}
                                                    source={require('../images/Shraddha.png')}
                                                />
                                                <Text style={styles.serviceBodyBoxTitle}>Shraddha</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.serviceHeader}>
                                    <Text style={styles.serviceHeaderText}>Cooking Services</Text>
                                </View>
                                <View style={styles.serviceBody}>
                                    <View style={styles.serviceBodyBox}>
                                        <TouchableOpacity style={styles.imageContainerTouchable2} onPress={() => catering('catering')}>
                                            <Image
                                                style={styles.serviceIcons}
                                                source={require('../images/breakfast.png')}
                                            />
                                            <Text style={styles.serviceBodyBoxTitle}>Catering</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.serviceBodyBox}>
                                        <TouchableOpacity style={styles.imageContainerTouchable2} onPress={() => catering('fullContract')}>
                                            <Image
                                                style={styles.serviceIcons}
                                                source={require('../images/lunch.png')}
                                            />
                                            <Text style={styles.serviceBodyBoxTitle}>Full Contract</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.serviceBodyBox}>
                                        <TouchableOpacity style={styles.imageContainerTouchable2} onPress={() => catering('laborContract')}>
                                            <Image
                                                style={styles.serviceIcons}
                                                source={require('../images/Snacks.png')}
                                            />
                                            <Text style={styles.serviceBodyBoxTitle}>Labor Contract</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                
                            </>
                            : null
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCE2E0',
        fontFamily: 'OpenSans-Regular'
    },
    innerView: {

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
    imageContainer1: {
        marginTop: 10,
        alignContent: 'flex-start'
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

    // Pooja and Cooking Services CSS - Start
    serviceHeader: {
        marginTop: 10,
        backgroundColor: '#fff'
    },
    serviceHeaderText: {
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        fontSize: 15,
        color: 'black',
        padding: 5,
        fontFamily: Font_Name_Bold
    },
    serviceBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        height: 100,
    },
    serviceBodyBox: {
        width: 80,
        height: 100,
        marginLeft: 5,
        marginRight: 5
    },
    serviceBodyBoxTitle: {
        textAlign: 'center',
        fontFamily: Font_Name_Regular
    },
    serviceIcons: {
        width: 60,
        height: 60,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
        marginTop: 10,
    },
    // Pooja and Cooking Services CSS - End

    poojaView: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5
    },
    AdsContent: {
        marginTop: 10,

    },
    upcomingFestivals: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',

        marginTop: 10,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5
    },
    upFestHeader: {
        width: '30%',
        
        justifyContent: 'center',

    },
    upFestHeaderTitle: {
        fontFamily: Font_Name_Regular,
        fontSize: wp(4.3),
        fontWeight: 'bold',
        lineHeight: wp(4.8),
        textAlign:'center'
    },
    upFestImage: {
        width: '100%',
        
    },
    upFestSlideView: {
        width: '100%',

    },
    AdSlideView: {
        width: '100%',
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5
    },
    upFestContent: {
        width: '70%',
        paddingRight: 5,
        alignContent: 'center'
    },
    upFestName: {
        width: '100%',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
    upFestDate: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center'
    },

    imageComponentStyle: {
        width: '95%',
        height: 100
    },
    Ad: {
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'OpenSans-Regular'
    },
    AdName: {
        fontSize: 18,
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'OpenSans-Regular'
    }
})

Welcome.propTypes = {
    auth: PropTypes.object.isRequired,
    serviceList: PropTypes.func.isRequired,
    poojaServices: PropTypes.func.isRequired,
    homaServices: PropTypes.func.isRequired,
    functionServices: PropTypes.func.isRequired,
    searchServices: PropTypes.func.isRequired,
    services: PropTypes.object.isRequired,
    festivals: PropTypes.object.isRequired,
    cateringServices: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    services: state.serviceList,
    festivals: state.upcomingFestivals,
})

const mapDispatchToProps = { serviceList, poojaServices, homaServices, functionServices, searchServices, upcomingFestivals, cateringServices }

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
