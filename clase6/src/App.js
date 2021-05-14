/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Home from './screens/Home';

import RootNavigation from './routes/Root';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34495e',
  },
});

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle={'dark-content'} />
      {/*<Home movies={movies} genreColors={genreColors} /> */}
      <RootNavigation />
    </Fragment>
  );
};

export default App;
