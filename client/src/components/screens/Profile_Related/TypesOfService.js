//This is an example code to understand Picker// 
import React from 'react';
//import react in our code. 
import { Picker, View, StyleSheet, Text, ScrollView } from 'react-native';
//import all the components we are going to use. 
export default class TypesOfService extends React.Component {
  state = {choosenLabel: '', choosenindex: ''}
  render() {
    return (
      // enclose all components in this View tag
      <View style={styles.container}>
        {/*Text to show selected picker value*/}
        {/* <Text style = {styles.text}>{this.state.choosenLabel}</Text> */}
        {/*Text to show selected index */}
        {/* <Text style = {styles.text}>{this.state.choosenindex}</Text> */}
        {/*Picker with multiple chose to choose*/}
        {/*selectedValue to set the preselected value if any*/}
        {/*onValueChange will help to handle the changes*/}
            <Picker 
            style = {styles.text}
            selectedValue={this.state.choosenLabel}
            onValueChange={
            (itemValue, itemIndex) => this.setState({
                choosenLabel: itemValue, 
                choosenindex:itemIndex})
            }>
                
                <Picker.Item label = "Full Contract" value = "full" />
                <Picker.Item label = "Labour Contract" value = "labour" />
                <Picker.Item label = "Both" value = "both" />
            </Picker>
      </View>
    );  
  } 
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
    borderWidth:0.5,
    borderColor:'lightgrey'
  },
  text: {
    fontSize: 16,
    padding: 5,
    paddingLeft: 10,
   }
});