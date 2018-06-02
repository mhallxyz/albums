import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = props => {
  return (
    <View style={styles.View}>
      <Text style={styles.Text}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    flex: 1,
    maxHeight: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#247BA0',
    elevation: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    position: 'relative',
  },
  Text: {
    color: '#F3FFBD',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default Header;
