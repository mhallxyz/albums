import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = props => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    headerView: {
        flex: 1,
        maxHeight: 100,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "blue",
    },
    headerText: {
        color: "white",
    }
})

export default Header;
