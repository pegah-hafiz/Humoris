import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity , Image, TabBarIOS, NavigationIOS, NavigatorIOS} from 'react-native'
import { TextButton, RaisedTextButton } from 'react-native-material-buttons'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import BottomNavigation, { Tab , NavigationComponent } from 'react-native-material-bottom-navigation'

import History from './History'
import Setting from './Setting'
import About from './About'

let mainNavigation = TabNavigator ({
  Home : {screen: Homepage},
  History : {screen:  History},
  About : {screen: About}
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#ffffff',
    activeBackgroundColor: 'red'
  }
}
);
mainNavigation.navigationOptions = {
title: 'Humoris'
}
export default mainNavigation