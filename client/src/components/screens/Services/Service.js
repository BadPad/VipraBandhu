import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Container from '../../Reusable_Component/Container';
import Card from '../../Reusable_Component/Card/Card';
import CardSection from '../../Reusable_Component/Card/CardSection';
import Heading from '../../Reusable_Component/Heading';
import Carousel from '../../Reusable_Component/Image_Carousel/Carousel';

const Service = ({ navigation, route }) => {

    const serviceId = route.params.id;

    const displayService = staticData.find(service => service.id === serviceId);
    console.log(displayService)

    return (
        <Container>
            <Card style={styles.imageCard}>
                <CardSection>
                    <View>
                        <Heading containerStyle={styles.containerTitle} style={styles.serviceTitleStyle} name={displayService.name} />
                        <Heading containerStyle={styles.containerPoojaAmount} style={styles.poojaAmount} name={`Rs ${displayService.price}`} />
                    </View>
                </CardSection>
                <Carousel 
                    images={displayService.data}
                    paginationBoxStyle={styles.paginationBoxStyle} 
                    dotStyle={styles.dotStyle}
                    imageComponentStyle={styles.imageComponentStyle}
                />
            </Card>
            <Card style={styles.aboutDescription}>
                <CardSection>
                    <Heading containerStyle={styles.containerTitle} style={styles.serviceTitleStyle} name='Description' />
                </CardSection>
            </Card>
        </Container>
    )
}

const styles = StyleSheet.create({
    imageCard: {
        backgroundColor: '#fff'
    },
    containerTitle: {
        paddingBottom: 0
    },
    serviceTitleStyle: {
        fontSize: 17
    },
    containerPoojaAmount: {
        alignSelf: 'flex-start',
        paddingBottom: 0
    },
    poojaAmount: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    paginationBoxStyle: {
        position: "relative",
        bottom: 0,
        padding: 0,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        paddingVertical: 10
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 0,
        padding: 0,
        margin: 0,
        backgroundColor: "rgba(128, 128, 128, 0.92)"
    },
    imageComponentStyle: {
        borderRadius: 5, 
        width: '97%'
    },
    aboutDescription: {
        marginVertical: 3
    }
})

export default Service;
