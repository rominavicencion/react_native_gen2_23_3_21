import React, { PureComponent } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import MovieCard from './MovieCard';

const styles = StyleSheet.create({
  list: {
    margin: 10,
  },
})


export default class MoviesList extends PureComponent {

  render() {
    const { movies } = this.props;
    return (
      <FlatList
        style={styles.list}
        data={movies}
        keyExtractor={({ poster }) => poster}
        showsVerticalScrollIndicator={false}
        renderItem={({
          item: {
            posterurl,
            year,
            imdbRating,
            title,
          }
        }) => {
          return (
            <MovieCard
              posterurl={posterurl}
              title={title}
              year={year}
              imdbRating={imdbRating}
            />
          )
        }}
      />
    );
  }
}
