import React from 'react';
import {Button, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import LineChartData from '../components/LineChart';
import colors from '../config/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBlue,
  },
});

const Charts = ({
  navigation,
  route: {
    params: {
      lineChartConfirmed,
      lineChartRecovered,
      lineChartDeaths,
      lineChartActive,
    },
  },
}) => (
  <SafeAreaView style={styles.container}>
    <Button title="Volver atrás" onPress={() => navigation.pop()} />
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
  </SafeAreaView>
);

export default Charts;
