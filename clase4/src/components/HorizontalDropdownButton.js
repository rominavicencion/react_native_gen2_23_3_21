import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#2980b9',
    borderRadius: 5,
    margin: 5
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

class HorizontalScrollviewButton extends Component {
  render() {
    const { title, onPress } = this.props;
    return (
      <TouchableOpacity
        onPress={() => onPress(title)}
        style={styles.container}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

export default HorizontalScrollviewButton;

HorizontalScrollviewButton.propTypes = {
  title: PropTypes.string,
};

HorizontalScrollviewButton.defaultProps = {
  title: 'Sin Título',
};
