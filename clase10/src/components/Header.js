import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import {useNavigation, DrawerActions} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.darkBlue,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 20,
  },
});

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Icon size={30} name="menu" color={colors.white} />
      </TouchableOpacity>
      <Text style={styles.text}>Header</Text>
    </View>
  );
};

export default Header;
