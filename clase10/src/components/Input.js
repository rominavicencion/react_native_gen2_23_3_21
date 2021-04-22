import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import colors from '../config/colors';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 5,
    borderRadius: 5,
    borderBottomWidth: 2,
    borderColor: colors.darkBlue,
  },
});

const Input = ({
  keyboardType = 'default',
  placeholder,
  value,
  onChangeText = () => {},
  autoCapitalize,
  autoCorrect,
}) => (
  <View style={styles.container}>
    <TextInput
      placeholder={placeholder}
      value={value}
      autoCorrect={autoCorrect}
      autoCapitalize={autoCapitalize}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  </View>
);

export default Input;
