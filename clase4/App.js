/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import DishList from './src/components/Dishes/DishList';
import Dropdown from './src/components/Dropdown';
import HorizontalScrollview from './src/components/HorizontalScrollview';

const App = () => {

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView>
        {/* <Dropdown title="Mi Dropdown" icon="+">
          <Text>Primer Hijo</Text>
          <Text>Segundo Hijo</Text>
        </Dropdown> */}
        {/* <HorizontalScrollview /> */}
        <DishList />
      </SafeAreaView>
    </>
  );
};

export default App;
