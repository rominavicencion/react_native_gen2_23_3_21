import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {},
  title: {},
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darkBlue,
  },
});

// Supongamos tenemos un profile
const UseState = ({navigation}) => {
  const [nombre, actualizarNombre] = useState(''); // [name, updateName()]
  const [correo, actualizarCorreo] = useState('');

  return (
    <SafeAreaView>
      <Header iconCallback={() => navigation.openDrawer()} />
      <Text style={styles.title}>Profile</Text>
      <Input
        placeholder="Nombre..."
        value={nombre}
        onChangeText={nuevoNombre => actualizarNombre(nuevoNombre)}
        autoCapitalize="words"
      />
      <Input
        placeholder="Email..."
        value={correo}
        onChangeText={nuevoCorreo => actualizarCorreo(nuevoCorreo)}
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
      />

      <Text style={styles.result}>{nombre}</Text>
      <Text style={styles.result}>{correo}</Text>
    </SafeAreaView>
  );
};

export default UseState;
