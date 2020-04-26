//This is an example code to understand Picker// 
import React from 'react';
//import react in our code. 
import { Picker, View, StyleSheet, Text, ScrollView } from 'react-native';
//import all the components we are going to use. 
export default class PurohitCaste extends React.Component {
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
        <ScrollView>
        <Text style = {styles.texts}>Your Caste:</Text>
            <Picker 
            style = {styles.text}
            selectedValue={this.state.choosenLabel}
            onValueChange={
            (itemValue, itemIndex) => this.setState({
                choosenLabel: itemValue, 
                choosenindex:itemIndex})
            }>
                
                <Picker.Item label = "Maadhwa Brahmin" value = "maadhwa" />
                <Picker.Item label = "Smaartha Brahmin" value = "smaartha" />
                <Picker.Item label = "Iyengar" value = "iyengar" />
            </Picker>
        </ScrollView>
      </View>
    );  
  } 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  text: {
      fontSize: 20,
      marginLeft: 8
      //alignSelf: 'center',
   },
   texts: {
    fontSize: 12,
    alignSelf: 'center'
   }
});