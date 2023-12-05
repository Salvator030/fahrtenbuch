import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CalenderView from './CalenderView/CalenderView';
import CurrentDayDetailsView from './CurrentDayDetailsView/CurrentDayDetailsView';
import CurrentDayRoutes from './CurrentDayRoutes/CurrentDayRoutes';
import Grid from '../CustomComponents/Grid/Grid';

const styles = {
  root: {alignSelf: 'center'},
  gridStyle: {
    width: 800,
    marginHorizontal: 'auto',
  },
  row: {
    flexDirection: 'row',
  },
  col1: {flex: 1.4, marginHorizontal: 'auto'},
  col2: {flex: 0.4, marginHorizontal: 'auto'},
  col3: {flex: 1, marginHorizontal: 'auto'},
};

export default function DateView() {
  return (
    <View style={styles.root}>
      <View style={styles.gridStyle}>
        <View style={styles.row}>
          <View style={styles.col1}>
            <CalenderView />
          </View>
          <View style={styles.col2}>
            <CurrentDayDetailsView />
          </View>
          <View style={styles.col3}>
            <CurrentDayRoutes />
          </View>
        </View>
      </View>
    </View>
  );
}
