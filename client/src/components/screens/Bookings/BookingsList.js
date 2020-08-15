import React, { useEffect } from "react";
import { StyleSheet, FlatList, ScrollView, Dimensions, AsyncStorage, Alert, Clipboard, Text } from 'react-native'
import BookingsCardList from '../../utils/BookingsCardList';
import isEmpty from '../../Reusable_Component/is-empty';
import Heading from '../../Reusable_Component/Heading';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { myBookingsOrders, getPurohitBookings, getCookBookings } from '../../../redux/actions/myBookingActions';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { App_Color, Font_Name_Regular, Font_Name_Bold } from '../../Reusable_Component/ConstantValues';


const BookingsList = ({ navigation, route, auth, myBookingsOrders, myOrders, getPurohitBookings, purohitBookings, getCookBookings, cookBookings }) => {

    const onSelectBooking = (data, type) => {
        navigation.navigate('Booking', { rowData: data, userType: type })
    }

    useEffect(() => {
        if (auth.userType === 'customer') {
            myBookingsOrders()
        }
        else if (auth.userType === 'purohit') {
            getPurohitBookings()
        }
        else if (auth.userType === 'cook') {
            getCookBookings()
        }
    }, [])

    const FirstRoute = () => {

        let currentUserType = auth.userType;
        let pendingData = null;
        let cancelledData = null;


        AsyncStorage.getItem('SukalpaSeva')
            .then(res => {
                if (res) {
                    // console.log(res)
                    const sukalpaSevaToken = JSON.parse(res);
                    const { ss_auth, ss_user } = sukalpaSevaToken;
                    
                }
            })
            .catch(err => {
                console.log(err)
            })

        if (currentUserType === 'customer') {
            if (myOrders.myBookingsOrdersList != null) {
                pendingData = myOrders.myBookingsOrdersList.pending_bookings
                //cancelledData = myOrders.myBookingsOrdersList.pending_bookings
            }
        }
        else if (currentUserType === 'purohit') {
            if (purohitBookings.getPurohitBookingsList != null) {
                pendingData = purohitBookings.getPurohitBookingsList.pending_bookings
            }
        }
        else if (currentUserType === 'cook') {
            if (cookBookings.getCookBookingsList != null) {
                pendingData = cookBookings.getCookBookingsList.pending_bookings
            }
        }

        return (
            <ScrollView style={[styles.scene, { backgroundColor: '#fdfcfa' }]}>
                {
                    //Check if the pending data is empty or atleast have one item
                    pendingData != null ?
                        <FlatList
                            //keyExtractor={item => item.bookingID.toString()}
                            data={pendingData}
                            renderItem={({ item, index }) => (
                                <BookingsCardList navigation={navigation} currentData={item} onSelectBooking={onSelectBooking} status={"pending"} userType={auth.userType} isNotification={false} />
                            )}
                        />
                        : null
                }
            </ScrollView>
        )
    }

    const SecondRoute = () => {
        let currentUserType = auth.userType;
        let activeData = null;

        if (currentUserType === 'customer') {
            if (myOrders.myBookingsOrdersList != null) {
                activeData = myOrders.myBookingsOrdersList.active_bookings
            }
        }
        else if (currentUserType === 'purohit') {
            if (purohitBookings.getPurohitBookingsList != null) {
                activeData = purohitBookings.getPurohitBookingsList.active_bookings
            }
        }
        else if (currentUserType === 'cook') {
            if (cookBookings.getCookBookingsList != null) {
                activeData = cookBookings.getCookBookingsList.active_bookings
            }
        }
        else {

        }

        return (
            <ScrollView style={[styles.scene, { backgroundColor: '#fdfcfa' }]}>
                {
                    //Check if the pending data is empty or atleast have one item
                    activeData != null ?
                        <FlatList
                            //keyExtractor={item => item.bookingID.toString()}
                            data={activeData}
                            renderItem={({ item, index }) => (
                                <BookingsCardList navigation={navigation} currentData={item} onSelectBooking={onSelectBooking} status={"active"} userType={auth.userType} isNotification={false} />
                            )}
                        />
                        : null
                }
            </ScrollView>

        )
    }

    const ThirdRoute = () => {
        let newData;
        // if (auth.userType === "purohit") {
        //     newData = staticData.filter(list => list.userType === 'purohit')
        // }
        // else if (auth.userType === "cook") {
        //     newData = staticData.filter(list => list.userType === 'cook')
        // }
        // else if (auth.userType === "customer") {
        //     newData = staticData.filter(list => list.userType === 'customer')
        // }

        return (
            <ScrollView style={[styles.scene, { backgroundColor: 'lightgrey' }]}>
                {/* <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={newData.filter(list => list.status === 'completed')}
                    renderItem={({ item, index }) => (
                        <BookingsCardList data={item} onSelectBooking={onSelectBooking} status={"completed"} />
                    )}
                /> */}
            </ScrollView>
        )
    }

    const initialLayout = { width: Dimensions.get('window').width };

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: (auth.userType === 'customer') ? 'TRACKING' : 'PENDING' },
        { key: 'second', title: (auth.userType === 'customer') ? 'CONFIRMED' : 'ACCEPTED' },
        { key: 'third', title: 'COMPLETED' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });





    return (
        <>
            <TabView
                labelStyle={styles.labelStyle}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={props => (
                    <TabBar
                        {...props}

                        tabStyle={styles.tabStyle}
                        style={styles.tab}
                        renderLabel={({ route, focused, color }) => (
                            <Text style={{ color, fontSize: wp('3.8') }}>
                                {route.title}
                            </Text>
                        )}
                    />
                )}
            />
        </>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        paddingTop: 10
    },
    containernoResult: {
        paddingBottom: 0
    },
    noResult: {
        fontSize: 20
    },
    noResultTag: {
        fontSize: 11
    },
    subCategory: {
        backgroundColor: '#fff',
        margin: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderColor: '#000',
        borderWidth: 0.5
    },
    subCategoryTitle: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: '#595959',
        color: '#fff',
        padding: 3
    },
    tabStyle: {
        backgroundColor: App_Color,
        fontFamily: Font_Name_Bold,
    },
    tab: {
        fontFamily: Font_Name_Regular,
        fontWeight: 'bold'
    },
    labelStyle: {
        fontSize: 20
    }
})

BookingsList.propTypes = {
    auth: PropTypes.object.isRequired,
    myBookingsOrders: PropTypes.object.isRequired,
    myOrders: PropTypes.object.isRequired,
    getPurohitBookings: PropTypes.object.isRequired,
    purohitBookings: PropTypes.object.isRequired,
    getCookBookings: PropTypes.object.isRequired,
    cookBookings: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    myOrders: state.myBookingsOrders,
    purohitBookings: state.getPurohitBookings,
    cookBookings: state.getCookBookings
})

const mapDispatchToProps = { myBookingsOrders, getPurohitBookings, getCookBookings }
//const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BookingsList)
