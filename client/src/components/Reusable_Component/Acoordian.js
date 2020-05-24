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
                    <Text style={styles.headerTitle}>{this.state.title}</Text>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                            this.setState({
                                expanded: !this.state.expanded,
                            });
                        }}
                        underlayColor="#fff">

                        <Icon style={styles.iconCart} name={icon} size={20}
                            color="#D63031"
                        ></Icon>
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
        overflow: 'hidden',
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
    },
    button: {
        width: 30,
        alignSelf: 'center'
    },
    buttonImage: {
        width: 30,
        height: 25
    },
    body: {
        padding: 10,
        paddingTop: 0
    }
});