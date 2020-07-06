import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ServiceSelect from './ServiceSelect';
import isEmpty from '../../Reusable_Component/is-empty';
import TypesOfService from './TypesOfService';
import ServiceCaste from './ServiceCaste';
import FieldButton from '../../Reusable_Component/FieldButton';

const ServiceDetails = ({ 
    formData, 
    auth,
    updatedForm,
    services,
    casteList,
    updateProfile
}) => {
    const { userType } = auth;
    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentBlock}>
                {userType === 'purohit' &&
                <>
                    <Text style = {styles.texts}>Select Services: <Text style={{ color: 'red', fontSize: 18, paddingLeft: 10 }}>*</Text></Text>
                    <ServiceSelect 
                        services={services && services.fullServiceList}
                        selectedServices={selectedServices => updatedForm({...formData, selectedServices})}
                        selectedItems={formData.selectedServices}
                    />
                    {isEmpty(formData.selectedServices) === false && (
                        <View style={styles.selectedItems}>
                        {formData.selectedServices.map(list => (
                            <Text  style={styles.selectedText} key={list.value}>{list.label}</Text>
                        ))}
                        </View>
                    )}
                </>}
                {userType === 'cook' || userType === 'purohit' ?
                <>
                    <Text style={styles.texts}>Service Type: <Text style={{ color: 'red', fontSize: 18, paddingLeft: 10 }}>*</Text></Text>                            
                    <TypesOfService
                        selectedTypeOfService={typeOfService => updatedForm({...formData, typeOfService})}
                        selectedItem={formData.typeOfService}
                    />
                    <Text style = {styles.texts}>Preferred Caste: <Text style={{ color: 'red', fontSize: 18, paddingLeft: 10 }}>*</Text></Text>
                    <ServiceCaste 
                        caste={casteList && casteList}
                        selectedCaste={serviceCastes => updatedForm({... formData, serviceCastes})}
                        selectedItems={formData.serviceCastes}
                    />
                    {/* <FieldButton 
                        name="Update Profile"
                        onPress={updateProfile}
                    /> */}
                </>
                : null}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    },
    contentBlock: {
        marginHorizontal: 10
    },
    texts: {
        fontSize: 13,
        marginTop: 10,
        paddingLeft: 5,
        color: "#696969"
    },
    selectedItems: {
        

        margin: 2,
        width:'70%'
    },
    selectedText: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 7,
        margin: 2
    }
})

export default ServiceDetails
