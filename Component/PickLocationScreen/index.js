import React, {useState, useContext} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import locations from './locations'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { ThemeDataContext } from '../../Context/ThemeContext';

const CurrentLocation = () => {
    return (
        <View style={styles.currentLocationContainer}>
            <Text style={styles.currentLocationContainerText}>Use Current Location</Text>
        </View>
    )
}

const SearchLocation = () => {
    return (
        <View style={styles.searchContainer}>
            <View style={styles.inputContainer}>
                <Ionicons style={styles.inputContainerIcon} name="search-outline" size={24} color="black" />
                <TextInput style={styles.inputContainerText} placeholder="Search for Location"/>
            </View>
        </View>
    )
}

const AllOfSrilankaItem = () => {
    return(
        <TouchableOpacity style={styles.itemContainer}>
            <Text style={styles.itemContainerIconText}>All of Sri Lanka</Text>
            <AntDesign name="right" size={20} style={styles.itemContainerIcon} />
        </TouchableOpacity>
    )
}

const LocationItem = ({name, onPress}) => {
    return(
        <TouchableOpacity style={styles.itemContainer} onPress={onPress}> 
            <Text style={styles.itemContainerIconText}>{name}</Text>
        </TouchableOpacity>
    )
}

const BackToAllLocations = ({onPress}) => {
    return(
        <TouchableOpacity style={[styles.backToLocations]} onPress={onPress}>
            <AntDesign name="arrowleft" size={20} style={styles.itemContainerIcon} />
            <Text style={[styles.itemContainerIconText, {marginLeft: 5}]}>Back To All Locations</Text>
        </TouchableOpacity>
    )
}

const SubtitleHeader = ({name}) => {
    return(
        <View style={[styles.itemContainer, {backgroundColor: 'blue'}]}> 
            <Text style={[styles.itemContainerIconText, {color: '#fff'}]}>{name}</Text>
        </View>
    )
}

const LocationSubItem = ({name, onPress}) => {
    return(
        <TouchableOpacity style={styles.itemContainer} onPress={onPress}> 
            <Text style={styles.itemContainerIconText}>{name}</Text>
        </TouchableOpacity>
    )
}

const PickLocationScreen = ({navigation}) => {

    const [viewMain, setViewMain] = useState(true)
    const [subItems, setSubItems] = useState([])
    const [itemTitle, setItemTitle] = useState('')

    const [themeData, setThemeData] = useContext(ThemeDataContext)

    const onPressLocationItem = (items, title) => {
        setSubItems(items)
        setViewMain(false)
        setItemTitle(title)
    }

    const onPressBack = () => {
        setSubItems([])
        setViewMain(true)
        setItemTitle('')
    }

    const SelectLocation = (name) => {
        console.warn(name)
        setThemeData({locationHeader: name, categoryHeader: themeData.categoryHeader})
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <CurrentLocation />
            {viewMain && (
                 <View style={styles.subtitle}>
                    <Text style={styles.subtitleText}>or Select a location</Text>
                </View>
            )}

            {viewMain && (
                 <SearchLocation />
            )}

            {viewMain && (
                 <AllOfSrilankaItem />
            )}
           
            {viewMain && (
                <FlatList
                data={locations}
                renderItem={({item}) => (
                    <LocationItem name={item.name} onPress={() => onPressLocationItem(item.sub, item.name)}  />
                )}
                keyExtractor={(item, index) => index}
                />
            )}

            {!viewMain && (
                <BackToAllLocations onPress={() => onPressBack()} />
            )}

            {!viewMain && (
                <SubtitleHeader name={itemTitle} />
            )}
            
            {!viewMain && (
                <FlatList
                data={subItems}
                renderItem={({item}) => (
                    <LocationSubItem name={item} onPress={() => SelectLocation(item)} />
                )}
                keyExtractor={(item, index) => index}
                />
            )}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    currentLocationContainer: {
        height: 70,
        backgroundColor: '#fff',
        width: '100%',
        justifyContent: 'center',
        padding: 20,
    },
    currentLocationContainerText: {
        fontSize: 16
    },
    subtitle: {
        height: 60,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subtitleText: {
        fontSize: 16
    },
    searchContainer: {
        height: 70,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderBottomColor: '#dcdcde',
        borderBottomWidth: 0.8
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#e8ebee',
        width: '100%',
        height: 60,
        alignItems: 'center'
    },
    inputContainerText: {
        marginLeft: 5
    },
    inputContainerIcon: {
        marginLeft: 10
    },
    itemContainer: {
        height: 80,
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderBottomColor: '#dcdcde',
        borderBottomWidth: 0.8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemContainerIcon: {
        color: '#495050'
    },
    itemContainerIconText: {
        color: '#495050'
    },
    backToLocations: {
        height: 80,
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        borderBottomColor: '#dcdcde',
        borderBottomWidth: 0.8,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default PickLocationScreen