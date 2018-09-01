import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AlbumList extends Component {
  state = {
    albums: []
  }

  componentWillMount() {
    this.getAlbumsFromApi();
  }
 //async await based version
  async getAlbumsFromApi() {
    try {
      let response = await fetch(
        'https://rallycoding.herokuapp.com/api/music_albums'
      );
      let responseJson = await response.json();
      console.log(responseJson);
      this.setState({albums: responseJson});
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }
//promise based version
  // getAlbumsFromApi() {
  //   return fetch('https://rallycoding.herokuapp.com/api/music_albums')
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     console.log(responseJson);
  //     this.setState({albums: responseJson});
  //     return responseJson;
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // }

  renderAlbums = () => {
    return this.state.albums.map(album => <Text>{album.title}</Text>)
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderAlbums()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#70C1B3'
  }
});

export default AlbumList;