import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Albums" />
        <AlbumList />
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
