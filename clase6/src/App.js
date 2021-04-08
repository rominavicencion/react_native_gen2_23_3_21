/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Home from './screens/Home';
import movies from './lib/movies.json'

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <Home movies={movies} />
    </SafeAreaView>
  );
};

export default App;
