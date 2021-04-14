import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { YAxis, LineChart, Grid } from 'react-native-svg-charts';
import colors from '../config/colors';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: colors.white,
  },
  container: {
    backgroundColor: colors.white,
    height: 200,
    flexDirection: 'row',
    marginVertical: 10,
    borderRadius: 15,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineChart: {
    flex: 1,
    marginLeft: 16,
  },
});

const LineChartData = ({ title = '', data = [], color }) => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
        <YAxis
          data={data}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{
            fill: 'grey',
            fontSize: 10,
          }}
          numberOfTicks={20}
          formatLabel={value => value}
        />
        <LineChart style={styles.lineChart} data={data} svg={{ stroke: color }}>
          <Grid />
        </LineChart>
      </View>
    </View>
  );
};

export default LineChartData;
