import React from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const ModalView = ({
    isVisible,
    modalContainer,
    children,
    close,
    animationIn,
    animationOut,
    animationInTiming,
    animationOutTiming,
    propagateSwipe
}) => {
    return (
        <View>
            <Modal 
                isVisible={isVisible} 
                onBackdropPress={close}
                onBackButtonPress={close}
                animationIn={animationIn || 'slideInUp'}
                animationOut={animationOut || 'slideOutDown'}
                animationInTiming={animationInTiming}
                animationOutTiming={animationOutTiming}
                propagateSwipe={propagateSwipe}
            >
                <View style={[styles.container, modalContainer]}>
                    {children}
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
        justifyContent: 'center'
    }
})

export default ModalView;