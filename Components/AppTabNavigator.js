import React from 'react'
import {Text, View, TouchableOpacity, Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import BookDonateScreen from '../Screens/BookDonateScreen'
import BookRequestScreen from '../Screens/BookRequestScreen'

export const AppTabNavigator = createBottomTabNavigator({
    Donate : {
        screen : BookDonateScreen,
      
    },
    RequestBooks : {
        screen : BookRequestScreen,
      
         
    }
})