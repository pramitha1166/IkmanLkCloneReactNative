import React, {useContext} from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import styles from './style'
import { ThemeDataContext } from '../../../Context/ThemeContext'


const FilterButton = ({icon, text, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Ionicons style={styles.btnIcon} name={icon} size={25} color='#139476' />
            <Text style={styles.btnText}>{text}</Text>
        </TouchableOpacity>
    )
}

const FilterIcon = () => {
    return (
        <TouchableOpacity style={styles.filterIcon}>
            <FontAwesome name="filter" size={30} color="#139476" />
        </TouchableOpacity>
    )
}

const Filter = ({navigation}) => {

    const [themeData, setThemeData] =  useContext(ThemeDataContext);

    return (
        <View style={styles.filterContainer}>
            <FilterButton icon="location" text={themeData.locationHeader} onPress={() => {
                navigation.navigate('Location')
            }} />
            <FilterButton icon="pricetag" text={themeData.categoryHeader} onPress={() => {
                navigation.navigate('Category')
            }} />
            <FilterIcon />
        </View>
    )
}

export default Filter