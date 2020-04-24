import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

const { width, height } = Dimensions.get('window')

const BottomScrollSheet = ({
    bottomSheetRef,
    snapPoints,
    renderInner,
    initialSnap
}) => {

    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
            </View>
        </View>
    )

    const renderContent = () => (
        <View style={styles.panel}>
            {renderInner}
        </View>
    )

    return (
        <BottomSheet 
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            renderContent={renderContent}
            renderHeader={renderHeader}
            initialSnap={initialSnap}
        />
    )
}

const styles = StyleSheet.create({
    header: {
        // backgroundColor: '#f7f5eee8',
        backgroundColor: '#EEE9E9',
        shadowColor: '#000',
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba( 0 , 0 , 0 , 0.251 )',
        marginBottom: 10,
    },
    panel: {
        height: 280,
        paddingHorizontal: 20,
        backgroundColor: '#EEE9E9',
    }
})

export default BottomScrollSheet
