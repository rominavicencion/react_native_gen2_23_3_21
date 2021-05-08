import React from 'react';
import MovieGenres from './Movies/MovieGenres';

const Filters = ({ moviesGenres, onPress, genreColors }) => (
  <MovieGenres onPress={onPress} pressable genres={moviesGenres} genreColors={genreColors} />
);

export default Filters;

