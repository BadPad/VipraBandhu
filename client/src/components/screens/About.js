import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';


const About = ({ navigation }) => {
    

    return (
        <View style={styles.container}>
            <Text style={styles.about}>About Sukalpa Seva</Text>
            <Text style={styles.description}>We all know how difficult it is to organize or conduct an event where we have to talk to various service providers
            like purohit, catering, groceries, pooja items, etc..
            Get their contacts & book for various services, negotiate, run behind them, follow up and then to succeed is a nightmare.
            Instead, what if there is an easy and efficient way to book for all your pooja and catering services.
            </Text>
            <Text style={styles.description}>SukalpaSeva is an one stop solution which provides an efficient platform for hassle free bookings for all your requirements
            of events at your convenience. Our vision is to use smart technology and processes to structure the highly unorganized services
            and provide easy ways to book for your essentials. We offer a chain of skilled professionals to cater all your requirements
            at your doorstep with just a few clicks.
            </Text>
            <Text style={styles.description}>SukalpaSeva provides not only the skilled professionals but also entitled for authenticity, commitment, hygiene and
            customer satisfaction. We take all the overheads but give the customer the best services in the market at the lowest cost
            with no hidden charges. Sukalpa stands for skilled / qualified workers and we abide to it.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#C8C8C8'
    },
    about: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 15
        
    },
    description: {
        
        justifyContent: 'flex-start',
        margin: 5,
        marginTop: 15
    }
})

export default About

