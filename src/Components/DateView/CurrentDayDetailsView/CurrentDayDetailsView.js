import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Grid from '../../CustomComponents/Grid/Grid';
import {useBetween} from 'use-between';
import useCalender from '../../../stores/calenderStore';
import useDatabase from '../../../stores/databaseStore';
import { parseDate } from '../../../asserts/dateHelper';

const styles = {
  root: {marginTop: 2},
  gridStyle: {
    width: 100,
    marginHorizontal: 'auto',
  },
  row: {
    flexDirection: 'row',
  },
  col: {flex: 3, marginTop: 16},

  textDate: {fontSize: 20, fontWeight: 'bold'},
  text: {fontSize: 16},
};

export default function CurrentDayDetailsView() {
  const useShareCalender = () => useBetween(useCalender);
  const {selectedDate} = useShareCalender();
  const useShareDatabase = () => useBetween(useDatabase);
  const {drivenRoutesByDate} = useShareDatabase();

  const getDistanceByDaryRoutes = () => {
    let distance = 0;
    drivenRoutesByDate.forEach(route => (distance += route.distance));
    return distance;
  };

  return (
    <View style={styles.root}>
      <Text style={styles.textDate}>
        {parseDate(selectedDate)}
      </Text>
      <View gridStyle={styles.gridStyle}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.text}>anz</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.text}>{drivenRoutesByDate.length}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.text}>km</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.text}>{getDistanceByDaryRoutes()}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
