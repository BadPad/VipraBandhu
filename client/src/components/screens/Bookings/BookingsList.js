import React from 'react'
import { StyleSheet, FlatList, ScrollView, Dimensions, View } from 'react-native'
import BookingsCardList from '../../utils/BookingsCardList';
import staticData from "../../Reusable_Component/StaticData/BookingsStaticData";
import isEmpty from '../../Reusable_Component/is-empty';
import Heading from '../../Reusable_Component/Heading';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

//const userType = "customer";
//const userType = "purohit";
//const userType = "cook";

const BookingsList = ({ navigation, route, auth }) => {
    
    const onSelectBooking = data => {
        navigation.navigate('Booking', { id: data })
    }

    const FirstRoute = () => {
        console.warn(auth.userType);
        let newData;
        if (auth.userType === "purohit") {
            newData = staticData.filter(list => list.userType === 'purohit')
        }
        else if (auth.userType === "cook") {
            newData = staticData.filter(list => list.userType === 'cook')
        }
        else if (auth.userType === "customer") {
            newData = staticData.filter(list => list.userType === 'customer')
        }

        return (
            <ScrollView style={[styles.scene, { backgroundColor: 'lightgrey' }]}>
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={newData.filter(list => list.status === 'pending')}
                    renderItem={({ item, index }) => (
                        <BookingsCardList data={item} onSelectBooking={onSelectBooking} status={"pending"} userType={auth.userType}/>
                    )}
                />

            </ScrollView>
        )
    }

    const SecondRoute = () => {
        let newData;
        if (auth.userType === "purohit") {
            newData = staticData.filter(list => list.userType === 'purohit')
        }
        else if (auth.userType === "cook") {
            newData = staticData.filter(list => list.userType === 'cook')
        }
        else if (auth.userType === "customer") {
            newData = staticData.filter(list => list.userType === 'customer')
        }

        return (
            <ScrollView style={[styles.scene, { backgroundColor: 'lightgrey' }]}>
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={newData.filter(list => list.status === 'accepted')}
                    renderItem={({ item, index }) => (
                        <BookingsCardList data={item} onSelectBooking={onSelectBooking} status={"accepted"} />
                    )}
                />
            </ScrollView>
        )
    }

    const ThirdRoute = () => {
        let newData;
        if (auth.userType === "purohit") {
            newData = staticData.filter(list => list.userType === 'purohit')
        }
        else if (auth.userType === "cook") {
            newData = staticData.filter(list => list.userType === 'cook')
        }
        else if (auth.userType === "customer") {
            newData = staticData.filter(list => list.userType === 'customer')
        }

        return (
            <ScrollView style={[styles.scene, { backgroundColor: 'lightgrey' }]}>
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={newData.filter(list => list.status === 'completed')}
                    renderItem={({ item, index }) => (
                        <BookingsCardList data={item} onSelectBooking={onSelectBooking} status={"completed"} />
                    )}
                />
            </ScrollView>
        )
    }

    const initialLayout = { width: Dimensions.get('window').width };

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Pending' },
        { key: 'second', title: 'Accepted' },
        { key: 'third', title: 'Completed' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });

    let filteredList;
    if (staticData.length > 0) {
        filteredList = staticData.filter(list => list.category === 'pooja');
    }


    if (isEmpty(filteredList) === false) {
        return (
            <>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={initialLayout}
                    renderTabBar={props => (
                        <TabBar
                            {...props}

                            tabStyle={styles.tabStyle}
                            style={styles.tab}
                        />
                    )}
                />
            </>
        )
    } else {
        return (
            <>
                <Heading containerStyle={styles.containernoResult} style={styles.noResult} name={'There are no bookings currently to show'} />
            </>
        )
    }
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
        backgroundColor: '#D63031',
        fontFamily: 'OpenSans-Bold',
    },
    tab: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 'bold'
    }
})

BookingsList.propTypes = {
    auth: PropTypes.object.isRequired,
  }
  
  const mapStateToProps = state => ({
    auth: state.auth,
  })

  const mapDispatchToProps = { 
    
  }

export default connect(mapStateToProps, mapDispatchToProps)(BookingsList)
