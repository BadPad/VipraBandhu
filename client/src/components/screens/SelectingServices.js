import React, { Component } from 'react';
import { StyleSheet, View, Text, Modal, TouchableHighlight, ScrollView } from 'react-native';
import SelectMultiple from 'react-native-select-multiple';

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

class SelectingServices extends React.Component {

    state = {
        modalVisible: false,
        selectedPooja: [],
        selectedHoma: [],
        selectedFunctions: [],
        selectedShradha: [],
        showPooja: true,
        showHoma: true,
        showFunctions: true,
        showShradha: true,
      };

    ShowHidePooja = () => {
      if (this.state.showPooja == true) {
        this.setState({ showPooja: false });
      } else {
        this.setState({ showPooja: true });
      }
    };
    ShowHideHoma = () => {
      if (this.state.showHoma == true) {
        this.setState({ showHoma: false });
      } else {
        this.setState({ showHoma: true });
      }
    };
    ShowHideFunctions = () => {
      if (this.state.showFunctions == true) {
        this.setState({ showFunctions: false });
      } else {
        this.setState({ showFunctions: true });
      }
    };
    ShowHideShradha = () => {
      if (this.state.showShradha == true) {
        this.setState({ showShradha: false });
      } else {
        this.setState({ showShradha: true });
      }
    };

    onSelectionsChange = (selectedPooja) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedPooja })
    }
    
    onSelectionsChange = (selectedHoma) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedHoma })
    }
    
    onSelectionsChange = (selectedFunctions) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedFunctions })
    }
    
    onSelectionsChange = (selectedShradha) => {
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
                            <View>
                              <TouchableHighlight onPress={this.ShowHidePooja}>
                                <Text style={styles.heading}>Pooja List</Text>
                              </TouchableHighlight>
                              {!this.state.showPooja ? (
                              <SelectMultiple
                              items={pooja}                            
                              /* renderLabel={renderLabel} */
                              selectedItems={this.state.selectedPooja}                            
                              onSelectionsChange={this.onSelectionsChange} />
                              ) : null}
                            </View>
                            <View>
                              <TouchableHighlight onPress={this.ShowHideHoma}>
                                <Text style={styles.heading}>Homa List</Text>
                              </TouchableHighlight>
                              {!this.state.showHoma ? (
                              <SelectMultiple                                                        
                              /* renderLabel={renderLabel} */                            
                              items={homa}
                              selectedItems={this.state.selectedHoma}
                              onSelectionsChange={this.onSelectionsChange} />
                              ) : null}
                            </View>
                            <View>
                              <TouchableHighlight onPress={this.ShowHideFunctions}>
                                <Text style={styles.heading}>Functions</Text>
                              </TouchableHighlight>
                              {!this.state.showFunctions ? (
                              <SelectMultiple                                                        
                              /* renderLabel={renderLabel} */                            
                              items={functions}
                              selectedItems={this.state.selectedFunctions}
                              onSelectionsChange={this.onSelectionsChange} />
                              ) : null}
                            </View>
                            <View>
                              <TouchableHighlight onPress={this.ShowHideShradha}>
                                <Text style={styles.heading}>Shradha</Text>
                              </TouchableHighlight>
                              {!this.state.showShradha ? (
                              <SelectMultiple                                                        
                              /* renderLabel={renderLabel} */                            
                              items={shradha}
                              selectedItems={this.state.selectedShradha}
                              onSelectionsChange={this.onSelectionsChange} />
                              ) : null}
                            </View>
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                this.setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>Submit</Text>
                            </TouchableHighlight>
                        </ScrollView>
                        </View>
                        
                    </View>
                </Modal>
                
                    <TouchableHighlight
                    style={styles.openButtonm}
                    onPress={() => {
                      this.setModalVisible(true);
                    }}
                    >
                        <Text style={styles.textStyles}> Select your Services</Text>
                    </TouchableHighlight>
                                   
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
      padding: 10
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
      marginTop: 10
    }
  });

export default SelectingServices

