import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';

const PaymentFaq = () => {


    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.boxes}>                                               
                <View style={styles.textView}>                    
                    <View> 
                        <Text style={styles.headerText}>Payment</Text>
                    </View>
                    <View style={styles.faq}>
                        <Text style={styles.textStyle}>
                            1. What all Payment options  does your app consists of?
                        </Text>
                        <Text style={styles.textStyles}>
                            We have two modes of payment f in Sukalpa Seva
                            {'\n'}i) Full Payment while booking : You can do full payment while booking the service. Detailed price will be shown to you after summation of all cart items and your specifications. You need not to give any amount after completion of Service . For more details , refer T&Cs
                            {'\n'}{'\n'}ii)Partial Payment : You can opt for pay the partial / minimum booking amount for the service at the booking phase and remaining payment can be made after the completion of the service either directly to the servicemen or through the app

                        </Text>
                    </View>
                    <View style={styles.faq}>                       
                        <Text style={styles.textStyle}>
                            2. What are the modes of payment?
                        </Text>
                        <Text style={styles.textStyles}>
                            You can pay for your order on book using the following modes of payment:
                            {'\n'}a. UPI Apps
                            {'\n'}b. Credit and debit cards (VISA / Mastercard / Rupay etc)
                            {'\n'}c. Cash payment after service gets over

                        </Text>
                    </View>
                    <View style={styles.faq}>                       
                        <Text style={styles.textStyle}>
                            3. Are there any other charges or taxes in addition to the price shown? Is VAT added to the invoice?
                        </Text>
                        <Text style={styles.textStyles}>
                            Ans :  All the charges are included in the total bill amount. No additional charges are expected. No hidden charges
                        </Text>
                    </View>
                    <View style={styles.faq}>                       
                        <Text style={styles.textStyle}>
                            4. Is it safe to use my credit/ debit card on Sukalpa Seva App? 
                        </Text>
                        <Text style={styles.textStyles}>
                            Ans : Yes it is absolutely safe to use your card on our app. A recent directive from RBI makes it mandatory to have an additional authentication pass code verified by VISA (VBV) or MSC (Master Secure Code) which has to be entered by online shoppers while paying online using visa or master credit card. It means extra security for customers, thus making online booking safer.
                        </Text>
                    </View>  
                    <View style={styles.faq}>                       
                        <Text style={styles.textStyle}>
                            5. If I pay by credit card how do I get the amount back if i cancel the order?
                        </Text>
                        <Text style={styles.textStyles}>
                            Cancellation is entertained only at inevitable conditions. If in case you have to cancel the order , payment done through Credit Card will be added back to your wallet. You can avail amount in wallet for our future bookings.
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

export default PaymentFaq;

