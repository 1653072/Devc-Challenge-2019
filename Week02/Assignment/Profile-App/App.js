import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, FlatList, SafeAreaView } from 'react-native';
import { AntDesign, FontAwesome, Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

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

const imageDataList = [
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.jpg') },
  { id: 4, imgSource: require('./assets/4.jpg') },
  { id: 5, imgSource: require('./assets/5.jpg') },
  { id: 6, imgSource: require('./assets/6.jpg') },
  { id: 7, imgSource: require('./assets/7.jpg') },
  { id: 8, imgSource: require('./assets/8.jpg') }
  
];

function ImageBox({ imgSource }) {
  return (
    <Image source={imgSource} style={styles.imagelistboxItem}/>
  );
}

export default function App() {
  return (
    <SafeAreaView  style={styles.container}>
      <View style={styles.headerbox}>
        <TouchableOpacity>
          <AntDesign name='arrowleft' size={22}/>
        </TouchableOpacity> 
        <TouchableOpacity>
          <FontAwesome name='th-large' size={22}/>
        </TouchableOpacity> 
      </View>
      <View style={styles.profilebox}>
        <Image source={require('./assets/avatar.png')} style={styles.profileboxAvatar}/>
        <View style={styles.profileboxInfo}>
          <Text style={styles.profileboxName}>Quốc Trần</Text>
          <Text style={styles.profileboxJob}>D3M - Software Development</Text>
          <View style={styles.profileboxBtn}>
            <TouchableOpacity style={styles.profileboxBtnFollow} onPress={() => Alert.alert('Followed!')}>
              <Text style={styles.profileboxBtnFollowText}>Follow</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.profileboxBtnSend} onPress={() => Alert.alert('Message sent')}>
              <Ionicons name='md-send' size={24} color='white'/>
            </TouchableOpacity> 
          </View>
        </View>
      </View>
      <View style={styles.statisticsbox}>
        <View>
          <Text style={styles.statisticsboxText}>210</Text>
          <Text style={styles.statisticsboxTitle}>Photos</Text>
        </View>
        <View>
          <Text style={styles.statisticsboxText}>15k</Text>
          <Text style={styles.statisticsboxTitle}>Followers</Text>
        </View>
        <View>
          <Text style={styles.statisticsboxText}>605</Text>
          <Text style={styles.statisticsboxTitle}>Following</Text>
        </View>
      </View>
      <View style={styles.imagelistbox}>
        <FlatList
          data={imageDataList}
          renderItem={({ item }) => <ImageBox imgSource={item.imgSource} />}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'center'}}
          keyExtractor={item => (item.id).toString()}
        />
      </View>
      <View style={styles.footerbox}>
        <TouchableOpacity>
          <MaterialCommunityIcons name='material-ui' size={24} color='rgb(0, 112, 192)'/>
        </TouchableOpacity> 
        <TouchableOpacity>
          <Ionicons name='md-add-circle-outline' size={24} color='rgb(0, 112, 192)'/>
        </TouchableOpacity> 
        <TouchableOpacity>
          <Feather name='user' size={24} color='rgb(0, 112, 192)'/>
        </TouchableOpacity> 
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 24,
    marginHorizontal: 20,
    color: 'black',
  },
  // -------------------------------
  headerbox: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // -------------------------------
  profilebox: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileboxAvatar: {
    width: 80,
    height: 80,
    borderRadius: 1000,
    resizeMode: 'stretch',
  },
  profileboxInfo: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  profileboxName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileboxJob: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
  },
  profileboxBtn: {
    flexDirection: 'row',
    height: 30,
    marginTop: 10,
  },  
  profileboxBtnFollow: {
    width: 100,
    borderRadius: 1000,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0, 112, 192, .9)',
    color: 'white',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  profileboxBtnFollowText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }, 
  profileboxBtnSend: {
    width: 50,
    borderRadius: 1000,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(120, 213, 250)',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 12,
    textShadowColor: 'black',
    shadowColor: 'black',
    elevation: 5,
  },
  // -------------------------------
  statisticsbox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  statisticsboxText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    color: 'rgb(0, 112, 192)',
  },
  statisticsboxTitle: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // -------------------------------
  imagelistbox: {
    flex: 6,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  imagelistboxItem: {
    width: '40%',
    maxHeight: 200,
    margin: 10,
    resizeMode: "cover",
    borderRadius: 10,
  },
  // -------------------------------
  footerbox: {
    flex: 0.5,
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
});