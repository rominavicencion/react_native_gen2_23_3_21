import React, { Component } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';
import DropdownPicker from '../components/DropdownPicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TotalData from '../components/TotalData';
import LineChartData from '../components/LineChart';
import colors from '../config/colors';

const countryAsyncStorageKey = 'countries';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      countryData: [],
      countryName: null,
    };
  }

  componentDidMount = () => {
    this.getFromStorage();
  };

  getFromStorage = async () => {
    const savedData = JSON.parse(
      await AsyncStorage.getItem(countryAsyncStorageKey),
    );
    if (savedData) {
      this.setState({ countries: savedData });
    }
  };

  fetchCountries = async () => {
    const { data, status } = await axios.get(
      'https://api.covid19api.com/countries',
    );

    if (status === 200) {
      showMessage({
        message: 'Países obtenidos',
        type: 'success',
      });

      const formattedCountries = data.map(({ Country, Slug }) => {
        return {
          label: Country,
          value: Slug,
        };
      });

      AsyncStorage.setItem(
        countryAsyncStorageKey,
        JSON.stringify(formattedCountries),
      );

      this.setState({ countries: formattedCountries });
    }
  };

  onDropdownPickerSelect = ({ label, value }) =>
    this.fetchDataByCountry(label, value);

  fetchDataByCountry = async (countryName, countrySlug) => {
    try {
      const { data, status } = await axios.get(
        `https://api.covid19api.com/country/${countrySlug}`,
      );

      if (status === 200) {
        this.setState({
          countryData: data,
          countryName,
        });
        return;
      }

      this.setState({
        countryData: [],
        countryName: null,
      });
    } catch {
      this.setState({
        countryData: [],
        countryName: null,
      });
    }
  };

  getLastValue = (currentData = [], key) => {
    const lastValue = currentData.slice(-1); // ultimo objeto del arreglo

    //[{}].length = 1
    if (lastValue.length) {
      return lastValue[0][key];
    }
    return 0;
  };

  render() {
    const { countries, countryName, countryData } = this.state;

    const lastValueConfirmed = this.getLastValue(countryData, 'Confirmed');
    const lastValueActive = this.getLastValue(countryData, 'Active');
    const lastValueRecovered = this.getLastValue(countryData, 'Recovered');
    const lastValueDeaths = this.getLastValue(countryData, 'Deaths');

    const lineChartConfirmed = countryData.map(({ Confirmed }) => Confirmed);
    const lineChartActive = countryData.map(data => data.Active);
    const lineChartRecovered = countryData.map(data => data.Recovered);
    const lineChartDeaths = countryData.map(data => data.Deaths);

    return (
      <>
        <Button title="Obtener países" onPress={this.fetchCountries} />
        <DropdownPicker
          countries={countries}
          onSelect={this.onDropdownPickerSelect}
        />
        <TotalData
          countryName={countryName}
          totalConfirmed={lastValueConfirmed}
          totalRecovered={lastValueRecovered}
          totalActive={lastValueActive}
          totalDeaths={lastValueDeaths}
        />
        <ScrollView>
          <LineChartData
            title="Confirmados"
            data={lineChartConfirmed}
            color={colors.blue}
          />
          <LineChartData
            title="Recuperados"
            data={lineChartRecovered}
            color={colors.green}
          />
          <LineChartData
            title="Fallecidos"
            data={lineChartDeaths}
            color={colors.red}
          />
          <LineChartData
            title="Activos"
            data={lineChartActive}
            color={colors.yellow}
          />
        </ScrollView>
      </>
    );
  }
}
