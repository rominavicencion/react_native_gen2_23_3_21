import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Header from '../components/Header';
import colors from '../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
  text: {
    fontSize: 25,
    color: colors.white,
    fontWeight: 'bold',
  },
});

const Screen1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>Screen 1</Text>
      <Button
        color={colors.white}
        onPress={() => navigation.navigate('Ruta2')}
        title="Navegar"
      />
    </View>
  );
};

export default Screen1;
