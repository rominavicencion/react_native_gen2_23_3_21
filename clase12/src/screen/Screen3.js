import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import colors from '../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
  },
  text: {
    fontSize: 25,
    color: colors.white,
    fontWeight: 'bold',
  },
});

const Screen3 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 3</Text>
      <Button
        color={colors.white}
        onPress={() => navigation.popToTop()}
        title="Volver al primero"
      />
      <Button
        color={colors.yellow}
        onPress={() => navigation.pop()}
        title="Volver"
      />
    </View>
  );
};

export default Screen3;
