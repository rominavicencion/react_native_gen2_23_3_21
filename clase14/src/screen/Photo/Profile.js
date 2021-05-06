import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AddPhoto from '../../components/Camera/AddPhoto';
import Input from '../../components/Input';
import {useTheme} from '../../contexts/Theme';
import {useUserInformation} from '../../contexts/UserHandler';

const styles = StyleSheet.create({
  container: {flex: 1},
});

const Profile = () => {
  const {top} = useSafeAreaInsets();

  const {
    mainTheme: {backgroundColor, color},
  } = useTheme();
  const {photo, name, updateName, email, updateEmail} = useUserInformation();

  return (
    <KeyboardAwareScrollView
      style={[styles.container, {paddingTop: top, backgroundColor}]}>
      <AddPhoto photoUrl={photo} />
      <Input
        style={{color}}
        value={name}
        placeholder="Ingresa tu nombre"
        onChangeText={nuevoNombre => updateName(nuevoNombre)}
      />
      <Input
        style={{color}}
        value={email}
        placeholder="Ingresa tu email"
        keyboardType="email-address"
        onChangeText={nuevoEmail => updateEmail(nuevoEmail)}
      />
    </KeyboardAwareScrollView>
  );
};

export default Profile;
