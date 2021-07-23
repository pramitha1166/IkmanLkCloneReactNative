import React from 'react'
import { View, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import styles from './style'
import Filter from './Fiter'
import BuyNow from './BuyNow'
import AddList from './AddList'

const HomeScreen = ({navigation}) => {


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Filter navigation={navigation} />
                <BuyNow />
                <AddList navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen