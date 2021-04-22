import React from 'react';
import Dropdown from 'react-native-dropdown-picker';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  innerContainer: {
    height: 40,
  },
});

const DropdownPicker = ({countries = [], onSelect = () => {}}) => (
  <Dropdown
    items={countries}
    placeholder="Selecciona un país"
    containerStyle={styles.innerContainer}
    style={styles.container}
    onChangeItem={onSelect}
    searchable
  />
);

export default DropdownPicker;
