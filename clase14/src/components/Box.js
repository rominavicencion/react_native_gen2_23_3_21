import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  box: {
    margin: 5,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
  },
  totalText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

const Box = ({totalName, totalValue, color = 'black'}) => {
  return (
    <View testID="box-container" style={styles.box}>
      <Text style={[styles.totalText, {color}]}>{totalValue}</Text>
      <Text style={[styles.totalText, {color}]}>{totalName}</Text>
    </View>
  );
};

export default Box;
