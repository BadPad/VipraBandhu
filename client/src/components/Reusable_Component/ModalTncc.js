import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, Alert, TouchableHighlight, ScrollView } from 'react-native';


const ModalTnc = () => {
    
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
        <>
        <View>
                        
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Close the terms and conditions.");
            }}
            >
            <View style={styles.tnc}>
                <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => {
                    setModalVisible(!modalVisible);
                    }}
                >
                    <Text style={styles.textStyle}>Close</Text>
                </TouchableHighlight>
            <ScrollView>
                
                <Text style={styles.header}>Terms and Conditions for Cook / Caterers</Text>
                <Text style={styles.conditions}>Hello all fellow gentlemen, greetings from our end
                We cordially welcome you to Our <Text style={styles.dark}>SUKALPA SEVA</Text> Mobile App We would need you co-operation at most to achive our goal.</Text>
                <Text style={styles.head}>
                How does Sukalpa Seva Works ???
                </Text>
                <Text style={styles.conditions}>
                1. Basically our app is a one stop solution to book purohits and
                cook/catering service online flawlessly.
                </Text>
                <Text style={styles.conditions}>
                2.	Cooks / Caterers are expected to get registered in our App with all the necessary details.
                </Text>
                <Text style={styles.conditions}>
                3.	Customers will book either cook / opt for catering service based on the event , along with number of members.
                </Text>
                <Text style={styles.conditions}>
                4.	Based on the location and time slot , a message/app notification will be triggered on your mobile and you can accept the same if you are available for the given date and time. Then the booking will get confirmed.
                </Text>
                <Text style={styles.conditions}>
                5.	Once booking is confirmed, you will be receiving a message as well as app notification about all details of customer.
                </Text>
                <Text style={styles.head}>
                T & C
                </Text>
                <Text style={styles.conditions}>
                1.	By taking everyone in to consideration, we have prepared a standard menu nand rate list by making survey of multiple occasions.
                </Text>
                <Text style={styles.conditions}>
                2.	Customers can opt for extra sweets/ extra dishes at extra cost.
                </Text>
                <Text style={styles.conditions}>
                3.	Once booking is confirmed by Cook, there will be no option to cancel it (Unless it’s a inevitable situation).
                </Text>
                <Text style={styles.conditions}>
                4.	Bookings cannot be transferred from one person to other.
                </Text>
                <Text style={styles.conditions}>
                5.	Customers can pay all the fare during booking or they can do part payment. It’s totally their choice.
                </Text>
                <Text style={styles.conditions}>
                6.	If the part payment is done, remaining amount will be given at the venue by customer either by cash or online transaction.
                </Text>
                <Text style={styles.conditions}>
                7.	We have promised customer that we will be delivering service very promptly  and with hygiene being very important.
                </Text>
                <Text style={styles.conditions}>
                8.	We expect you not to compromise in quality and quantity of the food.
                </Text>
                <Text style={styles.conditions}>
                9.	For cooks, based on the event and for the number of  people food need to be prepared and served. We have only considered standard number of  assistants required and their fare also been added to the rate list.
                </Text>
                <Text style={styles.conditions}>
                10.	TA/DA has already been considered during the time of fixation of rate list . No extra amount will be provided for this.
                </Text>
                <Text style={styles.conditions}>
                11.	After end of every service, customer can write review and give rating for cook/caterer . Those who gets more number of positive comments and good rating, they will be offered with more number of bookings.
                </Text>
                <Text style={styles.conditions}>
                12.	For any clarification, you can reach out to our Customer Help line number.
                </Text>

                {/* <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => {
                    setModalVisible(!modalVisible);
                    }}
                >
                    <Text style={styles.textStyle}>Close</Text>
                </TouchableHighlight> */}
            </ScrollView>
            </View>
            </Modal>
            
                {/* <TouchableOpacity onPress={closeTc}>
                    <Text style={styles.close}  > <Icon style={styles.close} name="closecircleo" color="#D63031" /> Close</Text>
                </TouchableOpacity>
                <ModalTncc />
                <TouchableOpacity onPress={closeTc}>
                    <Text style={styles.close}   > <Icon style={styles.close} name="closecircleo" color="#D63031" /> Close</Text>
                </TouchableOpacity> */}
        </View>
    </>
    
    </>
    )
}

const styles = StyleSheet.create({
    tnc: {
        margin: 15,
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    header: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 8
    },
    conditions: {
        fontSize:13,
        marginBottom: 10
    },
    dark: {
        color: 'blue'
    },
    head: {
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 12
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})

export default ModalTnc

