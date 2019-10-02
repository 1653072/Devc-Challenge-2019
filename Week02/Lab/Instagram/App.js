import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from './components/Header';
import Body from './components/Body';

/* 
  SHADOW FUNCTION
  ==>>> OS: iOS
  shadowColor: 'gray',
  shadowOpacity: .4,
  shadowOffset: {  width: 100,  height: 100,  },
  shadowRadius: 2,

  ==>>> OS: Android
  elevation: 5,
*/

/* 
REFERENCES:
  + Vector icon: https://expo.github.io/vector-icons/
  + Shapes: https://codedaily.io/tutorials/22/The-Shapes-of-React-Native
*/

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Body />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: 'black',
    marginTop: 24,
    marginBottom: 30,
  },
});