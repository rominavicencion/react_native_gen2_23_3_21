import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {},
});

const MenuContent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Menu Lateral</Text>
      <Button
        color={colors.darkBlue}
        title="Navegar a Screens"
        onPress={() => navigation.navigate('ScreenNavigator')}
      />
      <Button
        color={colors.darkBlue}
        title="Navegar a Use State"
        onPress={() => navigation.navigate('UseState')}
      />
      <Button
        color={colors.darkBlue}
        title="Navegar a Use Callback"
        onPress={() => navigation.navigate('UseCallback')}
      />
    </View>
  );
};

export default MenuContent;
