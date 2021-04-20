import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from '../screen/Screen1';
import Screen2 from '../screen/Screen2';
import Screen3 from '../screen/Screen3';
import {SafeAreaView, Text} from 'react-native';

const ScreenStack = createStackNavigator();

const ScreenNavigator = () => (
  <ScreenStack.Navigator>
    <ScreenStack.Screen
      name="Screen1"
      component={Screen1}
      options={{
        header: () => (
          <SafeAreaView>
            <Text>Header Screen 1</Text>
          </SafeAreaView>
        ),
      }}
    />
    <ScreenStack.Screen
      name="Ruta2"
      component={Screen2}
      options={{
        header: () => (
          <SafeAreaView>
            <Text>Header Screen 2</Text>
          </SafeAreaView>
        ),
        gestureDirection: 'vertical',
      }}
    />
    <ScreenStack.Screen
      name="Screen3"
      component={Screen3}
      options={{
        header: () => null,
        gestureDirection: 'vertical-inverted',
      }}
    />
  </ScreenStack.Navigator>
);

export default ScreenNavigator;
