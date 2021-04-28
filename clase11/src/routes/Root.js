import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenNavigator from './ScreensStack';
import BottomNavigation from './BottomTabStack';
import DrawerNavigator from './DrawerStack';
import LoginNavigator from './LoginStack';
import HomeNavigation from './HomeStack';
import {connect} from 'react-redux';

const RootStack = createStackNavigator();

const RootNavigation = ({isValidLogin}) => (
  <NavigationContainer>
    <RootStack.Navigator headerMode="none">
      {!isValidLogin ? (
        <RootStack.Screen name="LoginNavigator" component={LoginNavigator} />
      ) : (
        <>
          <RootStack.Screen name="HomeNavigator" component={HomeNavigation} />
          <RootStack.Screen name="MenuLateral" component={DrawerNavigator} />
        </>
      )}
      {/* <RootStack.Screen name="BotonesInferiores" component={BottomNavigation} />
      <RootStack.Screen name="Screens" component={ScreenNavigator} /> */}
    </RootStack.Navigator>
  </NavigationContainer>
);

const mapStateToProps = globalState => {
  return {
    isValidLogin: globalState.loginReducer.valid,
  };
};

export default connect(mapStateToProps)(RootNavigation);
