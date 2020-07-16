import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';

const RegisterFaq = () => {


    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.boxes}>                                               
                <View style={styles.textView}>                    
                    <View> 
                        <Text style={styles.headerText}>Registration</Text>
                    </View>
                    <View style={styles.faq}>
                        <Text style={styles.textStyle}>
                            1. How do I register?
                        </Text>
                        <Text style={styles.textStyles}>
                            You can register by clicking on the "Register" button on the homepage. Please provide all the required information in the form that appears and submit the registration information.
                        </Text>
                    </View>
                    <View style={styles.faq}>                       
                        <Text style={styles.textStyle}>
                            2. Are there any charges for registration?
                        </Text>
                        <Text style={styles.textStyles}>
                            No. Registration on Sukalpa Seva is absolutely free. 
                        </Text>
                    </View>
                    <View style={styles.faq}>                       
                        <Text style={styles.textStyle}>
                            3. Do I have to necessarily register to book service on Sukalpa Seva?
                        </Text>
                        <Text style={styles.textStyles}>
                            Yes, Registration is compulsory to book the services on Sukalpa Seva. Without registration you will be able to browse through the app and services but only registered users will be able to checkout and book services. Registered members have to be logged in at the time of checking out the cart, they will be prompted to do so if they are not logged in.
                        </Text>
                    </View>
                    <View style={styles.faq}>                       
                        <Text style={styles.textStyle}>
                            4. Can I have multiple registrations?
                        </Text>
                        <Text style={styles.textStyles}>
                            Each email address and contact phone number can only be associated with one Sukalpa Seva account.
                        </Text>
                    </View>
                    <View style={styles.faq}>                       
                        <Text style={styles.textStyle}>
                            5.Can I add more than one address in an account to book services?
                        </Text>
                        <Text style={styles.textStyles}>
                            Yes, you can add multiple  addresses in your  account. However, remember booking can be done to render service at only one address at a  time.  If you want different services to be booked at  different address you need to make a separate booking.
                        </Text>
                    </View>
                    <View style={styles.faq}>                       
                        <Text style={styles.textStyle}>
                            6. Can I have different city addresses under one account and still place orders for multiple cities?
                        </Text>
                        <Text style={styles.textStyles}>
                            Currently we have planned to serve only in Bangalore and Mysore. Soon we will be expanding our services to other parts of the state. 
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

export default RegisterFaq;

