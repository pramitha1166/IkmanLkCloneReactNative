import { StatusBar } from 'expo-status-bar';
import React, {useContext} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons, Entypo, FontAwesome, Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' 
import HomeScreen from './Component/HomeScreen';
import HomeStackScreen from './Component/Stack/HomeStackScreen';
import { ThemeDataProvider } from './Context/ThemeContext';
import SettingsStackScreen from './Component/Stack/SettingsStackScreen';
import SearchStackScreen from './Component/Stack/SearchStackScreen';

function SettingsScreen() {
  return (
    <View style={styles.settings}>
      <Text>Settings Screen</Text>
    </View>
  )
}

function PostAddScreen() {
  return (
    <View style={styles.postAdd}>
      <Text>Post Add</Text>
    </View>
  )
}

function ChatScreen() {
  return (
    <View style={styles.postAdd}>
      <Text>Chat Screen</Text>
    </View>
  )
}

function ProfileScreen() {
  return (
    <View style={styles.postAdd}>
      <Text>Profile Screen</Text>
    </View>
  )
}

export default function App() {



  const Tabs = createBottomTabNavigator()


  const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
      style={styles.customButton}
      onPress={onPress}
    >
      <View
        style={styles.btnInner}
      >
        {children}
      </View>
    </TouchableOpacity>
  )


  return (
    <ThemeDataProvider>
      <NavigationContainer>

        <Tabs.Navigator
          tabBarOptions={{
            showLabel: false,
            style:[styles.tabStyles,styles.shadow]
          }}
          
        >
          <Tabs.Screen 
            name="HomeStack" 
            component={HomeStackScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={styles.iconView}>
                  <Entypo name="home" size={25} style={{color: focused ? '#139476' : '#6b7272'}} />
                </View>
              )
            }}
            />
          <Tabs.Screen 
            name="SearchStack" 
            component={SearchStackScreen} 
            options={{
              tabBarIcon: ({focused}) => (
                <View style={styles.iconView}>
                  <Ionicons name="search-sharp" size={25} style={{color: focused ? '#139476' : '#6b7272'}} />
                </View>
              ),
            }}  
            />
            <Tabs.Screen
              name="Post"
              component={PostAddScreen}
              options={{
                tabBarIcon: ({focused}) => (
                  <FontAwesome name="plus-circle" size={30} style={styles.shadow} />
                ),
                tabBarButton: (props) => (
                  <CustomTabBarButton {...props} />
                )
              }}
            />
            <Tabs.Screen 
              name="Chat"
              component={ChatScreen}
              options={{
                tabBarIcon: ({focused})=> (
                  <View style={styles.iconView}>
                    <Ionicons name="chatbubbles" size={25} style={{color: focused ? '#139476' : '#6b7272'}} />
                  </View>
                )
              }}
            />
            <Tabs.Screen 
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({focused})=> (
                  <View style={styles.iconView}>
                    <FontAwesome name="user" size={25} style={{color: focused ? '#139476' : '#6b7272'}} />
                  </View>
                )
              }}
            />
        </Tabs.Navigator>
      </NavigationContainer>
    </ThemeDataProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settings: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  postAdd: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabStyles: {
    position: 'absolute',
    backgroundColor: '#ffffff',
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  customButton: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnInner: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: '#ffcc04'
  }
});
