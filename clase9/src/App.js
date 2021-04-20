/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './screen/Home';
import FlashMessage from 'react-native-flash-message';
import RootNavigation from './routes/Root';

const App = () => {
  return (
    <>
      <FlashMessage position="top" canRegisterAsDefault />
      <StatusBar barStyle={'dark-content'} />
      {/* <Home /> */}
      <RootNavigation />
    </>
  );
};

export default App;
