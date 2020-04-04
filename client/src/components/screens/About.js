import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';


const About = ({ navigation }) => {
    

    return (
        <View style={styles.container}>
            <View style={styles.boxes}>
                <Text style={styles.headerText}>Sukalpa Seva</Text>
                <Text style={styles.textStyle}>
                    We all know how difficult it is to organize or conduct an event where we have to talk to various service providers like purohit, catering, groceries, pooja items, etc.. get their contacts & book for various services, negotiate, run behind them, follow up and then to succeed is a nightmare. Instead, what if there is an easy and efficient way to book for all your pooja and catering services.

                </Text>
                <Text style={styles.textStyle}>
                    Sukalpa Seva is a one stop solution which provides an efficient platform for hassle free bookings for all your requirements of events at your convenience. Our vision is to use smart technology and processes to structure the highly unorganized services and provide easy ways to book for your essentials. We offer a chain of skilled professionals to cater all your requirements at your doorstep with just a few clicks.
                </Text>
                <Text style={styles.textStyle}>
                    Sukalpa Seva provides not only the skilled professionals but also entitled for authenticity, commitment, hygiene and customer satisfaction. We take all the overheads but give the customer the best services in the market at the lowest cost with no hidden charges. Sukalpa stands for skilled / qualified workers and we abide to it. 
                </Text>
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
        marginBottom:5,
        fontSize:16,
        padding:10
    },
    boxes: {
        margin:10,
        paddingLeft:0,
        paddingRight:5,
        
    },
    headerText:{
        fontSize: 26,
        textAlign: 'center'
    }
})

export default About

