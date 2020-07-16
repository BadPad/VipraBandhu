import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';

const OrderFaq = () => {


    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.boxes}>                                               
                <View style={styles.textView}>                    
                    <View> 
                        <Text style={styles.headerText}>Order Related</Text>
                    </View>
                    <View style={styles.faq}>
                        <Text style={styles.textStyle}>
                            1. If I wish to modify my current booking, how do I do it?
                        </Text>
                        <Text style={styles.textStyles}>
                            As of now, we don't have an option to modify the booking . We will show you a preview page before you complete the payment. We request you to be extra cautious about your selections  before making final payment.
                        </Text>
                    </View>
                    <View style={styles.faq}>                       
                        <Text style={styles.textStyle}>
                            2. Is there a way that I can reschedule my booking instead of cancelling it?
                        </Text>
                        <Text style={styles.textStyles}>
                             Currently  we are not offering reschedule option. We will come up with this feature in upcoming releases. Please co-operate with us for now.
                        </Text>
                    </View>
                    <View style={styles.faq}>                       
                        <Text style={styles.textStyle}>
                            3. How do I check the current status of my booking?
                        </Text>
                        <Text style={styles.textStyles}>
                            Ans :  In My Orders page, you have a field called "Booking status" where you can find current status of your booking.
                        </Text>
                    </View>
                    <View style={styles.faq}>                       
                        <Text style={styles.textStyle}>
                            4. Why is there an booking cancellation fee?
                        </Text>
                        <Text style={styles.textStyles}>
                            Ans : We charge an booking cancellation fee to compensate for the slot, time and effort incurred towards processing a booking.
                            {'\n'}{'\n'}Every booking done has to undergo a system driven process as well as a manual process in it, to make sure the booking request reaches to our vendors as per the specifications chosen by customer. 
                            {'\n'}{'\n'}For this purpose, a slot is booked for every booking that gets placed in our system and the service men allotment happens seamlessly. 
                            {'\n'}{'\n'}In this entire process we incur labor as well as an opportunity cost on the booked slot. During the event of a cancellation the entire process has to be stopped and reset. This takes up considerable processing time to open the slot yet again for another customer to do the booking.

                        </Text>
                    </View>  
                    <View style={styles.faq}>                       
                        <Text style={styles.textStyle}>
                            5. When and how can I cancel an order?
                        </Text>
                        <Text style={styles.textStyles}>
                            You have an option to cancel the existing order in My Bookings Section. We recommend not to cancel the order 
                            {'\n'}{'\n'}You can cancel an order before the cut off time of 24 hours prior to booking start time. Cancellation will be processed based on the time difference between the cancellation time and booking start time.
                        </Text>
                    </View>  
                    <View style={styles.faq}>                       
                        <Text style={styles.textStyle}>
                            6. How do I contact customer service?
                        </Text>
                        <Text style={styles.textStyles}>
                            You have a field called Contact Us filed in your My Profile page. You should be able to see it after logging in to app.
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

export default OrderFaq;

