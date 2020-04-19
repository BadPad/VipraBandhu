import React from 'react'
import { StyleSheet, FlatList, ScrollView } from 'react-native'
import BookingsCardList from '../../utils/BookingsCardList';
import staticData from "../../Reusable_Component/StaticData/BookingsStaticData";
import isEmpty from '../../Reusable_Component/is-empty';
import Heading from '../../Reusable_Component/Heading';

const BookingsList = ({ navigation, route }) => {

    const onSelectBooking = data => {
        navigation.navigate('Booking', { id: data })
    }

    const renderServicesList = ({ item }) => {
        return (
            <BookingsCardList data={item} onSelectBooking={onSelectBooking} />
        )
    }
   
    let filteredList;
    

    

    if(staticData.length > 0){
        filteredList = staticData.filter(list => list.category === 'pooja'); 
    }
       

    if (isEmpty(filteredList) === false) {
        return (
            <ScrollView style={styles.container}>
                <FlatList 
                    keyExtractor={item => item.id.toString()}
                    data={filteredList}
                    renderItem={renderServicesList}
                />
            </ScrollView>
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
        paddingTop:10
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
        margin:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderColor:'#000',
        borderWidth:0.5
    },
    subCategoryTitle: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight:'bold',
        backgroundColor:'#595959',
        color:'#fff',
        padding:3
    }
})

export default BookingsList
