import * as React from 'react';
import { View, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import { Bodyprofile } from '../components/Bodyprofile';
import { Bodyfeatures } from '../components/Bodyfeatures';

const feedData = [
  {
    id: 1,
    name: 'CoderSchool',
    image: require('../assets/1.jpg'),
    avatar: require('../assets/1.jpg')
  },
  {
    id: 2,
    name: 'Whoami',
    image: require('../assets/2.jpg'),
    avatar: require('../assets/2.jpg')
  },
  {
    id: 3,
    name: 'Natan Kim',
    image: require('../assets/3.jpg'),
    avatar: require('../assets/3.jpg')
  },
  {
    id: 4,
    name: 'Tuan Phuc Tran',
    image: require('../assets/4.jpg'),
    avatar: require('../assets/4.jpg')
  },
  {
    id: 5,
    name: 'Hayan Fickqua',
    image: require('../assets/5.jpg'),
    avatar: require('../assets/5.jpg')
  },
  {
    id: 6,
    name: 'Mama Victor',
    image: require('../assets/6.jpg'),
    avatar: require('../assets/6.jpg')
  },
  {
    id: 7,
    name: 'Alexandra Mumbom',
    image: require('../assets/7.jpg'),
    avatar: require('../assets/7.jpg')
  },
  {
    id: 8,
    name: 'Quốc Trần',
    image: require('../assets/8.jpg'),
    avatar: require('../assets/8.jpg')
  },
];

function RenderElementBody({ itemInfo }) {
  return (
    <View style={styles.bodycontent}>
      <Bodyprofile avatar={itemInfo.avatar} name={itemInfo.name} />
      <Image source={itemInfo.image} style={styles.img} />
      <Bodyfeatures />
    </View>
  );
}

export default class Body extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          data={feedData}
          renderItem={({ item }) => <RenderElementBody itemInfo={item} />}
          numColumns={1}
          keyExtractor={item => (item.id).toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodycontent: {
    marginVertical: 10
  },
  img: {
    height: 300,
    width: Math.round(Dimensions.get('window').width),
    resizeMode: 'stretch',
  }
});
