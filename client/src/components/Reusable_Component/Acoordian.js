import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, LayoutAnimation } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Accordian extends Component {
    constructor(props) {
        super(props);


        this.state = {
            title: props.title,
            //expanded: false,
            expanded: props.expanded,
            
        };

    }

    render() {
        let icon = "ios-arrow-down";

        if (this.state.expanded) {
            icon = "ios-arrow-up";
        }

        //Step 5
        return (
            <View style={[styles.container]}>
                <View style={styles.titleContainer} >
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                            this.setState({
                                expanded: !this.state.expanded,
                            });
                        }}
                        underlayColor="#fff">
                        <View style={styles.touch}>
                            <Text style={styles.headerTitle}>{this.state.title}</Text>

                            <Icon style={styles.iconCart} name={icon} size={20}
                                color="#D63031"
                            ></Icon>
                        </View>
                    </TouchableHighlight>
                </View>
                {this.state.expanded && (
                    <View style={styles.body}>
                        {this.props.children}
                    </View>
                )}
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',        
        overflow: 'hidden'
    },
    titleContainer: {
        flexDirection: 'row',
        backgroundColor:'#fff',
        borderBottomColor:'lightgrey',
        borderBottomWidth:1
    },
    headerTitle: {
        fontFamily: 'OpenSans-Bold',
        flex: 1,
        padding: 10,
        color: '#2a2f43',
        fontSize: 15,
        textTransform: 'capitalize'
    },
    button: {
        width: '100%',
        alignSelf: 'center'
    },
    buttonImage: {
        width: 30,
        height: 25
    },
    touch: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconCart: {
        paddingRight: 20
    },
    body: {
        padding: 10,
        paddingTop: 0
    }
});