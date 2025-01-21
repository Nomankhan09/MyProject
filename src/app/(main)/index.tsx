import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Home from './home'
import Chat from './chat'
import Security from './security'
import Service from './service'
import Profile from './profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const Bottomtabnavigation = () => {
  return (
    <Tab.Navigator>

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () =>
            <Entypo name="home" size={24} color="black" />,
          headerShown: false,
        }} />

      <Tab.Screen
        name="chat"
        component={Chat}
        options={{
          tabBarIcon: () =>
            <Entypo name="chat" size={24} color="black" />,
          headerShown: false,

        }} />

      <Tab.Screen
        name="security"
        component={Security}
        options={{
          tabBarIcon: () =>
            <MaterialIcons name="security" size={25} color="black" />,
          headerShown: false,
        }} />

      <Tab.Screen
        name="service"
        component={Service}
        options={{
          tabBarIcon: () =>
            <Ionicons name="construct" size={24} color="black" />,
          headerShown: false,
        }} />

      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: () =>
            <Entypo name="chat" size={24} color="black" />,
          headerShown: false, // Hide header for this screen
        }} />

    </Tab.Navigator>
  )
}

export default Bottomtabnavigation