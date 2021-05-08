import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 10,
    // backgroundColor: 'gray',
    margin: 5,
    borderRadius: 20,
  },
  text: {
    color: '#bdc3c7',
    fontWeight: 'bold',
  },
});

const Chip = ({ value, pressable, onPress, chipGenreColor }) => {

  return (

    <TouchableOpacity
      disabled={!pressable}
      style={ chipGenreColor ? [styles.container, {backgroundColor: `${chipGenreColor}`}] : [styles.container, {backgroundColor: `gray`}]}
      onPress={() => onPress(value)}
    >
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  )
};

export default Chip;
