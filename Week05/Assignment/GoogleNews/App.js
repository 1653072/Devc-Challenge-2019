import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Linking } from 'react-native';
import moment from 'moment';
import { Card, Button, Icon } from 'react-native-elements';

const filterForUniqueArticles = arr => {
  const cleaned = [];
  arr.forEach(itm => {
    let unique = true;
    cleaned.forEach(itm2 => {
      const isEqual = JSON.stringify(itm) === JSON.stringify(itm2);
      if (isEqual) unique = false;
    });
    if (unique) cleaned.push(itm);
  });
  return cleaned;
};

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      loading: true,
      articles: [],
      pageNumber: 1,
      hasError: false,
      lastPage: false,
      lastPageReached: false
    })
  }

  onPress = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`Don't know how to open URL: ${url}`);
      }
    });
  };

  componentDidMount() {
    this.getNews()
  }

  getNews = async () => {
    this.setState({
      loadding: true
    })

    try {
      // wrong link : https://wrongapi.com
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=6eec2f7fe6cd4c40a3fef8f33f5778fe&page=${this.state.pageNumber}`);
      const jsonData = await response.json();

      const hasMoreArticles = jsonData.articles.length > 0;
      if (!hasMoreArticles) {
        this.setState({
          lastPageReached: true
        })
        return;
      }
      
      const newArticleList = filterForUniqueArticles(
        this.state.articles.concat(jsonData.articles)
      );

      let newPageNumber = this.state.pageNumber + 1
        
      this.setState({
        articles: newArticleList,
        pageNumber: newPageNumber
      })
    }
    catch(error){
      this.setState({
        hasError: true
      })
    }
    
    this.setState({
      loading: false,
    })
  }

  displayLoading() {
    let loading = this.state.loading
    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" loading={loading} />
        </View>
      )
    }

    return false
  }

  displayErrorFetching() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text>Error fetching</Text>
        </View>
      );
    }

    return false
  }

  renderArticleItem = (item) => {
    let val = item.item
    return (
      <Card title={val.title ? val.title : null} image={{ uri: val.urlToImage ? val.urlToImage : null }}>
        <View style={styles.row}>
          <Text style={styles.label}>Source</Text>
          <Text style={styles.info}>{val.source.name}</Text>
        </View>
        <Text style={{marginBottom: 10}}>{val.content}</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Published</Text>
          <Text style={styles.info}>
            {moment(val.publishedAt).fromNow()}
          </Text>
        </View>
        <Button icon={<Icon />} title="Read more" backgroundColor="#03A9F4" onPress={() => this.onPress(val.url)} />
      </Card>
    );
  };

  render() {
    let result = this.displayLoading() 
    if (result != false) return result

    result = this.displayErrorFetching()
    if (result != false) return result
 
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.label}>Articles Count:</Text>
          <Text style={styles.info}>{this.state.articles.length}</Text>
        </View>
        <FlatList
          data={this.state.articles}
          renderItem={item => this.renderArticleItem(item)}
          keyExtractor={item => item['title']}
          onEndReached={() => this.getNews()} onEndReachedThreshold={1}
          ListFooterComponent={
            this.state.lastPageReached ? <Text style={styles.lastPageReachedBox}>No more articles</Text> : <ActivityIndicator size="large" loading={this.state.loading}/>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  header: {
    height: 30,
    width: '100%',
    backgroundColor: 'pink'
  },
  row: {
    marginVertical: 10,
    flexDirection: 'row'
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold'
  },
  info: {
    fontSize: 16,
    color: 'grey'
  },
  lastPageReachedBox: {
    marginVertical: 10,
    fontSize: 16,
    textAlign: 'center',
    color: 'red'
  }
});
