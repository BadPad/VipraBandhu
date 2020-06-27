import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../Reusable_Component/Card/Card'
import CardSection from '../Reusable_Component/Card/CardSection'
import FieldCartButton from '../Reusable_Component/FieldCartButton';
import { serviceOrderConfirm } from '../../redux/actions/bookingCartActions';

const Payment = ({ navigation, bookingCartServices, serviceOrderConfirm }) => {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Card style={styles.paymentContainer}>
                    <CardSection style={styles.paymentCalculation}>
                        <Text style={styles.payableAmt}>Service Amount</Text>
                        <Text style={styles.payableAmt}>Rs {bookingCartServices.amountPayable}</Text>
                    </CardSection>
                    <CardSection style={styles.paymentCalculation}>
                        <Text style={styles.payableAmt}>Wallet Amount</Text>
                        <Text style={styles.payableAmt}>Rs 0</Text>
                    </CardSection>
                    <CardSection style={styles.totalCalculation}>
                        <Text style={styles.totalpayableAmt}>Total Amount Payable</Text>
                        <Text style={styles.totalpayableAmt}>Rs {bookingCartServices.amountPayable}</Text>
                    </CardSection>
                </Card>
            </View>
            <FieldCartButton 
                name="Pay"
                touchButton={styles.touchButton}
                onPress={() => serviceOrderConfirm(bookingCartServices.paymentDataStructured, navigation)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEE8E7'
    },
    contentContainer: {
        margin: 10
    },
    paymentContainer: {
        borderRadius: 8
    },
    paymentCalculation: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 8
    },
    payableAmt: {
        fontSize: 13,
        color: '#3c3b37',
        fontWeight: '100'
    },
    totalCalculation: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderTopColor: '#EEE8E7',
        borderTopWidth: 0.8,
    },
    totalpayableAmt: {
        fontWeight: 'bold'
    },
    touchButton: {
        justifyContent: 'center'
    }
})

Payment.propTypes = {
    bookingCartServices: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    bookingCartServices: state.bookingCartServices
})

const mapDispatchToProps = { serviceOrderConfirm }

export default connect(mapStateToProps, mapDispatchToProps)(Payment)
