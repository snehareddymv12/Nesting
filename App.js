import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './second/ProfileScreen';
import SettingsScreen from './second/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab=createBottomTabNavigator();
const HomeStack=createNativeStackNavigator();
const SettingsStack=createNativeStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
       <Tab.Navigator>
       <Tab.Screen name="First" initialRouteName="Profile">
          {() => (
            <SettingsStack.Navigator   screenOptions={{headerShown:false}}>
              <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
              />
              <SettingsStack.Screen name="Profile" component={ProfileScreen} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Second">
          {() => (
            <HomeStack.Navigator screenOptions={{headerShown:false}}>
              <HomeStack.Screen name="Home" component={HomeScreen} />
              <HomeStack.Screen name="Details" component={DetailsScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        </Tab.Navigator>
    </NavigationContainer>
  )
}
