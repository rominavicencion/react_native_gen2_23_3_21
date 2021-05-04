import React from 'react';
import {Button, StyleSheet, Text, View, Switch} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import colors from '../config/colors';
import {useTheme} from '../contexts/Theme';
import {logout} from '../redux/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 30,
    color: colors.darkBlue,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttons: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Menu = ({logout}) => {
  const insets = useSafeAreaInsets();
  const {
    darkmodeEnabled,
    toggleDarkMode,
    mainTheme,
    fontSize,
    fontSizeChange,
  } = useTheme();
  return (
    <View
      style={[
        styles.container,
        {paddingTop: insets.top, backgroundColor: mainTheme.backgroundColor},
      ]}>
      <Text style={[styles.title, {color: mainTheme.color}]}>Menu</Text>

      <View style={styles.buttons}>
        <Switch
          style={{marginBottom: 50}}
          trackColor={{false: colors.darkBlue, true: colors.white}}
          thumbColor={darkmodeEnabled ? colors.green : colors.yellow}
          ios_backgroundColor={colors.white}
          onValueChange={() => toggleDarkMode()}
          value={darkmodeEnabled}
        />
        <View
          style={{
            marginVertical: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button title="+" onPress={() => fontSizeChange(fontSize + 1)} />
          <Text style={{color: mainTheme.color, fontSize}}>{fontSize}</Text>
          <Button title="-" onPress={() => fontSizeChange(fontSize - 1)} />
        </View>
        <Button color={colors.red} onPress={() => logout()} title="Salir" />
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(() => ({}), mapDispatchToProps)(Menu);
