import React, { Component } from "react";
//import { View, Text, StyleSheet, Button } from 'react-native';
import { View, ScrollView, Text, Button, StyleSheet, Platform, FlatList, StatusBar, UIManager, SafeAreaView, LayoutAnimation, TouchableOpacity, Image } from 'react-native';
//import { LineChart } from "react-native-svg-charts";
//import SearchBar from "react-native-dynamic-search-bar";
import SearchBar from "../Reusable_Component/Search/SearchBar";
//import GradientCard from "react-native-gradient-card-view";
import GradientCard from "../Reusable_Component/Search/GradientCard";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { CustomLayoutSpring } from "react-native-animation-layout";

import staticData from "../Reusable_Component/Search/staticData";
import stylesImported, { centerSubtitleStyle } from "../Reusable_Component/Search/styles/styles";

export default class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            seed: 1,
            query: "",
            isLoading: true,
            refreshing: false,
            dataBackup: staticData,
            dataSource: staticData,
            show: false,
        };

        if (Platform.OS === "android") {
            UIManager.setLayoutAnimationEnabledExperimental &&
                UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }



    render() {

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={stylesImported.container}>
                        <SearchBar
                            onPressToFocus
                            autoFocus={false}
                            fontColor="#000"
                            iconColor="#000"
                            //shadowColor="#282828"
                            cancelIconColor="#000"
                            //backgroundColor="#232f3e"
                            placeholder="Search for a service"
                            onChangeText={text => {
                                this.filterList(text);
                            }}
                            onPressCancel={() => {
                                this.filterList("");
                                this.HideComponent();
                            }}
                            onPress={() => console.log("onPress")}
                        />
                    </View>
                    {this.state.show ? (
                        <View style={stylesImported.flatListStyle}>

                            <FlatList
                                onRefresh={this.onRefresh}
                                data={this.state.dataSource}
                                onEndReached={this.loadMore}
                                refreshing={this.state.refreshing}
                                renderItem={({ item }) => this.renderItem(item)}
                            />

                        </View>
                    ) : null}
                    <View style={styles.imageContainer}>
                        <TouchableOpacity style={styles.imageContainerTouchable} onPress={this._onPressButton}>
                            <Image resizeMode='contain'
                                style={styles.images}
                                source={require('../images/Fest-Banner.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity style={styles.imageContainerTouchable} onPress={this._onPressButton}>
                            <Image
                                style={styles.images2}
                                source={require('../images/Ads.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:10, backgroundColor:'#fff'}}>
                        <Text style={{ textAlign:'center', fontWeight:'bold', fontSize: 15 }}>Our Services</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent:'space-between', backgroundColor:'#fff' }}>
                        <View style={{ width: 180, height: 150, marginLeft:15 }} >
                            <TouchableOpacity style={styles.imageContainerTouchable2} onPress={this.pooja}>
                                <Image
                                    style={styles.images3}
                                    source={require('../images/pooja.png')}
                                />
                                <Text style={{ textAlign:'center', fontWeight:'bold' }}>Purohit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: 180, height: 150, marginRight: 15 }} >
                            <TouchableOpacity style={styles.imageContainerTouchable2} onPress={this.catering}>
                                <Image
                                    style={styles.images3}
                                    source={require('../images/catering.jpg')}
                                />
                                <Text style={{ textAlign:'center', fontWeight:'bold' }}>Cook</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </ScrollView>
            </View>
        )
    }

    filterList = text => {
        if (text === '') {
            this.HideComponent();
        }
        else {
            this.ShowComponent();
            var newData = this.state.dataBackup;
            newData = this.state.dataBackup.filter(item => {
                const itemData = item.name.toLowerCase();
                const textData = text.toLowerCase();
                return itemData.indexOf(textData) > -1;
            });
            LayoutAnimation.configureNext(CustomLayoutSpring(null, null, "scaleXY"));
            this.setState({
                query: text,
                dataSource: newData
            });
        }
    };



    renderItem(item) {
        return (
            <GradientCard
                key={item.name}
                title={item.name}
                style={stylesImported.cardStyle}
                imageSource={item.image}
                centerTitle={item.value}
                subtitle={item.shortName}
                width={ScreenWidth * 0.9}
                centerSubtitle={item.change}
                shadowStyle={stylesImported.cardShadowStyle}
                centerSubtitleStyle={centerSubtitleStyle(item)}
            />
        );
    }

    pooja = () => {
        this.props.navigation.navigate('ServicesList', { category: 'pooja' })
    }

    catering = () => {
        this.props.navigation.navigate('ServicesList', { category: 'catering' })
    }

    onRefresh = () => {
        this.setState({
            dataSource: [],
            isLoading: false,
            refreshing: true,
            seed: 1,
            page: 1
        });
        // this.fetchData();
    };

    loadMore = () => {
        this.setState({
            // refreshing: true,
            page: this.state.page + 1
        });
        // this.fetchData();
    };

    HideComponent = () => {
        this.setState({ show: false });
    };

    ShowComponent = (text) => {
        this.setState({ show: true });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C8C8C8'
    },
    title: {
        alignItems: "center",
        marginBottom: 10
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
    ImageContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',

    },
    imageContainerTouchable: {
        backgroundColor: '#fff',
        marginTop: 10
    },
    imageContainerTouchable2: {
        backgroundColor: '#fff',
        
    },
    button: {
        width: 100
    },
    images: {
        width: '95%',
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
        shadowRadius: 10,
        shadowColor: 'blue',
        marginTop: 10,

    },
    images2: {
        width: '95%',
        height: 150,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
        marginTop: 10,
    },
    images3: {
        width: '95%',
        height: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
        marginTop: 10,
    }
})


