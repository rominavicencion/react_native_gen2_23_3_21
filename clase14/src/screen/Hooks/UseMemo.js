import React, {useMemo, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  nameContainer: {
    backgroundColor: colors.green,
    padding: 20,
  },
  nameText: {
    color: colors.white,
    fontSize: 30,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const functions = new Set();

const UseMemo = () => {
  const [name, updateName] = useState('');
  const [contador, updateContador] = useState(0);

  const nameComponent = useMemo(
    () => (
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{name}</Text>
      </View>
    ),
    [name],
  );

  functions.add(nameComponent);

  return (
    <SafeAreaView>
      <Header />
      {nameComponent}

      <Text>{`Numero de funciones: ${functions.size}`}</Text>
      <View style={styles.row}>
        <Button title="Link" onPress={() => updateName('Link')} />
        <Button title="Malon" onPress={() => updateName('Malon')} />
        <Button title="Zelda" onPress={() => updateName('Zelda')} />
      </View>
      <Text style={{textAlign: 'center', fontSize: 20}}>{contador}</Text>
      <View style={styles.row}>
        <Button
          title="+"
          onPress={() =>
            updateContador(valorActualContaor => valorActualContaor + 1)
          }
        />
        <Button
          title="-"
          onPress={() =>
            updateContador(valorActualContaor => valorActualContaor - 1)
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default UseMemo;
