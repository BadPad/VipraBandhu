import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, FlatList } from 'react-native';
import ModalView from '../../Reusable_Component/ModalView';
import MultiSelectionAccordian from '../../utils/MultiSelectionAccordian';
import FieldButton from '../../Reusable_Component/FieldButton';

const ServiceSelect = ({ services, selectedServices, selectedItems }) => {

  const [isModal, setIsModal] = useState(false);

  const category = services.filter(list => list.serviceCategory === 'purohit');

  const subCatList = category.map(list => list.serviceSubCategory).filter((value, index, self) => self.indexOf(value) === index)
  
  const servicesList = subCatList.map((list,i) => {
    const subCatType = services.filter(service => service.serviceSubCategory === list)
    return {
      name: list,
      id: i,
      services: subCatType.map(list => {
        return {
          label: list.serviceName, 
          value: list.serviceId
        }
      })
    }
  })

  const renderServices = ({ item, index }) => {
    return (
      <MultiSelectionAccordian 
        key={index} 
        data={item} 
        selectedData={selectedData => selectedServices(selectedData)} 
        selectedItems={selectedItems}
      />
    )
  }

  const modalContent = (
    <>
      <View>
        <Text style={styles.text}>Select your Services</Text>
        <FlatList 
          keyExtractor={service => service.id.toString()}
          data={servicesList}
          renderItem={renderServices}
        />
      </View>
      <View>
        <FieldButton 
          butonContainer={styles.butonContainer}
          buttonTouch={styles.buttonTouch}
          name="Confirm"
          onPress={() => setIsModal(!isModal)}
        />
      </View>
    </>
  )

  return (
    <View style={styles.centeredView}>
      <View style={styles.serviceView}>
        <TouchableHighlight
          style={styles.openButtonm}
          onPress={() => setIsModal(!isModal)}
        >
          <View>
            <ModalView 
              isVisible={isModal}
              modalContainer={styles.modalContainer}
              close={() => setIsModal(!isModal)}
              children={modalContent}
            />
            <Text style={styles.textStyles}> Select Services</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {

  },
  serviceView: {
    width: "100%",
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 3,
    padding: 5,
    paddingLeft: 5,
    borderWidth:0.5,
    borderColor:'lightgrey'
  },
  openButtonn: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 10,
    marginTop: 20
  },
  modalContainer: {
    flex:1,
    justifyContent: "space-between",
    padding: 0
  },
  textStyles: {
    color: '#000',
    fontSize: 17
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  butonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  buttonTouch: {
    backgroundColor: '#D63031'
  }
})

export default ServiceSelect
