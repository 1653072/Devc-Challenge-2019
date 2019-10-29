import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

// Reference: https://docs.expo.io/versions/latest/sdk/map-view/
// Keyword search: Expo maps cli

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
