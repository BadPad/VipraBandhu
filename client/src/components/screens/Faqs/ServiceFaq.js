import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';

const ServiceFaq = () => {


    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.boxes}>                                               
                <View style={styles.textView}>                    
                    <View> 
                        <Text style={styles.headerText}>Services and Servicemen</Text>
                    </View>
                    <View style={styles.faq}>
                        <Text style={styles.textStyle}>
                            1. How long should I wait for the booking to be assigned to a servicemen ?
                        </Text>
                        <Text style={styles.textStyles}>
                            Ans: As we have to assign the service to our vendors by considering their availability slots, we are proposing weight time of 12-24 hours to assign a servicemen to your booked service. However we will be working in backend to assign asap.

                        </Text>
                    </View>
                    <View style={styles.faq}>                       
                        <Text style={styles.textStyle}>
                            2. What is the criteria behind selection of cooks and priests in Sukalpa Seva ? How can we trust?
                        </Text>
                        <Text style={styles.textStyles}>
                            Ans: As the name of our App,  word "Sukalpa" stands for skilled professional While registering vendors to our app, we have made their background and we accept the vendors only when they adhere to our T&C. Any misbehaviour or misconduct shall be immediately reported to us and we will ensure to take appropriate action.
                        </Text>
                    </View>
                    <View style={styles.faq}>                       
                        <Text style={styles.textStyle}>
                            3. Do you offer services for all areas of Bangalore?
                        </Text>
                        <Text style={styles.textStyles}>
                            Ans: Yes we are covering entire Bangalore and Mysore in first phase.
                        </Text>
                    </View>
                    <View style={styles.faq}>                       
                        <Text style={styles.textStyle}>
                            4. Can I book for the same day service?
                        </Text>
                        <Text style={styles.textStyles}>
                            Ans: Yes you can. But we will make our best efforts to assign servicemen depending on their availability. However we recommend the bookings to be done at least 24-48 hours prior to event start time, which will help us to serve you better.
                        </Text>
                    </View>  
                    <View style={styles.faq}>                       
                        <Text style={styles.textStyle}>
                            5. How do I write review about the service that I booked and utilised?
                        </Text>
                        <Text style={styles.textStyles}>
                            Ans: Upon completion of the service, you can write review/ suggestions about our App as well as Servicemen . Reviews will be really helpful for us to improve our customer service.
                        </Text>
                    </View>                   
                </View>                                                                                    
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },    
    faq:{
        marginBottom: 4,        
        fontSize: 16, 
        padding: 10
    },
    textStyle: {
        marginBottom: 1,
        fontWeight: 'bold',
        fontSize: 16, 
        paddingLeft: 5
    },
    textStyles: {
        marginBottom: 1,
        fontSize: 16, 
        paddingLeft: 5
    },
    boxes: {
        marginTop: 0,
        paddingLeft: 0,
    },
    headerText: {
        fontSize: 22,
        paddingLeft: 5,
        color: 'green',
        paddingTop: 10,
        paddingBottom: 5,
        fontFamily: 'sans-serif-medium'
    },
    textView: {
        paddingLeft: 5,
        paddingRight: 10,

    }
})

export default ServiceFaq;

