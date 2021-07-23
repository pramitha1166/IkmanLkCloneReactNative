import React from 'react'
import { View, Text, TouchableOpacity, Switch } from 'react-native'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';

import styles from './style'

const BuyNowAdd = () => {

    let [fontLoaded] = useFonts({
        'Roboto-Italic': require('../../../assets/Fonts/Roboto-Italic.ttf')
    })

    if(!fontLoaded) {
        return <AppLoading />
    }else {
        return (
            <View style={styles.buyNowAdd}>
                <MaterialCommunityIcons style={styles.buyNowAddIcon} name="truck-fast" size={33} color="#139476" />
                <Text style={[styles.buyNowAddText, {fontFamily: 'Roboto-Italic', fontStyle: 'italic', fontWeight: 'bold', color: '#139476'}]}>Buy Now</Text>
                <TouchableOpacity style={styles.buyNowAddBtn}>
                    <FontAwesome name="question-circle-o" size={24} color="#139476" />
                </TouchableOpacity>
            </View>
        )
    }

   
}

const BuyNow = () => {
    return (
        <View style={styles.buyNowContainer}>
            <BuyNowAdd />
            <Switch style={styles.switchBtn} />
        </View>
    )
}

export default BuyNow