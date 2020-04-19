import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../../Reusable_Component/Card/Card';
import CardSection from '../../Reusable_Component/Card/CardSection';
import Heading from '../../Reusable_Component/Heading';
import Carousel from '../../Reusable_Component/Image_Carousel/Carousel';
import FieldButton from '../../Reusable_Component/FieldButton';

const Service = ({ navigation, route }) => {

    const service = route.params.id;

    // const displayService = staticData.find(service => service.id === serviceId);

    return (
        <View>
            <ScrollView>
                {/* <Carousel 
                    images={service.serviceImages}
                    height={height / 2.5}
                    imageComponentStyle={styles.imageComponentStyle}
                /> */}
                <Card style={styles.content}>
                    <CardSection>
                        <View>
                            <Heading containerStyle={styles.containerTitle} style={styles.serviceTitleStyle} name={service.serviceName} />
                            <Heading containerStyle={styles.containerPoojaAmount} style={styles.poojaAmount} name={`Rs ${service.serviceName}`} />
                        </View>
                    </CardSection>
                    <CardSection style={styles.contentDescription}>
                        <Text style={styles.description}>{service.serviceDescription}</Text>
                        <Text style={styles.description}>{service.serviceDescription}</Text>
                    </CardSection>
                </Card>
            </ScrollView>
            <FieldButton 
                butonContainer={styles.butonContainer}
                buttonTouch={styles.buttonTouch}
                name='Book' 
            />
        </View>
    )
}

const styles = StyleSheet.create({
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
    poojaAmount: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    imageComponentStyle: { 
        width: '100%',
    },
    contentDescription: {
        flexDirection: 'column'
    },
    description: {
        fontSize: 15,
        color: '#837F7F'
    },
    content: {
        borderRadius: 0,
        padding: 5,
        marginBottom: 42
    },
    butonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    buttonTouch:{
        borderRadius: 0
    }
})

export default Service;
