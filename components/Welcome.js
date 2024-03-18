import React, { useEffect } from 'react';
import { Dimensions, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

let img = require('./assets/welcome.jpg');

const Welcome = () => {
  const nav = useNavigation();

  useEffect(() => {
    setTimeout(() => nav.navigate('Home'), 1000);
  }, []);
  return <ImageBackground source={img} resizeMethod='resize' resizeMode='stretch' style={{flex: 1, width: Dimensions.get('window').width, height: Dimensions.get('window').height, margin: 0, padding: 0}} />
}
export default Welcome;