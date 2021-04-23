import React, {Component, useState} from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import TotalData from '../components/TotalData';
import colors from '../config/colors';
import Loading from '../components/Loading';
import {useNavigation, useRoute} from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {backgroundColor: colors.darkBlue, flex: 1},
});

const Home = () => {
  const routes = useRoute();
  const navigation = useNavigation();

  const [countryName] = useState(routes.params.countryName);
  const [countryData] = useState(routes.params.data);

  const getLastValue = (currentData = [], key) => {
    const lastValue = currentData.slice(-1); // ultimo objeto del arreglo

    //[{}].length = 1
    if (lastValue.length) {
      return lastValue[0][key];
    }
    return 0;
  };

  const lastValueConfirmed = getLastValue(countryData, 'Confirmed');
  const lastValueActive = getLastValue(countryData, 'Active');
  const lastValueRecovered = getLastValue(countryData, 'Recovered');
  const lastValueDeaths = getLastValue(countryData, 'Deaths');

  const lineChartConfirmed = countryData.map(({Confirmed}) => Confirmed);
  const lineChartActive = countryData.map(data => data.Active);
  const lineChartRecovered = countryData.map(data => data.Recovered);
  const lineChartDeaths = countryData.map(data => data.Deaths);

  return (
    <SafeAreaView style={styles.container}>
      <TotalData
        countryName={countryName}
        totalConfirmed={lastValueConfirmed}
        totalRecovered={lastValueRecovered}
        totalActive={lastValueActive}
        totalDeaths={lastValueDeaths}
      />
      <Button
        title="Navegar a Gráficos"
        onPress={() =>
          navigation.navigate('Charts', {
            lineChartConfirmed,
            lineChartActive,
            lineChartRecovered,
            lineChartDeaths,
          })
        }
      />
    </SafeAreaView>
  );
};

export default Home;
