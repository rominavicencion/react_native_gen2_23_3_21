import React, {Component} from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import axios from 'axios';
import {showMessage} from 'react-native-flash-message';
import DropdownPicker from '../components/DropdownPicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TotalData from '../components/TotalData';
import LineChartData from '../components/LineChart';
import colors from '../config/colors';
import {constants} from '../config/constants';

const styles = StyleSheet.create({
  container: {backgroundColor: colors.darkBlue, flex: 1},
});

export default class World extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalConfirmed: 0,
      totalRecovered: 0,
      totalDeaths: 0,
    };
  }

  fetchWorldData = async () => {
    try {
      const {data, status} = await axios({
        baseURL: constants.apiCovidUrl,
        method: 'GET',
        url: '/world/total',
        timeout: 3000,
      });

      if (status === 200) {
        const {
          TotalConfirmed: totalConfirmed,
          TotalDeaths: totalDeaths,
          TotalRecovered: totalRecovered,
        } = data;

        this.setState({
          totalConfirmed,
          totalDeaths,
          totalRecovered,
        });
      }
    } catch {
      showMessage({
        message: 'Api Timeout',
        type: 'warning',
      });
    }
  };

  render() {
    const {totalConfirmed, totalDeaths, totalRecovered} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Button title="Obtener datos mundiales" onPress={this.fetchWorldData} />

        <TotalData
          totalConfirmed={totalConfirmed}
          totalRecovered={totalRecovered}
          totalDeaths={totalDeaths}
        />
      </SafeAreaView>
    );
  }
}
