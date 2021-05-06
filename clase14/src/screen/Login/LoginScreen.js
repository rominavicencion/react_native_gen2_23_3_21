import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../../config/colors';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {login as loginAction, setLoading} from '../../redux/actions';
import OverlaySpinner from 'react-native-loading-spinner-overlay';
import {useNavigation} from '@react-navigation/core';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.black,
    height: '40%',
    justifyContent: 'flex-end',
  },
  headerText: {
    margin: 20,
    fontSize: 40,
    color: colors.white,
  },
  inputsContainer: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: colors.black,
    marginVertical: 10,
    borderRadius: 8,
    fontSize: 19,
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: colors.black,
    flexDirection: 'row',
    borderRadius: 8,
    alignItems: 'center',
    padding: 10,
  },
  loginButtonText: {
    fontSize: 20,
    marginRight: 5,
    color: colors.white,
  },
  inputFocusBorderColor: {
    borderColor: colors.orange,
  },
});

const Login = ({isLoadingActive, loginIn, valid: validLogin}) => {
  const [userName, updateUserName] = useState('');
  const [userPassword, updateUserPassword] = useState('');
  const [focusNameInput, updateFocusNameInput] = useState(false);
  const [focusPasswordInput, updateFocusPasswordInput] = useState(false);
  const passwordInputRef = useRef(null);
  const navigation = useNavigation();
  MaterialIcon.loadFont();

  const loginCallback = (user, password) => {
    if (userName && userPassword) {
      loginIn(userName, userPassword);
    }
  };

  // useEffect(() => {
  //   if (validLogin) {
  //     navigation.navigate('HomeNavigator');
  //   }
  // }, [validLogin, navigation]);

  return (
    <>
      <OverlaySpinner visible={isLoadingActive} color={colors.white} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <KeyboardAwareScrollView extraScrollHeight={20}>
        <View style={styles.inputsContainer}>
          <TextInput
            placeholder="Usuario"
            autoCapitalize="none"
            value={userName}
            onChangeText={name => updateUserName(name)}
            style={[
              styles.textInput,
              focusNameInput && styles.inputFocusBorderColor,
            ]}
            onFocus={() => updateFocusNameInput(true)}
            onBlur={() => {
              updateFocusNameInput(false);
              passwordInputRef.current.focus();
            }}
          />
          <TextInput
            ref={passwordInputRef}
            placeholder="Password"
            autoCapitalize="none"
            value={userPassword}
            onChangeText={password => updateUserPassword(password)}
            style={[
              styles.textInput,
              focusPasswordInput && styles.inputFocusBorderColor,
            ]}
            onFocus={() => updateFocusPasswordInput(true)}
            onBlur={() => updateFocusPasswordInput(false)}
          />
          <TouchableOpacity
            onPress={() => loginCallback()}
            style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Ingresar</Text>
            <MaterialIcon name="login" color={colors.white} size={20} />
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    loginIn: (user, password) => dispatch(loginAction({user, password})),
  };
};

const mapStateToProps = globalState => {
  return {
    isLoadingActive: globalState.loginReducer.loading,
    valid: globalState.loginReducer.valid,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
