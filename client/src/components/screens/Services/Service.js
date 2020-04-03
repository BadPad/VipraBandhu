import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Card from '../../Reusable_Component/Card/Card';
import CardSection from '../../Reusable_Component/Card/CardSection';
import Heading from '../../Reusable_Component/Heading';
import Carousel from '../../Reusable_Component/Image_Carousel/Carousel';
import FieldButton from '../../Reusable_Component/FieldButton';

const { width, height } = Dimensions.get('window');

const Service = ({ navigation, route }) => {

    const serviceId = route.params.id;

    const displayService = staticData.find(service => service.id === serviceId);

    return (
        <View>
            <ScrollView>
                <Carousel 
                    images={displayService.data}
                    height={height / 2.5}
                    imageComponentStyle={styles.imageComponentStyle}
                />
                <Card style={styles.content}>
                    <CardSection>
                        <View>
                            <Heading containerStyle={styles.containerTitle} style={styles.serviceTitleStyle} name={displayService.name} />
                            <Heading containerStyle={styles.containerPoojaAmount} style={styles.poojaAmount} name={`Rs ${displayService.price}`} />
                        </View>
                    </CardSection>
                    <CardSection style={styles.contentDescription}>
                        <Text style={styles.description}>{displayService.description}</Text>
                        <Text style={styles.description}>{displayService.description}</Text>
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
