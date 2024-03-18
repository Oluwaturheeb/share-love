import React, { useEffect } from 'react';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { TouchableRipple, Colors, Text } from 'react-native-paper';
import { ImageBackground, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
const bg = require('./assets/homebg.jpg');

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

  const cat = [
    { id: 1, name: 'Good Morning Messages' },
    { id: 2, name: 'Good Night Messages' },
    { id: 3, name: 'Love Messages for couples' },
    { id: 4, name: 'Long Distance Messages' },
    { id: 5, name: 'For Her' },
    { id: 6, name: 'For Him' },
    { id: 7, name: 'Birthday' },
  ];

  const Cards = ({ data }) =>
    <TouchableRipple style={css.cardItem} rippleColor={Colors.red100} onPress={() => nav.navigate('View', {'cat': data.id})} underlayColor={Colors.green800}>
      <Text style={{fontSize: 20, fontWeight: '200', color: Colors.redA400}} >{data.name}</Text>
    </TouchableRipple>;

  return (
    <ImageBackground source={bg} resizeMethod='resize' style={css.container} resizeMode='contain'>
      <FlatList data={cat} renderItem={({ item }) => <Cards data={item} />} />
    </ImageBackground>
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardItem: {
    padding: 16,
    marginVertical: 5,
  }
})

export default Home;