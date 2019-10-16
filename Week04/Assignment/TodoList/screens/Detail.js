import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        let id = this.props.navigation.getParam('id')
        let status = this.props.navigation.getParam('status')
        let body = this.props.navigation.getParam('body')

        return (
            <View style={styles.container}>
              <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{id}. {status}</Text>
                <Text style={styles.bodyText}>{body}</Text>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff7961',
  },
  headerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  headerText: {
    fontSize: 20,
  },
  bodyText: {
    fontSize: 30,
    textAlign: 'center',
  }
});