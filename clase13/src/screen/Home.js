import React, {Component, useContext, useState} from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import TotalData from '../components/TotalData';
import colors from '../config/colors';
import Loading from '../components/Loading';
import {useNavigation, useRoute} from '@react-navigation/core';
import {CountryContext} from '../contexts/CountryHandler';

const styles = StyleSheet.create({
  container: {backgroundColor: colors.darkBlue, flex: 1},
});

const Home = () => {
  const {
    states: {
      selectedCountry,
      confirmed,
      recovered,
      deaths,
      active,
      confirmedPoints,
      recoveredPoints,
      activePoints,
      deathsPoints,
    },
  } = useContext(CountryContext);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TotalData
        countryName={selectedCountry}
        totalConfirmed={confirmed}
        totalRecovered={recovered}
        totalActive={active}
        totalDeaths={deaths}
      />
      <Button
        title="Navegar a Gráficos"
        onPress={() =>
          navigation.navigate('Charts', {
            lineChartConfirmed: confirmedPoints,
            lineChartActive: activePoints,
            lineChartRecovered: recoveredPoints,
            lineChartDeaths: deathsPoints,
          })
        }
      />
    </SafeAreaView>
  );
};

export default Home;
