import React, { PureComponent } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import MoviesList from '../components/Movies/MoviesList';
import movies from './../lib/movies.json'
import genreColors from './../lib/genreColors.json'

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#34495e',
  },
});
// export default class Home extends PureComponent {
//   render() {
//     const { movies } = this.props;
//     return (
//       <>
//         <Header title="La Cartelera" miArray={['hola', 'chao']} />
//         <MoviesList movies={movies} />
//       </>
//     );
//   }
// }

const Home = () => (
  <SafeAreaView style={styles.container}>
    <Header title="La Cartelera" />
    <MoviesList movies={movies} genreColors={genreColors} />
  </SafeAreaView>
);

export default Home;
