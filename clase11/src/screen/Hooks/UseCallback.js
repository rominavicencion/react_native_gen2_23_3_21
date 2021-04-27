import React, {useCallback, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const randomColor = () => '#' + ((Math.random() * 0xffffff) << 0).toString(16);

const Button = ({onPress, title}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: randomColor(),
      padding: 5,
    }}>
    <Text style={{fontSize: 20}}>{title}</Text>
  </TouchableOpacity>
);

const functions = new Set();

const UseCallback = () => {
  const [delta, setDelta] = useState(1);
  const [incremental, setIncremental] = useState(0);

  /**
   *
   * this.setState((state) => state.nombre)
   *
   *
   */

  const incrementarDelta = useCallback(() => setDelta(delta => delta + 1), []);
  const incremento = useCallback(
    () => setIncremental(incremental => incremental + delta),
    [delta],
  );

  functions.add(incrementarDelta);
  functions.add(incremento);

  return (
    <View style={styles.container}>
      <Text>Delta es {delta}</Text>
      <Text>Contador es {incremental} </Text>
      <View style={styles.box}>
        <Button title="Incrementar Delta" onPress={incrementarDelta} />
        <Button title="Incrementar Counter" onPress={incremento} />
      </View>
      <Text style={{fontSize: 20}}>
        Nuevo funciones agregadas al set: {functions.size - 2}
      </Text>
    </View>
  );
};

export default UseCallback;
