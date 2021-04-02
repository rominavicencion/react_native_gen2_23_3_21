import React, { Component } from 'react';
import { FlatList } from 'react-native';
import HorizontalScrollviewButton from './HorizontalDropdownButton';

class HorizontalScrollview extends Component {
  render() {
    const { dishTitles, onSelectedDish } = this.props;
    return (
      <FlatList
        data={dishTitles} // debe ser un arreglo
        keyExtractor={(titulo) => titulo.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item: { name } }) => (
          <HorizontalScrollviewButton title={name} onPress={onSelectedDish} />
        )}
      />
    );
  }
}

export default HorizontalScrollview;