import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import colors from '../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
  },
  text: {
    fontSize: 25,
    color: colors.white,
    fontWeight: 'bold',
  },
});

const Screen2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 2</Text>
      <Button
        color={colors.white}
        onPress={() => navigation.push('Screen3')}
        title="Navegar"
      />
      <Button
        color={colors.red}
        onPress={() => navigation.pop()}
        title="Volver"
      />
    </View>
  );
};

export default Screen2;
