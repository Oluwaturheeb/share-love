import React, { useState } from 'react';
import { Alert, ImageBackground, Share, ToastAndroid, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Colors, IconButton, Text, Title, TouchableRipple } from 'react-native-paper';
import GestureRecognizer from 'react-native-swipe-gestures';

const Viewer = ({ route }) => {
  const [img, setImg] = useState(true);
  const [count, setCount] = useState(0);

  let img1 = '';
  let img2 = '';
  let data = '';

  switch (route.params.cat) {
    // morning
    case 1:
      img1 = require('./assets/lovemorning.jpeg');
      img2 = require('./assets/morning.jpeg');
      data = require('./data/goodmorning.json');

      break;
    // night
    case 2:
      data = require('./data/goodnight.json');
      img1 = require('./assets/lovenight.jpeg');
      img2 = require('./assets/night.jpeg');
      break;
      // for couples
    case 3:
      img1 = require('./assets/love.jpeg');
      img2 = require('./assets/lov.jpeg');
      data = require('./data/couple.json');

      break;
    // long distance
    case 4:
      data = require('./data/distance.json');
      img1 = require('./assets/lovenight.jpeg');
      img2 = require('./assets/night.jpeg');
      break;
      break;
      // for her
    case 5:
      img1 = require('./assets/rom.jpeg');
      img2 = require('./assets/morning.jpeg');
      data = require('./data/her.json');

      break;
    // for him
    case 6:
      data = require('./data/him.json');
      img1 = require('./assets/rom.jpeg');
      img2 = require('./assets/lovenight.jpeg');
      break;
    // for birthday
    case 7:
      data = require('./data/birthday.json');
      img1 = require('./assets/rom.jpeg');
      img2 = require('./assets/lovenight.jpeg');
      break;
  }

  setInterval(() => {
    setImg(!img);
  }, 100000);

  const Msg = ({ msg }) => {
    return (
      <TouchableRipple style={{ flex: 1 }} rippleColor={Colors.red500}>
        <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
          <Text
            style={{ fontSize: 24, textAlign: 'center', lineHeight: 40, color: Colors.red400 }}>
            {msg}
          </Text>
          <IconButton style={{ backgroundColor: Colors.red }} icon='share-variant-outline' size={56} color={Colors.red600} onPress={async () => {
            await Share.share({ message: msg, title: 'ShareLove' })
          }} />
        </View>
      </TouchableRipple>
    );
  }

  const lefty = () => {
    if (count >= 0 && count + 1 < data.length) setCount(() => count + 1);
    else ToastAndroid.show('Reached the last message!', ToastAndroid.LONG)
  }

  const right = () => {
    if (count != 0) setCount(() => count - 1);
    else ToastAndroid.show('Reached the first message!', ToastAndroid.LONG)
  }

  return (
    <ImageBackground source={img? img1 : img2} style={{flex: 1}}>
      <GestureRecognizer
        config={{
          velocityThreshold: .3,
          directionalOffsetThreshold: 80
        }}
        onSwipeLeft={lefty}
        onSwipeRight={right}
        style={{ flex: 1, borderWidth: 2, borderColor: 'red', margin: 20, padding: 10, borderRadius: 10 }}>
        <Msg msg={data[count].msg} />
      </GestureRecognizer>
    </ImageBackground>
  );
};
export default Viewer;
