import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';

// import screens 
import Welcome from './components/Welcome';
import Home from './components/Home';
import Viewer from './components/Viewer';
import CameraView from './components/Camera';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={Welcome} options={{headerShown: false}} />
        <Stack.Screen name='Home' component={Home} options={{headerTitle: 'EnvCam'}} />
        <Stack.Screen name='Viewer' component={Viewer} options={{headerTitle: 'EnvCam'}} />
        <Stack.Screen name='Camera' component={CameraView} options={{headerTitle: 'EnvCam'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};


export default App;
