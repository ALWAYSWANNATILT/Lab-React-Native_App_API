import {StatusBar} from 'expo-status-bar';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SQLite from 'react-native-sqlite-storage'


import Home from './src/Home';
import Profile from './src/Profile';

const Navigator = createStackNavigator({
  Home: { screen: Home},
  Profile: { screen: Profile },
});


const App = createAppContainer(Navigator);

export default App;