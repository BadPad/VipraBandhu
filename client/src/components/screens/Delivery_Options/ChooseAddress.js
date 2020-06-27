import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Card from '../../Reusable_Component/Card/Card';
import CardSection from '../../Reusable_Component/Card/CardSection';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ChooseAddress = ({
    navigation,
    auth
}) => {
    const { user } = auth;

    let address = auth.user.area + ', ' + auth.user.city + ', ' + auth.user.state;
    return (
        <ScrollView>
            <Card>
                <TouchableOpacity onPress={() => navigation.navigate('AddNewAddress')}>
                    <CardSection style={styles.newAddressContainer}>
                        <MaterialCommunityIcons name="plus-circle-outline" color="#D63031" size={22}/>
                        <Text style={styles.addNewText}>Add a new address</Text>
                    </CardSection>
                </TouchableOpacity>
            </Card>
            <Card>
                <TouchableOpacity>
                    <CardSection>
                        <Text>{address}</Text>
                    </CardSection>
                </TouchableOpacity>
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    newAddressContainer: {
        paddingVertical: 10
    },
    addNewText: {
        paddingLeft: 10,
        fontWeight: 'bold'
    }
})

ChooseAddress.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(ChooseAddress)
