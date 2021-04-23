import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigation from './BottomTabStack';
import ScreenNavigator from './ScreensStack';
import MenuContent from '../screen/Menu/MenuContent';
import UseState from '../screen/Hooks/UseState';
import UseCallback from '../screen/Hooks/UseCallback';
import UseMemo from '../screen/Hooks/UseMemo';
import Countries from '../screen/Countries';
import HomeNavigation from './HomeStack';
import Home from '../screen/Home';
import Charts from '../screen/Charts';

const styles = StyleSheet.create({
  drawerContainer: {
    marginVertical: 100,
    padding: 5,
    borderRadius: 10,
  },
});

const MenuDrawer = createDrawerNavigator();

const DrawerNavigator = props => (
  <MenuDrawer.Navigator
    drawerStyle={styles.drawerContainer}
    drawerContent={MenuContent}>
    <MenuDrawer.Screen name="Home" component={HomeNavigation} />
    <MenuDrawer.Screen name="BotomNavigator" component={BottomNavigation} />
    <MenuDrawer.Screen name="ScreenNavigator" component={ScreenNavigator} />
    <MenuDrawer.Screen name="UseState" component={UseState} />
    <MenuDrawer.Screen name="UseCallback" component={UseCallback} />
    <MenuDrawer.Screen name="UseMemo" component={UseMemo} />
  </MenuDrawer.Navigator>
);

export default DrawerNavigator;
