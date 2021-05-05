import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeStack';
import World from '../screen/World';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View} from 'react-native';
import colors from '../config/colors';
import Menu from '../screen/Menu';
import {useTheme} from '../contexts/Theme';
import Profile from '../screen/Photo/Profile';
import ProfileNavigator from './PhotoStack';

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const BottomTabs = createBottomTabNavigator();

const BottomNavigation = () => {
  const {
    mainTheme: {backgroundColor},
  } = useTheme();

  return (
    <BottomTabs.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.gray,
        inactiveTintColor: colors.lightGray,
        style: {
          backgroundColor,
        },
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
      <BottomTabs.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({color, focused}) => {
            Fontisto.loadFont();
            const iconSize = focused ? 27 : 20;
            return (
              <View style={styles.icon}>
                <Fontisto name="user-secret" color={color} size={iconSize} />
              </View>
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({color, focused}) => {
            Ionicons.loadFont();
            const iconSize = focused ? 30 : 25;
            return (
              <View style={styles.icon}>
                <Ionicons name="menu" color={color} size={iconSize} />
              </View>
            );
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigation;
