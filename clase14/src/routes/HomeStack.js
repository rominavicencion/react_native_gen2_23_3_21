import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import Charts from '../screen/Charts';
import CountriesComponent from '../screen/Countries';

const HomeStack = createStackNavigator();

const HomeNavigation = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="Countries" component={CountriesComponent} />
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Charts" component={Charts} />
  </HomeStack.Navigator>
);

export default HomeNavigation;
