import React, {useState, useContext} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import categories from './categories';
import { ThemeDataContext } from '../../../Context/ThemeContext';

const SearchCategory = () => {
    return (
        <View style={styles.searchContainer}>
            <View style={styles.inputContainer}>
                <Ionicons style={styles.inputContainerIcon} name="search-outline" size={24} color="black" />
                <TextInput style={styles.inputContainerText} placeholder="Search for Location"/>
            </View>
        </View>
    )
}

const AllOfCategory = () => {
    return(
        <TouchableOpacity style={styles.itemContainer}>
            <Text style={styles.itemContainerIconText}>Go to all ads</Text>
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

const LocationSubItem = ({name, onPress}) => {
    return(
        <TouchableOpacity style={styles.itemContainer} onPress={onPress}> 
            <Text style={styles.itemContainerIconText}>{name}</Text>
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

const BackToAllCategories = ({onPress}) => {
    return(
        <TouchableOpacity style={[styles.backToCategories]} onPress={onPress}>
            <AntDesign name="arrowleft" size={20} style={styles.itemContainerIcon} />
            <Text style={[styles.itemContainerIconText, {marginLeft: 5}]}>Back To All Locations</Text>
        </TouchableOpacity>
    )
}

const PickCategoryScreen = ({navigation}) => {

    const [subItems, setSubItems] = useState([])
    const [itemTitle, setItemTitle] = useState('')
    const [viewMain, setViewMain] = useState(true)

    const [themeData, setThemeData] = useContext(ThemeDataContext)

    const onPressCategoryItem = (items, title) => {
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
        setThemeData({locationHeader: themeData.locationHeader, categoryHeader: name})
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>

            {viewMain && (
                <SearchCategory />
            )}
            
            {viewMain && (
                <AllOfCategory />
            )}

            {!viewMain && (
                <SubtitleHeader name={itemTitle} />
            )}

            {!viewMain && (
                <BackToAllCategories onPress={() => onPressBack()}  />
            )}

            {viewMain && (
                <FlatList 
                data={categories}
                renderItem={({item}) => (
                    <LocationItem name={item.name} onPress={() => onPressCategoryItem(item.sub, item.name)} />
                )}
                keyExtractor={(item, index) => index}
                />
            )}

            {!viewMain && (
                <FlatList
                data={subItems}
                renderItem={({item}) => (
                    <LocationSubItem name={item} onPress={() => SelectLocation(item)} />
                )}
                />
            )}
            
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1
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
    backToCategories: {
        height: 80,
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        borderBottomColor: '#dcdcde',
        borderBottomWidth: 0.8,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default PickCategoryScreen
