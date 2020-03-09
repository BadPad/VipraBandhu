import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.heading}>ವಿಪ್ರ ಬಂಧು</Text>
                <Text style={styles.subHeading}>ಧಿಯೋ ಯೋ ನಃ ಪ್ರಚೋದಯಾತ್</Text>
            </View>
            <View style={styles.about}>

            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button 
                        title="Register" 
                        onPress={() => navigation.navigate('Register')}
                        color="#3e206d"
                    />
                </View>
                <View style={styles.button}>
                    <Button 
                        title="Login" 
                        onPress={() => navigation.navigate('Login')}
                        color="#3e206d"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#f0e3ff'
    },
    title: {
        alignItems: "center"
    },
    heading: {
        padding: 10,
        fontSize: 40
    },
    subHeading: {
        letterSpacing: 1,
        fontSize: 17
    },
    buttonContainer: {
        padding: 30,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    button: {
        width: 100
    }
})

export default Home;
