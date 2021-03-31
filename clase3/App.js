/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Counter from './components/Counter';
import ModalComponent from './components/Modal';
import RadioButton from './components/RadioButton';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <Counter />
      <RadioButton />
      <ModalComponent />
    </SafeAreaView>
  );
};

export default App;
