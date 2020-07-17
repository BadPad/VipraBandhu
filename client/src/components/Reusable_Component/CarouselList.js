import React, { Component } from 'react';
import { Text, View, Dimensions, ImageBackground, Image, LayoutAnimation, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from "react-native-snap-carousel";
import LinearGradient from "react-native-linear-gradient";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { scrollInterpolator, animatedStyles } from '../utils/CarouselAnimation';
import { getMonthDate } from '../utils/GetUniqueDates';


const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);
//const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 6);

class CarouselList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.festivals,
            type: this.props.type,
            Ads: [
                {
                    AdName: "Sumadhwa Seva",
                    Ad1: "For details on Festivals, Pooja",
                    Ad2: "www.sumadhwaseva.com",
                    Ad3: "Narahari Sumadhwa @ 9042719165",
                    AdImage: "http://www.sumadhwaseva.com/wp-content/uploads/2009/01/Madhwarayaru-190x300.jpg",
                    Color1: "#051937",
                    Color2: "#008793",
                },
                {
                    AdName: "Omkar Melodies",
                    Ad1: "Karoake's : All languages",
                    Ad2: "Orchestra: Marriage Functions",
                    Ad3: "Contact: Sridhar Dixit @ 9845040962",
                    AdImage: "http://www.sumadhwaseva.com/wp-content/uploads/2009/08/udupi-krishnaa.jpg",
                    Color1: "#aa076b",
                    Color2: "#61045f",
                },
                {
                    AdName: "Advertisment Banner",
                    Ad1: "",
                    Ad3: "",
                    Ad2: "Contact: Guru Prasad @ 9945226465",
                    AdImage: "http://www.sumadhwaseva.com/wp-content/uploads/2009/02/sri-vishnu-teertharu-madanooru1.jpg",
                    Color1: "#434343",
                    Color2: "#000000",
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
            colors={["#09203f", "#537895"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1, width:'80%' }}>
                <View style={styles.upFestSlideView}>
                    <Text style={styles.upFestName}>{item.festivalName}</Text>
                    <Text style={styles.upFestDate}>{`(${getMonthDate(item.festivalDate)})`}</Text>
                </View>
            </LinearGradient>
        );
    }

    _renderAds = ({ item, index }) => {
        //var imageUrl = require('../images/' + item.AdImage);
        //console.warn(item.AdImage)

        return (
            <View style={styles.AdSlideView}>
                <ImageBackground source={require('../images/red_bg.png')}
                    style={styles.imgBackground}>
                    <LinearGradient
                        //colors={["#09203f", "#537895"]}
                        colors={[item.Color1, item.Color2]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.linearGradient}
                    >
                        <View style={styles.Ad_Outer}>
                            <View style={styles.Ad_Image_View}>
                                <Image
                                    style={{width:'100%', height:'100%', marginLeft:'auto', marginRight:'auto', borderRadius:5, borderWidth:0.5, borderColor:'#fff'}}
                                    //source={require('../images/Snacks.png')}
                                    source={{ uri: item.AdImage}}
                                    //source={item.AdImage}
                                />
                            </View>

                            <View style={styles.Ad_Content_View}>
                                <Text style={styles.AdName}>{item.AdName}</Text>
                                <Text style={styles.Ad}>{item.Ad1}</Text>
                                <Text style={styles.Ad}>{item.Ad2}</Text>
                                <Text style={styles.Ad}>{item.Ad3}</Text>
                            </View>
                        </View>


                    </LinearGradient>
                </ImageBackground>
            </View>
        );
    }

    openLink() {
        Linking.openURL('http://www.sumadhwaseva.com').catch((err) => console.error('An error occurred', err));

    }



    render() {
        const aa = this.state.data;

        // const SLIDER_WIDTH = Dimensions.get('window').width;
        // const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.66);
        // const ITEM_WIDTH_Ad = Math.round(SLIDER_WIDTH * 0.95);

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
                // <Carousel
                //     ref={(c) => { this._carousel = c; }}
                //     data={this.state.Ads}
                //     renderItem={this._renderAds}
                //     sliderWidth={ITEM_WIDTH_Ad}
                //     itemWidth={ITEM_WIDTH_Ad}
                //     autoplay={true}
                //     enableMomentum={false}
                //     lockScrollWhileSnapping={true}
                //     loop={true}
                //     containerCustomStyle={styles.CarouselStyle}
                // />
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.Ads}
                    renderItem={this._renderAds}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    autoplay={true}
                    enableMomentum={false}
                    lockScrollWhileSnapping={true}
                    loop={true}
                    containerCustomStyle={styles.CarouselStyle}
                    inactiveSlideShift={0}
                    scrollInterpolator={scrollInterpolator}
                    slideInterpolatedStyle={animatedStyles}
                    useScrollView={true}

                />
            )
        }


    }
}

const styles = StyleSheet.create({
    Ad_Outer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    Ad_Image_View: {
        width: '20%',
        padding:10
    },
    Ad_Content_View: {
        width: '80%',
        padding:10
    },
    Ad_Image1: {
        width: 50,
        height: 200,
        resizeMode: 'stretch',

    },
    upFestSlideView: {
        width: '100%',
        justifyContent: 'center',
        padding:5
    },
    CarouselStyle: {
        borderColor: 'transparent',

    },
    imgBackground: {
        width: '100%',
        flex: 1
    },
    linearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.95,
        justifyContent: 'center',
        alignItems: 'center'
    },
    AdSlideView: {
        width: ITEM_WIDTH,

        alignItems: 'center',
        justifyContent: 'center',
        padding:5,
        backgroundColor: '#fff'
    },
    Ad: {
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'OpenSans-Regular',
        fontSize: hp('1.8%')
    },
    AdName: {
        fontSize: hp('2.3%'),
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'OpenSans-Bold',
        textDecorationLine:'underline'
    },
    upFestName: {
        width: '100%',
        fontSize: hp(2.5),
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'OpenSans-Regular'
    },
    upFestDate: {
        fontSize: hp(2),
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