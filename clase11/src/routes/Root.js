import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenNavigator from './ScreensStack';
import BottomNavigation from './BottomTabStack';
import DrawerNavigator from './DrawerStack';

const RootStack = createStackNavigator();

const RootNavigation = () => (
  <NavigationContainer>
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="MenuLateral" component={DrawerNavigator} />
      {/* <RootStack.Screen name="BotonesInferiores" component={BottomNavigation} />
      <RootStack.Screen name="Screens" component={ScreenNavigator} /> */}
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootNavigation;
