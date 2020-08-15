import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { App_Color, Font_Name_Regular, Font_Name_Bold } from '../../Reusable_Component/ConstantValues';
import staticData from '../../Reusable_Component/StaticData/eSeva';
import ESevaServicesCardList from '../../utils/eSevaServicesCardList';
import Card from '../../Reusable_Component/Card/Card';
import CardSection from '../../Reusable_Component/Card/CardSection';
import Heading from '../../Reusable_Component/Heading';
import MultipleFieldButton from '../../Reusable_Component/MultipleFieldButton';
// import { ScrollView } from 'react-native-gesture-handler';

const eSevaBooking = ({ navigation, route }) => {

    const dataContent = route.params.content;

    const rendereSevaServicesList = ({ item }) => {
        return (
            <ESevaServicesCardList data={item} onSelectService={onSelectService} />
        )
    }

    const onSelectService = data => {
        //navigation.navigate('Service', { id: data, serviceType: "purohit" })
    }

    let cartServices;

    if (isEmpty(bookingCartServices.bookingCartList) === false) {
        cartServices = bookingCartServices.bookingCartList.find(list => list.serviceId === service.serviceId && list.serviceName === service.serviceName)
    }


    return (
        <>
            <ScrollView>
                {/* <Carousel 
                                images={service.serviceImages}
                                height={height / 2.5}
                                imageComponentStyle={styles.imageComponentStyle}
                            /> */}
                <Card style={styles.content}>
                    <CardSection>
                        <View>
                            <Heading containerStyle={styles.containerTitle} style={styles.serviceTitleStyle} name={dataContent.name} />
                        </View>
                    </CardSection>

                    <CardSection style={styles.contentDescription}>
                        <Text style={styles.description}>{dataContent.desc}</Text>
                        <Text style={styles.description}>{dataContent.desc}</Text>
                        <Text style={styles.description}>{dataContent.desc}</Text>
                    </CardSection>
                </Card>
            </ScrollView>
            <MultipleFieldButton
                butonContainer={styles.butonContainer}
                buttonBckTouch={cartServices === undefined || null ? null : styles.buttonBckTouch}
                buttoncheckTouch={cartServices === undefined || null ? styles.buttoncheckTouch : styles.TouchButton}
                buttoncheckTouchText={cartServices === undefined || null ? null : styles.buttoncheckTouchText}
                name={cartServices === undefined || null ? 'Book' : 'Checkout'}
                onPressBck={() => navigation.goBack()}
                onPressCheck={() => isAuthenticated ?
                    cartServices === undefined || null ?
                        setIsModel(!isModal)
                        :
                        (bookingCartStructure(), navigation.navigate('DeliveryOptions'))
                    :
                    navigation.navigate('Login')
                }
            />
        </>


    )
}

const styles = StyleSheet.create({
    content: {
        borderRadius: 0,
        padding: 5,
        paddingBottom: 55
    },
    containerTitle: {
        paddingBottom: 0
    },
    serviceTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 0.2
    },
    containerPoojaAmount: {
        alignSelf: 'flex-start',
        paddingBottom: 0
    },
    poojaAmountFor: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    poojaAmount: {
        fontSize: 14,
        // fontWeight: 'bold'
    },
    contentDescription: {
        flexDirection: 'column'
    },
    serviceAmount: {
        justifyContent: 'space-between'
    },
    description: {
        fontSize: 15,
        color: '#837F7F'
    },

})

export default eSevaBooking