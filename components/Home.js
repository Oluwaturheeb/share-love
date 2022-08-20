import React, { useEffect } from 'react';
import { Alert, StyleSheet, TouchableNativeFeedback, View, PermissionsAndroid } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Card, Paragraph, Title } from 'react-native-paper';
import TcpSocket from 'react-native-tcp-socket';
import { Camera } from 'react-native-vision-camera';

const Home = () => {
  const nav = useNavigation();
  // kill the welcome screen
  useEffect(() => {
    nav.dispatch(state => {
      const routes = state.routes.filter(r => r.name !== 'Welcome');
      return CommonActions.reset({
        ...state,
        routes,
        index: routes.length - 1
      });
    });
  }, []);


  return (
    <View style={css.container} >
      <TouchableNativeFeedback onPress={() => {
        nav.navigate('Viewer');
      }}>
        <Card style={{ marginVertical: 10 }}>
          <Card.Content>
            <Title>EnvCam Viewer</Title>
            <Paragraph>
              Use this device as the EnvCam viewer.
            </Paragraph>
          </Card.Content>
        </Card>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => nav.navigate('Camera')}>
        <Card style={{ marginVertical: 10 }}>
          <Card.Content>
            <Title>EnvCam Camera</Title>
            <Paragraph>
              Use this device as the EnvCam camera.
            </Paragraph>
          </Card.Content>
        </Card>
      </TouchableNativeFeedback>
    </View>
  );

}

const css = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  }
})

export default Home;