import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import AlbumDetail from './AlbumDetail';

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
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />)
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;