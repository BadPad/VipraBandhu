import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Accordian from '../Reusable_Component/Accordian';
import RegisterFaq from './Faqs/RegisterFaq';
import AccountFaq from './Faqs/AccountFaq';
import PaymentFaq from './Faqs/PaymentFaq';
import ServiceFaq from './Faqs/ServiceFaq';
import OrderFaq from './Faqs/OrderFaq';

const Faq = ({ navigation }) => {


    return (
        <ScrollView>
            <Accordian title="Register">
                <RegisterFaq />
            </Accordian>
            <Accordian title="Account">
                <AccountFaq />
            </Accordian>
            <Accordian title="Payment">
                <PaymentFaq />
            </Accordian>
            <Accordian title="Service">
                <ServiceFaq />
            </Accordian>
            <Accordian title="Order">
                <OrderFaq />
            </Accordian>
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

export default Faq

