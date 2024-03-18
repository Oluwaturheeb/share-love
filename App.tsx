import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Image, View, Text} from 'react-native';

// import screens 
import Welcome from './components/Welcome';
import Home from './components/Home';
import Viewer from './components/Viewer';
import { Colors } from 'react-native-paper';
let img = require('./components/assets/img.png');

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={Welcome} options={{headerShown: false}} />
        <Stack.Screen name='Home' component={Home} options={{headerTitle: 'shareLuv'}} />
        <Stack.Screen name='View' component={Viewer} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};


export default App;
