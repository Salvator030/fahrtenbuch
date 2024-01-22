import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Grid from '../../CustomComponents/Grid/Grid';
import {useBetween} from 'use-between';
import useCalender from '../../../stores/calenderStore';
import useDatabase from '../../../stores/databaseStore';
import {parseDate} from '../../../asserts/dateHelper';
import useCurrentDayRoutes from '../../../stores/currentDayRoutesStore';
import {styles} from './CurrentDayDetailsView.styles';

export default function CurrentDayDetailsView() {
  const useShareCalender = () => useBetween(useCalender);
  const {selectedDate, drivenRoutesByDate} = useShareCalender();

  const useShareCurentDayRoutes = () => useBetween(useCurrentDayRoutes);
  const {distanceAtDay} = useShareCurentDayRoutes();

  return (
    <View style={styles.root}>
      <Text style={styles.textDate}>{parseDate(selectedDate)}</Text>
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
            <Text style={styles.text}>{distanceAtDay}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
