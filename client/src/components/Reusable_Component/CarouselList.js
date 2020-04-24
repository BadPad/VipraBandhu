import React, { Component } from 'react';
import { Text, View, Dimensions, ImageBackground, UIManager, LayoutAnimation, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from "react-native-snap-carousel";
import LinearGradient from "react-native-linear-gradient";

class CarouselList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.festivals,
            type: this.props.type,
            Ads: [
                {
                    AdName: "Sumadhwa Seva",
                    Ad1: "For details on Festivals, Pooja, Madhwa Parampare refer",
                    Ad2: "www.sumadhwaseva.com",
                    Ad3: "Contact: Narahari Sumadhwa @ 9042719165",
                    AdImage: "red_bg.png"
                },
                {
                    AdName: "Omkar Melodies",
                    Ad1: "Karoake's : All languages",
                    Ad2: "Orchestra: Marriage Functions",
                    Ad3: "Contact: Sridhar Dixit @ 9845040962",
                    AdImage: "red_bg.png"
                },
                {
                    AdName: "Advertisment Banner",
                    Ad1: "",
                    Ad3: "",
                    Ad2: "Contact: Guru Prasad @ 9945226465",
                    AdImage: "red_bg.png"
                },
            ],
        };
    }


    componentWillReceiveProps(nextProps) {
        const { festivals } = nextProps;
        if (festivals !== null) {
            this.setState({
                data: festivals,
            })
        }
    }



    _renderFestivals = ({ item, index }) => {
        return (

            <LinearGradient
                colors={['#b70b0d', '#c2240b', '#b70b0d']} style={{ flex: 1 }}>
                <View style={styles.upFestSlideView}>
                    <Text style={styles.upFestName}>{item.festivalName}</Text>
                    <Text style={styles.upFestDate}>{this.getParsedDate(item.festivalDate)}</Text>
                </View>
            </LinearGradient>
        );
    }

    getParsedDate(date) {
        date = String(date).split('T')[0];
        var date1 = new Date(date);
        var dd = date1.getDate();
        var mm = date1.getMonth() + 1;
        var yyyy = date1.getFullYear();

        if(mm === 4){
            mm = "Apr"
        }
        else if(mm === 5){
            mm = "May"
        }
        
        return "(" + dd + "-" + mm +  "-" +yyyy + ")";
    }

    _renderAds = ({ item, index }) => {
        if (item.AdName === 'Sumadhwa Seva') {
            return (
                <View style={styles.upFestSlideView}>
                    <ImageBackground source={require('../images/red_bg.png')}
                        style={{ width: '100%' }}>
                        <Text style={styles.AdName}>{item.AdName}</Text>
                        <Text style={styles.Ad}>{item.Ad1}</Text>
                        <Text style={styles.Ad}>{item.Ad2}</Text>
                        <Text style={styles.Ad}>{item.Ad3}</Text>
                    </ImageBackground>
                </View>
            );
        }
        else if (item.AdName === 'Omkar Melodies') {
            return (
                <View style={styles.upFestSlideView}>
                    <ImageBackground source={require('../images/blue_bg.png')}
                        style={{ width: '100%' }}>
                        <Text style={styles.AdName}>{item.AdName}</Text>
                        <Text style={styles.Ad}>{item.Ad1}</Text>
                        <Text style={styles.Ad}>{item.Ad2}</Text>
                        <Text style={styles.Ad}>{item.Ad3}</Text>
                    </ImageBackground>
                </View>
            );
        }
        else {
            return (
                <View style={styles.upFestSlideView}>
                    <ImageBackground source={require('../images/purple_bg.png')}
                        style={{ width: '100%' }}>
                        <Text style={styles.AdName}>{item.AdName}</Text>
                        <Text style={styles.Ad}>{item.Ad1}</Text>
                        <Text style={styles.Ad}>{item.Ad2}</Text>
                        <Text style={styles.Ad}>{item.Ad3}</Text>
                    </ImageBackground>
                </View>
            );
        }
    }

    openLink() {
        Linking.openURL('http://www.sumadhwaseva.com').catch((err) => console.error('An error occurred', err));

    }



    render() {
        const aa = this.state.data;

        const SLIDER_WIDTH = Dimensions.get('window').width;
        const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.66);
        const ITEM_WIDTH_Ad = Math.round(SLIDER_WIDTH * 0.95);

        const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

        if (this.state.type === 'fest') {
            return (
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.data}
                    renderItem={this._renderFestivals}
                    sliderWidth={ITEM_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    autoplay={true}
                    enableMomentum={false}
                    lockScrollWhileSnapping={true}
                    loop={true}
                />
            )
        }
        else if (this.state.type === 'Ads') {
            return (
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.Ads}
                    renderItem={this._renderAds}
                    sliderWidth={ITEM_WIDTH_Ad}
                    itemWidth={ITEM_WIDTH_Ad}
                    autoplay={true}
                    enableMomentum={false}
                    lockScrollWhileSnapping={true}
                    loop={true}
                />
            )
        }


    }
}

const styles = StyleSheet.create({
    upFestSlideView: {
        width: '100%',

    },
    Ad: {
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'OpenSans-Regular'
    },
    AdName: {
        fontSize: 18,
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'OpenSans-Regular'
    },
    upFestName: {
        width: '100%',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'OpenSans-Regular'
    },
    upFestDate: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'OpenSans-Regular'
    },
})

// CarouselList.propTypes = {
//     upcomingFestivals: PropTypes.object.isRequired
// }

// const mapStateToProps = state => ({
//     upcomingFestivals : state.upcomingFestivals
// })

// const mapDispatchToProps = { upcomingFestivals }



//export default connect(mapStateToProps, mapDispatchToProps) (CarouselList);

export default CarouselList;