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
import Home from './screen/Home';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#34495e' }}>
      <FlashMessage position="top" canRegisterAsDefault />
      <StatusBar barStyle={'dark-content'} />
      <Home />
    </SafeAreaView>
  );
};

export default App;
