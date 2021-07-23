import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../../HomeScreen'
import PickLocationScreen from '../../PickLocationScreen'
import PickCategoryScreen from '../../HomeScreen/PickCategoryScreen'
import { Ionicons, Entypo, AntDesign  } from '@expo/vector-icons'; 
import ItemDetails from '../../ItemDetails/ItemDetails'

const HomeStack = createStackNavigator()

function Logo() {
    return (
       <View style={{flex: 1, flexDirection: 'row'}}>
            <Image
            style={{width: 130, height: 40,position: 'relative', bottom: 10}}
            source={require('../../../assets/images/logo2.png')}
            />
       </View>
    )
}

const HomeStackScreen = ({navigation}) => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
                headerStyle: {
                    backgroundColor: '#139476',
                },
                headerTitleContainerStyle: {
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                headerTintColor: '#fff',
                headerTitle: props => <Logo {...props} />,
                headerStatusBarHeight: 50
            }}
             />
             <HomeStack.Screen
             name="Location"
             component={PickLocationScreen}
             options={{
                 headerStyle: {
                     backgroundColor: '#139476'
                 },
                 headerLeft: () => <Ionicons name="close" size={30} color="white"
                 style={styles.closeBtn} 
                 onPress={() => {    
                    // navigation.reset({
                    //     index: 0,
                    //     routes: [{name: 'Home'}]
                    // })
                    //navigation.goBack()
                    navigation.navigate('Home', {screen: 'Home'})
                 }} />,
                 headerTitle: props => (
                     <Text style={styles.headerText}>
                         Pick a Location
                     </Text>
                 )
             }}
             />
             <HomeStack.Screen 
             name="Category"
             component={PickCategoryScreen}
             options={{
                headerStyle: {
                    backgroundColor: '#139476'
                },
                headerLeft: () => <Ionicons name="close" size={30} color="white"
                style={styles.closeBtn} 
                onPress={() => {
                    navigation.navigate('Home', {screen: 'Home'})
                }} />,
                headerTitle: props => (
                    <Text style={styles.headerText}>
                        Pick a Category
                    </Text>
                )
             }}
             />
             <HomeStack.Screen 
             name="Details"
             component={ItemDetails}
             options={{
                headerStyle: {
                    backgroundColor: '#139476'
                },
                headerLeft: () => <AntDesign name="arrowleft" size={30} color="white"
                style={styles.closeBtn} 
                onPress={() => {
                    navigation.navigate('Home', {screen: 'Home'})
                }} />,
                headerTitle: props => (
                    <Text style={styles.headerText}>
                        Details
                    </Text>
                ),
                headerRight: () => (
                    <View style={styles.detailsHeader}>  
                        <Entypo style={styles.detailsHeaderIcon} name="share" size={24} color="black" />
                        <Entypo style={styles.detailsHeaderIcon} name="star-outlined" size={24} color="black" />
                    </View>
                )
             }}
             />
        </HomeStack.Navigator>
    )
}

const styles = StyleSheet.create({
    closeBtn: {
        position: 'relative',
        top: 2,
        left: 8,
        padding: 5
    },
    headerText: {
        fontSize: 25,
        color: '#fff',
        marginLeft: 10
    },
    detailsHeader: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'relative',
        top: 10,
        right: 8,
        padding: 5
    },
    detailsHeaderIcon: {
        marginRight: 10,
        color: '#fff'
    }
})

export default HomeStackScreen