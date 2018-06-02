import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/header';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Albums" />
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
