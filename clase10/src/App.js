/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import RootNavigation from './routes/Root';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

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
