import * as React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Feather } from "@expo/vector-icons";

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Image source={require('../assets/logotext.png')} style={styles.logo}/>
        <Feather name='inbox' size={26} color='black' style={styles.icon}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    maxHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  logo: {
    width: 100,
    height: 40,
    flex: 1,
    resizeMode: 'contain',
    marginLeft: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 20,
  },
  icon: {
    alignSelf: 'center',
  }
});
