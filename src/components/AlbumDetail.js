import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = props => {
  return (
    <Card>
      <CardSection style={styles.cardSection}>
        <View>
          <Image style={styles.image} source={{uri: props.album.image}}/>
        </View>
        <View>
          <Text>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
    </Card>
  )
}

const styles = StyleSheet.create({
  cardSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  image: {
    height: 100,
    width: 100,
  }
})

export default AlbumDetail