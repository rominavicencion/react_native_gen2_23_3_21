import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#95a5a6',
    padding: 20,
    borderRadius: 20,
  },
  radioButtonTitle: {
    fontSize: 20,
    color: 'white',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 15,
    borderColor: '#bdc3c7',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  radioButtonNotSelected: {
    width: 13,
    height: 13,
    borderRadius: 20,
  },
  radioButtonSelected: {
    backgroundColor: '#e74c3c',
    borderRadius: 20,
  },
});

class RadioButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null,
    };
  }

  componentDidMount = () => {
    this.setState({ selected: 2 });
  };

  select = (index) => this.setState({ selected: index })

  render() {
    const { selected } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.radioButtonTitle}>Radio Button</Text>
        <TouchableOpacity
          onPress={() => this.select(0)}
          style={styles.item}
        >
          <Text>Item 1</Text>
          <View style={styles.radioButton}>
            <View
              style={[
                styles.radioButtonNotSelected,
                selected === 0 && styles.radioButtonSelected,
              ]}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.select(1)}
          style={styles.item}
        >
          <Text>Item 2</Text>
          <View style={styles.radioButton}>
            <View
              style={[
                styles.radioButtonNotSelected,
                selected === 1 && styles.radioButtonSelected,
              ]}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.select(2)}
          style={styles.item}
        >
          <Text>Item 3</Text>
          <View style={styles.radioButton}>
            <View
              style={[
                styles.radioButtonNotSelected,
                selected === 2 && styles.radioButtonSelected,
              ]}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default RadioButton;