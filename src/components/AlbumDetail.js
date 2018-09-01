import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = props => {
  return (
    <Card>
      <CardSection style={styles.cardSection}>
        <View style={styles.imageView}>
          <Image style={styles.image} source={{uri: props.album.thumbnail_image}}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={styles.mainImage} source={{ uri: props.album.image}} />
      </CardSection>
    </Card>
  )
}

const styles = StyleSheet.create({
  cardSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  image: {
    height: 50,
    width: 50,
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  headerText: {
    fontSize: 18
  },
  mainImage: {
    height: 300,
    flex: 1,
    width: null,
  }
})

export default AlbumDetail