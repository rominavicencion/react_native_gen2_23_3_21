import React, { Component } from 'react'
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#2980b9',
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
});

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  toggle = () => this.setState(({ open }) => ({ open: !open }));

  render() {
    const { open } = this.state;
    const { children, title, icon } = this.props;

    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.toggle}
          underlayColor="#e67e22"
        >
          <View style={styles.dropdown}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>{icon}</Text>
          </View>
        </TouchableHighlight>
        { open && children}
      </View>
    )
  }
}

export default Dropdown;

Dropdown.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

Dropdown.defaultProps = {
  title: 'Dropdown por Defecto',
  icon: '-',
};
