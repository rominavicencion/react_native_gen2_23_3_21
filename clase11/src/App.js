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
import {Provider} from 'react-redux';
import store from './redux/store';

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
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </>
  );
};

export default App;
