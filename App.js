import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import About from './components/About'
//import Joke from './components/Joke'
import JokeQuiz from './components/JokeQuiz'
import Response from './components/Response'
import History from './components/History'
import Homepage from './components/Homepage'
import Setting from './components/Setting'
import { StackNavigator, TabNavigator } from 'react-navigation'

let mainNavigation = TabNavigator ({
  Home : {screen: Homepage},
  JokeQuiz : {screen: JokeQuiz},
//  History : {screen: History},
  About : {screen: About},
  Setting: {screen:Setting},
  
}, {

  tabBarPosition: 'bottom',
  initialRouteName: "Home",
  tabBarOptions: {
    
          activeTintColor: '#662483',
    
          labelStyle: {
            fontSize: 12,
          },
          style: {
            paddingVertical:10,
            backgroundColor: 'white',
            height: 60
          },
    
        }
    
}
);
mainNavigation.navigationOptions = {
title: 'Humoris'
}
export default mainNavigation;


