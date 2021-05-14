import { useNavigation } from '@react-navigation/core';
import React, { Component, useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import Rating from '../Rating';
import ActorsList from './ActorsList';
import MovieCardImage from './MovieCardImage';
import MovieDescription from './MovieDescription';
import MovieFullscreenImage from './MovieFullscreenImage';
import MovieGenres from './MovieGenres';

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: '#ecf0f1',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
  },
  subtitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    fontSize: 15,
    padding: 10,
  },
  textColor: {
    color: '#34495e',
  },
  bigFont: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  likeRating: {
    position: 'absolute',
    left: 20,
    top: 20,
    borderRadius: 30,
    zIndex: 9,
    padding: 0,
    elevation: 10,
    backgroundColor: 'white',
  }
});

const MovieCard = ({ 
  posterurl, 
  title, 
  year, 
  imdbRating, 
  actors, 
  description, 
  genreColors, 
  genres 
}) => {

  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [validImage, setValidImage] = useState(true);
  const [starRating, setStarRating] = useState(1);
  const [like, setLike] = useState(false);
  const [showFullscreenImage, setShowFullscreenImage] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const starRatingChange = starPosition => setStarRating(starPosition)

  const toggleLike = () => setLike(!like);

  const toggleFullscreen = () => setShowFullscreenImage(!showFullscreenImage);

  const toggleDescription = () => setShowDescription(!showDescription);

  return (
    <View style={styles.container}>
      { isLoading && <ActivityIndicator color="red" size="large" />}
      { 
        // showFullscreenImage
      //   && validImage
      //   && <MovieFullscreenImage onPress={toggleFullscreen} source={{ uri: posterurl }} />
      }
      <MovieCardImage
        validImage={validImage}
        posterurl={posterurl}
        onError={() => setValidImage(false)}
        onLoadEnd={() => setIsLoading(false)}
        // onLongPress={toggleFullscreen}
        onPress={() => navigation.navigate('MovieDetail', { title, posterurl, description, validImage })}
      />
      {/* <Image
        style={styles.image}
        source={
          validImage
            ? { uri: posterurl }
            : require('../../assets/no_image_available.jpg')
        }
        onError={() => this.setState({ validImage: false })}
        onLoadEnd={() => this.setState({ isLoading: false })}
      /> */}
      <View style={styles.likeRating}>
        <Rating heart like={like} onRatingPress={toggleLike} />
      </View>
      <Text style={[styles.title, styles.textColor]}>{title}</Text>
      <View style={styles.subtitle}>
        <Text style={[styles.description, styles.textColor]}>{year}</Text>
        <Rating
          star
          starRating={starRating}
          onRatingPress={starRatingChange}
        />
        <Text style={[styles.description, styles.textColor, styles.bigFont]}>
          {imdbRating}
        </Text>
      </View>
      <MovieDescription 
        onPress={toggleDescription}
        description={description}
        showDescription={showDescription} 
      />

      <MovieGenres genres={genres} genreColors={genreColors} pressable={false} />

      <ActorsList actors={actors} />
    </View>
  );
}
export default MovieCard;