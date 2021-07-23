import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import SettingsScrren from '../../SettingsScreen'

const SettingStack = createStackNavigator()

const SettingsStackScreen = () => {
    return (
        <SettingStack.Navigator>
            <SettingStack.Screen 
             name="Settings"
             component={SettingsScrren}
             options={{
                headerStyle: {
                    backgroundColor: '#139476',
                },
                headerTitleContainerStyle: {
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                headerTintColor: '#fff',
             }}
            />
        </SettingStack.Navigator>
    )
}

export default SettingsStackScreen