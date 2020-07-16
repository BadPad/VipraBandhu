import React from 'react'
import { View, Text, Modal, StyleSheet, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import FieldButton from '../Reusable_Component/FieldButton';
import {App_Color}  from '../Reusable_Component/ConstantValues';


const CustomModal = ({ visibility, modalText, closeIconPress, cancelButtonPress, submitButtonPress }) => {

    const [modalVisibility, setModalVisiblity] = React.useState(false);


    return (
        <View style={styles.infoView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visibility}
                onRequestClose={() => {
                    //Alert.alert("Close the terms and conditions.");
                }}
            >
                <View style={styles.mdlCenteredView}>
                    <View style={styles.mdlCenteredView}>
                        <View style={styles.modalView}>
                            <TouchableHighlight
                                style={{ ...styles.mdlCloseIconStyle, backgroundColor: App_Color }}
                                onPress={closeIconPress}
                            >
                                <Icon style={styles.mdlIconCircle} name="ios-close-circle" size={30}
                                    color="#fff" backgroundColor={App_Color}
                                ></Icon>
                            </TouchableHighlight>
                            <Text style={styles.mdlText}>
                                {modalText}
                            </Text>
                            <View style={styles.mdlButtonView}>
                                <View style={styles.mdlButton}>
                                    <FieldButton buttonTouch={styles.mdlbtnOuter}
                                        buttonTouchText={styles.mdlbtnText}
                                        name='Yes'
                                        onPress={submitButtonPress}
                                        ></FieldButton>
                                </View>
                                <View style={styles.mdlButton}>
                                    <FieldButton
                                        buttonTouch={styles.mdlbtnOuter}
                                        buttonTouchText={styles.mdlbtnText}
                                        name='No'
                                        onPress={cancelButtonPress}
                                    ></FieldButton>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    infoView: {
        
        alignSelf: 'center',
        padding: 5,
        width: '20%',
    },
    mdlCenteredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,

    },
    modalView: {
        margin: 25,
        backgroundColor: App_Color,
        borderRadius: 5,
        paddingLeft: 20,
        paddingBottom: 10,
        paddingTop: 5,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.25,
        shadowRadius: 25.84,
        elevation: 15
    },
    mdlCloseIconStyle: {
        width: '100%',
        alignSelf: 'flex-end',
        backgroundColor: '#D63031',
        color: '#fff',

    },
    mdlIconCircle: {
        paddingRight: 10
    },
    mdlText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
        paddingLeft: 5,
        marginBottom: 15,
        color: '#fff'
    },
    mdlbtnText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
        color: 'red'
    },
    mdlbtnOuter: {
        backgroundColor: "#fff",

    },

    mdlButtonView: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    mdlButton: {
        width: '30%',
        padding: 5
    },
})

export default CustomModal;