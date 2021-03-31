import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export const componentName = 'Counter';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  counterBox: {
    backgroundColor: '#e67e22',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 20,
  },
  textDefault: {
    fontSize: 30,
    color: '#ecf0f1',
  },
  counterButton: {
    padding: 20,
    borderRadius: 20,
  },
  buttonAdd: {
    backgroundColor: '#2ecc71',
  },
  buttonSubstract: {
    backgroundColor: '#e74c3c',
  },
  buttonReset: {
    backgroundColor: '#2980b9',
  },
  buttonCounterDefault: {
    color: 'white',
  },
});

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      propiedad1: false,
    };
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    const { counter } = this.state;
    const { counter: nextCounter } = nextState;
    console.log("shouldComponentUpdate", { counter })
    if (nextCounter < 0) {
      return false;
    }
    return true;
  }

  add = () => this.setState(({ counter }) => ({ counter: counter + 1 }));

  substract = () => {
    const { counter } = this.state;
    // counter = counter - 1 -> malo
    this.setState({ counter: counter - 1 }); // -> { counter: 0 - 1, propiedad1: false }
  };

  reset = () => this.setState({ counter: 0 });

  render() {
    const { counter } = this.state;
    console.log(this.state);
    return (
      <View style={styles.container}>
        <View style={[styles.row, styles.counterBox]}>
          <Text style={styles.textDefault}>Contador</Text>
          <Text style={styles.textDefault}>{counter}</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.counterButton, styles.buttonAdd]}
            onPress={this.add}
          >
            <Text style={styles.buttonCounterDefault}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.counterButton, styles.buttonReset]}
            onPress={this.reset}
          >
            <Text style={styles.buttonCounterDefault}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.counterButton, styles.buttonSubstract]}
            onPress={this.substract}
          >
            <Text style={styles.buttonCounterDefault}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Counter;
