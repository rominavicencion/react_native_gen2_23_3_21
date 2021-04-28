import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import colors from '../config/colors';
import * as Animatable from 'react-native-animatable';
import Input from '../components/Input';
import OverlaySpinner from 'react-native-loading-spinner-overlay';
import {useNavigation} from '@react-navigation/core';
import {connect} from 'react-redux';
import {logout} from '../redux/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 20,
    color: colors.darkBlue,
  },
  countryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  countryText: {
    marginVertical: 5,
    fontSize: 15,
    color: colors.darkBlue,
  },
  overlayStyle: {
    color: colors.white,
  },
});

const countryAsyncStorageKey = 'countries';

const CountriesComponent = ({logout}) => {
  const [countries, updateCountries] = useState([]);
  const [searchCountry, updateSearchCountry] = useState([]);
  const [isLoading, updateIsLoading] = useState(false);
  const navigation = useNavigation();

  const getFromStorage = async () => {
    const savedData = JSON.parse(
      await AsyncStorage.getItem(countryAsyncStorageKey),
    );
    if (savedData) {
      updateCountries(savedData);
    }
  };

  const fetchCountries = async () => {
    const {data, status} = await axios.get(
      'https://api.covid19api.com/countries',
    );

    if (status === 200) {
      showMessage({
        message: 'Países obtenidos',
        type: 'success',
      });

      AsyncStorage.setItem(countryAsyncStorageKey, JSON.stringify(data));

      updateCountries(data);
      updateSearchCountry(data);
    }
  };

  const fetchDataByCountry = async (countryName, countrySlug) => {
    updateIsLoading(true);
    try {
      const {data, status} = await axios.get(
        `https://api.covid19api.com/country/${countrySlug}`,
      );

      if (status === 200) {
        navigation.navigate('Home', {countryName, data});
        updateIsLoading(false);
        return;
      }

      updateIsLoading(false);
    } catch {
      updateIsLoading(false);
    }
  };

  const filterCountries = useCallback(
    searchText => {
      if (searchText) {
        const result = countries.filter(({Country}) =>
          Country.includes(searchText),
        );

        updateSearchCountry(result);
      } else {
        updateSearchCountry(countries);
      }
    },
    [countries],
  );

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <OverlaySpinner
        color={colors.white}
        textContent="Cargando información..."
        textStyle={styles.overlayStyle}
        visible={isLoading}
      />
      <Button onPress={() => logout()} title="Log Out" />
      <Text style={styles.title}>Selecciona un país</Text>
      <View>
        <Input
          placeholder="Buscar país..."
          placeholderTextColor={colors.darkBlue}
          style={{color: colors.darkBlue}}
          onChangeText={filterCountries}
        />
      </View>
      <FlatList
        data={searchCountry}
        keyExtractor={({Slug}) => Slug}
        renderItem={({item: {Slug, Country}}) => {
          const fadeIn = {
            0: {
              opacity: 0,
              scale: 0,
            },
            0.5: {
              opacity: 1,
              scale: 0.3,
            },
            1: {
              opacity: 1,
              scale: 1,
            },
          };
          return (
            <TouchableOpacity
              style={styles.countryContainer}
              onPress={() => fetchDataByCountry(Country, Slug)}>
              <Animatable.Text style={styles.countryText} animation={fadeIn}>
                {Country}
              </Animatable.Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(() => ({}), mapDispatchToProps)(CountriesComponent);
