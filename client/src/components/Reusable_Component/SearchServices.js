import React, { Component } from 'react';
import { Text, View, FlatList, Platform, UIManager, LayoutAnimation, StyleSheet, TouchableOpacity } from 'react-native';
import SearchBar from "./Search/SearchBar";
import GradientCard from "./Search/GradientCard";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { CustomLayoutSpring } from "react-native-animation-layout";
import stylesImported, { centerSubtitleStyle } from "./Search/styles/styles";

import Icon from 'react-native-vector-icons/AntDesign'
import Card from './Card/Card';
import CardSection from './Card/CardSection';

class SearchServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            seed: 1,
            query: "",
            isLoading: true,
            refreshing: false,
            dataBackup: this.props.services,
            dataSource: this.props.services,
            show: false,
        };

        if (Platform.OS === "android") {
            UIManager.setLayoutAnimationEnabledExperimental &&
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillReceiveProps(nextProps) {
        const { services } = nextProps;
        if(services !== null) {
            this.setState({
                dataBackup: services,
                dataSource: services
            })
        }
    }

    filterList = text => {
        if (text === '') {
            this.HideComponent();
        }
        else {
            this.ShowComponent();
            var newData = this.state.dataBackup;
            newData = this.state.dataBackup.filter(item => {
                const itemData = item.serviceName.toLowerCase();
                const textData = text.toLowerCase();
                return itemData.startsWith(textData);
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
                key={item.serviceName}
                id={item.serviceId}
                title={item.serviceName}
                style={stylesImported.cardStyle}
                imageSource={item.serviceImages}
                centerTitle={item.value}
                subtitle={item.shortName}
                onSelectService={selected => this.props.navigation.navigate('Service', { id: selected })}
                width={ScreenWidth * 0.9}
                centerSubtitle={item.change}
                shadowStyle={stylesImported.cardShadowStyle}
                centerSubtitleStyle={centerSubtitleStyle(item)}
            />
        );
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

    searchNavigate = data => {
        this.props.searchServices(data);
        this.filterList("");
        this.props.navigation.navigate('ServicesList', { category: 'purohit' });
    }

    render() {
        const { route } = this.props;
        return (
            <View>
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
                        onPress={e => e.nativeEvent.text !== '' ? this.searchNavigate(e.nativeEvent.text) : console.log('Empty search')}
                    />
                </View>
                {route.name === 'ServicesList' &&
                <Card>
                    <CardSection style={styles.filterSection}>
                        <Text>Hello</Text>
                        <TouchableOpacity>
                            <Icon name="filter"></Icon>
                        </TouchableOpacity>
                    </CardSection>
                </Card>}
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    filterSection: {
        justifyContent: 'space-between',
        paddingHorizontal: 6
    }
})

export default SearchServices;