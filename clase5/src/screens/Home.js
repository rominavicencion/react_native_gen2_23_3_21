import React, { PureComponent } from 'react';
import { Button, Text } from 'react-native';
import Header from '../components/Header';
import MoviesList from '../components/Movies/MoviesList';

export default class Home extends PureComponent {
  render() {
    const { movies } = this.props;
    return (
      <>
        <Header title="Cartelera" />
        <MoviesList movies={movies} />
      </>
    );
  }
}
