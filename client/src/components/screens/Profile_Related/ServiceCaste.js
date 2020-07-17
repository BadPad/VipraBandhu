import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, FlatList } from 'react-native';
import ModalView from '../../Reusable_Component/ModalView';
import SelectMultiple from 'react-native-select-multiple';
import FieldButton from '../../Reusable_Component/FieldButton';
import isEmpty from '../../Reusable_Component/is-empty';

const ServiceCaste = ({ caste, selectedCaste, selectedItems }) => {

  const [isModal, setIsModal] = useState(false);

  function setID(item, index) {
    const newFormat = {"label": item,"value": `${index}`};
    return newFormat;
  }

  const output = caste && caste.map(setID);
  // console.log(output)

  const modalContent = (
    <>
      <View>
        <Text style={styles.text}>Caste Preferred</Text>
        {/* <FlatList 
          keyExtractor={service => service.id.toString()}
          data={output}
          renderItem={renderServices}
        /> */}

      <SelectMultiple 
        items={output} 
        selectedItems={selectedItems}
        onSelectionsChange={onSelectedData => selectedCaste(onSelectedData)}
      />
      </View>
      <View>
        <FieldButton 
          butonContainer={styles.butonContainer}
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
              animationIn="fadeInDownBig"
              animationOut="fadeOutDownBig"
              children={modalContent}
            />
            <Text style={styles.textStyles}>{!isEmpty(selectedItems) ? ` Selected (${selectedItems.length})` : ' Preferred Caste'}</Text>
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
    borderRadius: 2,
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 3,
    padding: 5,
    paddingLeft: 5,
    borderWidth:0.5,
    borderColor: 'rgba(68,68,68,1)',
    height: 40
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
    fontSize: 17,
    marginTop: 3
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
  }
})

export default ServiceCaste
