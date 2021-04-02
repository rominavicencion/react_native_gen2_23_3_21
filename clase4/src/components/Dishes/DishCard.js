import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bdc3c7',
    borderRadius: 7,
    marginBottom: 10,
  },
  imageContainer: {
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  information: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

class DishCard extends Component {
  render() {
    const {
      baseUri,
      image,
      title,
      readyInMinutes,
      servings
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: `${baseUri}${image}` }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.information}>
            <Text>{`Listo en ${readyInMinutes} min`}</Text>
            <Text>{`Para ${servings} personas`}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default DishCard;
