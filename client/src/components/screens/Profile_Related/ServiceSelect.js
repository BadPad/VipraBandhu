import React, { Component } from 'react';
import { StyleSheet, View, Text, Modal, TouchableHighlight, ScrollView } from 'react-native';
import SelectMultiple from 'react-native-select-multiple';
import Accordian from '../../Reusable_Component/Acoordian';

import Icon from 'react-native-vector-icons/AntDesign';

const pooja = ['Satyanarayana Pooje', 'Punyavarchane', 'Vaaskal / Baagilu Pooje', 'Naandi', 'Devara Pooje – Mane devara Pooje', 'Navagraha Pooje / Japa', 'Durga Pooje / Durga Namaskara', 'Ganapathi Pooje (On Ganesha Chaturthi)', 'Swarna Gouri Pooje', 'Anantha Padmanabha Vratha', 'Mangala gowri Vratha', 'Bheeemana Amavasye Vratha', 'Navagraha Japa / Shanthi']

const homa = ['Pavamana Homa','Ashlesha Bali', 'Dhanvantri Homa']

const functions = ['Namakarana', 'Upanayana', 'Madhwe', 'Choula']

const shradha = ['Vaikunta Samaradhana', 'Thithi', 'Paksha']
// --- OR ---
// const fruits = [
//   { label: 'Apples', value: 'appls' },
//   { label: 'Oranges', value: 'orngs' },
//   { label: 'Pears', value: 'pears' }
// ]

/* const renderLabel = (label, style) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
         <Image style={{width: 42, height: 42}} source={{uri: 'https://dummyimage.com/100x100/52c25a/fff&text=S'}} />
        <View style={{marginLeft: 10}}>
          <Text style={style}>{label}</Text>
        </View>
      </View>
    )
  } */

class ServiceSelect extends React.Component {

    state = {
        modalVisible: false,
        selectedPooja: [],
        selectedHoma: [],
        selectedFunctions: [],
        selectedShradha: [],
        
        /* showHoma: true,
        showFunctions: true,
        showShradha: true, */
      };
    

    onSelectionsChange = (selectedPooja) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedPooja })
    }
    
    onSelectionChange = (selectedHoma) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedHoma })
    }
    
    onSelectChange = (selectedFunctions) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedFunctions })
    }
    
    onSelectionsChanges = (selectedShradha) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedShradha })
    } 

    setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
    }

    render() {
        const { modalVisible } = this.state;
        return (
            <View style={styles.centeredView}>
                
                <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                
                >
                
                    <View style={styles.centeredView}>
                        
                        <View style={styles.modalView}>
                        <ScrollView>
                            <Text style={styles.text}>Select your Services</Text>

                            <Accordian title="Pooja List">
                                <SelectMultiple
                                items={pooja}                            
                                
                                selectedItems={this.state.selectedPooja}                            
                                onSelectionsChange={this.onSelectionsChange} />
                            </Accordian>
                            <Accordian title="Homa List">
                                <SelectMultiple
                                items={homa}                            
                                
                                selectedItems={this.state.selectedHoma}                            
                                onSelectionsChange={this.onSelectionChange} />
                            </Accordian>
                            <Accordian title="Functions">
                                <SelectMultiple
                                items={functions}                            
                                
                                selectedItems={this.state.selectedFunctions}                            
                                onSelectionsChange={this.onSelectChange} />
                            </Accordian>
                            <Accordian title="Shradha">
                                <SelectMultiple
                                items={shradha}                            
                                
                                selectedItems={this.state.selectedShradha}                            
                                onSelectionsChange={this.onSelectionsChanges} />
                            </Accordian>
                            
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                this.setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>Confirm</Text>
                            </TouchableHighlight>
                        </ScrollView>
                        </View>
                        
                    </View>
                </Modal>
                  <View style={styles.serviceView}>
                    <TouchableHighlight
                    style={styles.openButtonm}
                    onPress={() => {
                      this.setModalVisible(true);
                    }}
                    >
                        <Text style={styles.textStyles}> Select Services</Text>
                    </TouchableHighlight>
                  </View>               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    centeredView: {
      
      
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 5,
      //alignItems: "center",
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
      backgroundColor: "#FFF",
      borderRadius: 20,
      padding: 10,
      marginTop: 20
    },
    openButtonn: {
      backgroundColor: "#FFF",
      borderRadius: 20,
      padding: 10,
      marginTop: 20
    },
    textStyle: {
      color: "#000",
      textAlign: "center"
    },
    textStyles: {
      color: "#000",
      //padding: 10,
      fontSize: 17,
      //marginBottom: 10
    },
    modalText: {
      marginBottom: 15,
    },
    text: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20
    },
    heading: {
      fontSize: 20,
      marginTop: 20,
      textAlign: "center",
      borderRadius: 20,
      backgroundColor: "#000",
      color: "#fff"
    },
    dropdownarrow: {
      color: "#fff"
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
    }
  });

export default ServiceSelect

