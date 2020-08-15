import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, LayoutAnimation } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { App_Color } from './ConstantValues';

export default class Accordian extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            expanded: props.expanded,            
        };
    }

    render() {
        let icon = "md-add";

        if (this.state.expanded) {
            icon = "md-remove";
        }

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
                                color={App_Color}
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
        
        overflow: 'hidden'
    },
    titleContainer: {
        flexDirection: 'row',
        backgroundColor:'#ddd3ee',
        borderBottomColor:'lightgrey',
        borderBottomWidth:1,
        marginBottom:5,
    },
    headerTitle: {
        fontFamily: 'OpenSans-Bold',
        flex: 1,
        padding: 10,
        color: '#000',
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
        paddingTop: 0,
        borderWidth:1,
        borderColor: 'lightgrey',
        marginBottom:5
    }
});