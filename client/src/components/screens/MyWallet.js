import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';



const Wallet = ({ auth, navigation }) => {

  return (
    <>
      <ScrollView>
        <View style={styles.header}>          
            <View style={styles.headerContent}>            
                <Text style={styles.name1}>              
                Wallet
                </Text>
                <Text style={styles.name2}>
                Rs.300
                </Text>
            </View>
        </View>  
        <View>
            <Text style={{ fontSize: 18, padding: 15, fontWeight: 'bold', color: 'green' }}>My Recent Transactions</Text>
            <View style={styles.row}>          
              <View>
                  <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Transaction id - 27363736</Text>
                    <Text style={styles.mblTxt}>Rs. 50</Text>
                  </View>
                  <View style={styles.msgContainer}>
                    <Text style={styles.msgTxt}>10/6/2020</Text>
                  </View>
              </View>
            </View>  

            <View style={styles.row}>          
              <View>
                  <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Transaction id - 27363736</Text>
                    <Text style={styles.mblTxt}>Rs. 50</Text>
                  </View>
                  <View style={styles.msgContainer}>
                    <Text style={styles.msgTxt}>11/6/2020</Text>
                  </View>
              </View>
            </View> 

            <View style={styles.row}>          
              <View>
                  <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Transaction id - 27363736</Text>
                    <Text style={styles.mblTxt}>Rs. 50</Text>
                  </View>
                  <View style={styles.msgContainer}>
                    <Text style={styles.msgTxt}>12/6/2020</Text>
                  </View>
              </View>
            </View> 

            <View style={styles.row}>          
              <View>
                  <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Transaction id - 27363736</Text>
                    <Text style={styles.mblTxt}>Rs. 50</Text>
                  </View>
                  <View style={styles.msgContainer}>
                    <Text style={styles.msgTxt}>13/6/2020</Text>
                  </View>
              </View>
            </View> 

            <View style={styles.row}>          
              <View>
                  <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Transaction id - 27363736</Text>
                    <Text style={styles.mblTxt}>Rs. 50</Text>
                  </View>
                  <View style={styles.msgContainer}>
                    <Text style={styles.msgTxt}>14/6/2020</Text>
                  </View>
              </View>
            </View> 

            <View style={styles.row}>          
              <View>
                  <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Transaction id - 27363736</Text>
                    <Text style={styles.mblTxt}>Rs. 50</Text>
                  </View>
                  <View style={styles.msgContainer}>
                    <Text style={styles.msgTxt}>15/7/2020</Text>
                  </View>
              </View>
            </View> 
        </View>
      </ScrollView>

    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#D63031",
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
    fontWeight: 'bold'    
  },
  name1: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  name2: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: '600',
    textAlign: 'right'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },  
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 16,
    width: 260,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
});

export default Wallet