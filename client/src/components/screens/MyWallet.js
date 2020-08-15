import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Share,
  Clipboard,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWalletInfo } from '../../redux/actions/walletActions';
import Icon from 'react-native-vector-icons/AntDesign';



const Wallet = ({ auth, navigation, getWalletInfo, wallet }) => {

  useEffect(() => {
    getWalletInfo();    
  }, [])

  console.log(wallet)

  const walletcode = wallet.getWalletInfo && wallet.getWalletInfo.ReferralCode;
  //const result = str.fontcolor("green");
  //console.log(walletcode + 'code');

  const shareOptions = {
    title: 'Sukalpa Seva App',  
    message: `Download SukalpaSeva, The one stop solution with Expertise, Hygiene &amp, Quality assured for all your home events. Get Rs 50 Cash on signing up with my referral code ${walletcode} to be redeemed on your 1 st successful service`, // Note that according to the documentation at least one of "message" or "url" fields is required
    url: '',
    subject: 'Sukalpa Seva App'
  };

  const onSharePress = () => Share.share(shareOptions);
  const copyMessage = () => {
    Clipboard.setString(`Download SukalpaSeva, The one stop solution with Expertise, Hygiene &amp, Quality assured for all your home events. Get Rs 50 Cash on signing up with my referral code ${walletcode} to be redeemed on your 1 st successful service`);
    alert('Copied to Clipboard!');
  }
  const referralCodeCopy = () => {
    Clipboard.setString(`Referral Code - ${walletcode}`);
    alert('Copied to Clipboard!');
  }
  return (
      <ScrollView>
        {wallet.getWalletInfo && wallet.getWalletInfo.Amount &&
        <View style={styles.header}>          
            <View style={styles.headerContent}>            
                <Text style={styles.name1}>              
                Wallet
                </Text>
                <Text style={styles.name2}>
                Rs. {wallet.getWalletInfo.Amount}
                </Text>
            </View>
        </View>}
          
        {wallet.getWalletInfo && wallet.getWalletInfo.Amount &&  
        <View style={styles.row}>          
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">Invite your Friends</Text>              
              <TouchableOpacity onPress={copyMessage}>
                <Icon name="copy1" style={styles.mblTxt1} />                
              </TouchableOpacity>
              <TouchableOpacity onPress={onSharePress}>
                <Icon name="sharealt" style={styles.mblTxt} />                
              </TouchableOpacity>              
            </View>
            <View style={styles.msgContainer}>
            <TouchableOpacity onPress={referralCodeCopy}>
              <Text style={styles.msgTxt} selectable>Referral code - <Text style={styles.referralCode}>{wallet.getWalletInfo.ReferralCode}</Text></Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>}
        {/* <View>
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
        </View> */}
        
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6D04B8",
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
    marginLeft: 10,
    fontWeight: '600',
    color: '#222',
    fontSize: 16,
    width: 260,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 22,
  },
  mblTxt1: {
    fontWeight: '200',
    color: '#777',
    fontSize: 22,
    paddingRight: 8
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#222',
    fontSize: 12,
    marginLeft: 10,
  },
  referralCode: {
    color:  '#008B8B',
    fontWeight: 'bold',
    textDecorationLine: 'underline',    
  }
});

Wallet.propTypes = {
  getWalletInfo: PropTypes.func.isRequired,  
  wallet: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  wallet: state.wallet
})

const mapDispatchToProps = { getWalletInfo }

export default connect(mapStateToProps, mapDispatchToProps)(Wallet)