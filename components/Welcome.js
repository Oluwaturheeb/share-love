import React, { useEffect } from 'react';
import { Dimensions, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

let phone = require('./assets/phone1.png');
let phone2 = require('./assets/phone2.jpg');
let phone3 = require('./assets/phone3.jpg');

const Welcome = () => {
  const nav = useNavigation();

  useEffect(() => {
    setTimeout(() => nav.navigate('Home'), 3000);
  }, []);
  return <ImageBackground source={phone2} resizeMethod='resize' resizeMode='stretch' style={{flex: 1, width: Dimensions.get('window').width, height: Dimensions.get('window').height, margin: 0, padding: 0}} />
}
export default Welcome;