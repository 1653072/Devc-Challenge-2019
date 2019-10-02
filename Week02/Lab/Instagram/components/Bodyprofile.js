import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class Bodyprofile extends React.Component {
  render() {
    return (
      <View style={styles.profilebox}>
        <Image source={this.props.avatar} style={styles.avatar}/>
        <Text style={styles.name}>{this.props.name}</Text>
      </View>
    );
  }
}

export { Bodyprofile }

const styles = StyleSheet.create({
  profilebox: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  }
});
