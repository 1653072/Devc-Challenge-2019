import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native';

import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

// Reference: https://docs.expo.io/versions/latest/sdk/map-view/
// Keyword search: Expo maps cli

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentLocation: {
        latitude: 0.0,
        longitude: 0.0
      },
      errorMessage: null,
      markers: []
    };
  }

  componentDidMount() {
    if (Platform.OS === 'Android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let status = await Permissions.askAsync(Permissions.LOCATION);
    if (status['status'] !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
      return
    }

    var hasService = await Location.hasServicesEnabledAsync();
    if (hasService == false) {
      this.setState({
        errorMessage: 'No service for getting location',
      });
    }
    else {
      let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true}); 
      curLocation = JSON.parse('{"latitude" : ' + location['coords']['latitude'] + ', "longitude" : ' + location['coords']['longitude'] + '}')
      this.setState({ currentLocation: curLocation});
    }
  };

  saveMarkers = (element) => {
    coordinate = element['coordinate']
    latitude = coordinate['latitude']
    longitude = coordinate['longitude']

    newMarker = JSON.parse('{"latitude" : ' + latitude + ', "longitude" : ' + longitude + '}')
    
    this.setState({
      markers: [...this.state.markers, newMarker]
    })
  }

  render() {
    return (
      <MapView 
        style={styles.mapStyle} 
        initialRegion={{
          latitude: this.state.currentLocation['latitude'],
          longitude: this.state.currentLocation['longitude'],
          latitudeDelta: 18,
          longitudeDelta: 100.0421,
        }}
        onLongPress={e => this.saveMarkers(e.nativeEvent)}
        {...this.state.markers.map(marker => {
          return (
            <Marker
              coordinate={{
                latitude: marker['latitude'],
                longitude: marker['longitude']
              }}
              // title={marker.title}
              // description={marker.description}
            />
          )
        })}
      />
    );
  }
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
