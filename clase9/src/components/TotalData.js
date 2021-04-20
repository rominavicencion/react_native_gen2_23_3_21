import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';
import Box from './Box';

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: 'white',
    margin: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 20,
    flexWrap: 'wrap',
  },
});

const TotalData = ({
  totalConfirmed = 0,
  totalDeaths = 0,
  totalRecovered = 0,
  totalActive = 0,
  countryName = '',
}) => (
  <>
    <Text style={styles.title}>Total para {countryName}</Text>
    <View style={styles.container}>
      <Box
        totalName="Confirmados"
        totalValue={totalConfirmed}
        color={colors.blue}
      />
      <Box
        totalName="Recuperados"
        totalValue={totalRecovered}
        color={colors.green}
      />
      <Box totalName="Fallecidos" totalValue={totalDeaths} color={colors.red} />
      <Box totalName="Activos" totalValue={totalActive} color={colors.yellow} />
    </View>
  </>
);

export default TotalData;
