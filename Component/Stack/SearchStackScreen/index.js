import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from '../../SearchScreen'

const SearchStack = createStackNavigator()

const SearchStackScreen = () => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen 
            name="Search"
            component={SearchScreen}
            options={{
                headerStyle: {
                    backgroundColor: '#139476',
                },
                headerTitleContainerStyle: {
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                headerTintColor: '#fff',
                headerStatusBarHeight: 40
            }}
            />
        </SearchStack.Navigator>
    )
}

export default SearchStackScreen