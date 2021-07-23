import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../HomeScreen'

const TopTabBars = () => {

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{title: 'Ikman'}} 
            />
        </Stack.Navigator>
    )
}

export default TopTabBars