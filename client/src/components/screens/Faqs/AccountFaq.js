import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';

const AccountFaq = () => {


    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.boxes}>                                               
                <View style={styles.textView}>                    
                    <View> 
                        <Text style={styles.headerText}>Account</Text>
                    </View>
                    <View style={styles.faq}>
                        <Text style={styles.textStyle}>
                            1. What is My Profile?
                        </Text>
                        <Text style={styles.textStyles}>
                            My Profile page is a space where you can see all your Sukalpa Seva account details such as your bookings,
                        </Text>
                    </View>
                    <View style={styles.faq}>                       
                        <Text style={styles.textStyle}>
                            2. How do I reset my password?
                        </Text>
                        <Text style={styles.textStyles}>
                            Password can be reset by clicking on "Forgot Password" option. We will send an OTP to initiate password reset. So please make sure that you provide correct phone number. 
                        </Text>
                    </View>
                    <View style={styles.faq}>                       
                        <Text style={styles.textStyle}>
                            3. What is Refer and Earn? How will it work?
                        </Text>
                        <Text style={styles.textStyles}>
                            "Refer and Earn" is a special feature in our app, where you can refer family & friends  to install the app and to use it. When the person you refer does the first booking, you will get 100 Points (equal to 100 Rs) in your wallet, which you can see in "My Wallet" section. You can make use of your wallet points for any of your future bookings
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

export default AccountFaq;

