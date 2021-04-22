import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeStack';
import World from '../screen/World';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {StyleSheet, View} from 'react-native';
import colors from '../config/colors';

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const BottomTabs = createBottomTabNavigator();

const BottomNavigation = () => (
  <BottomTabs.Navigator
    tabBarOptions={{
      showLabel: false,
      activeTintColor: colors.green,
      inactiveTintColor: colors.red,
    }}>
    <BottomTabs.Screen
      name="Home"
      component={HomeNavigation}
      options={{
        tabBarIcon: ({color, focused}) => {
          Icon.loadFont();
          const iconSize = focused ? 35 : 25;
          return (
            <View style={styles.icon}>
              <Icon name="home" color={color} size={iconSize} />
            </View>
          );
        },
      }}
    />
    <BottomTabs.Screen
      name="World"
      component={World}
      options={{
        tabBarIcon: ({color, focused}) => {
          Fontisto.loadFont();
          const iconSize = focused ? 27 : 20;
          return (
            <View style={styles.icon}>
              <Fontisto name="world" color={color} size={iconSize} />
            </View>
          );
        },
      }}
    />
  </BottomTabs.Navigator>
);

export default BottomNavigation;
