import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CalenderView from './CalenderView/CalenderView';
import CurrentDayDetailsView from './CurrentDayDetailsView/CurrentDayDetailsView';
import CurrentDayRoutes from './CurrentDayRoutes/CurrentDayRoutes';
import Grid from '../CustomComponents/Grid/Grid';

const styles = {
  root: {height: 500, width: 800},
  gridStyle: {
    width: 800,
    marginHorizontal: 'auto',
  },
  row: {
    flexDirection: 'row',
  },
  col1: {flex: 4},
  col2: {flex: 1},
};

export default function DateView() {
  const rowsAndCols = [
    {
      style: styles.row,
      cols: [
        {style: styles.col1, item: <CalenderView />},
        {style: styles.col2, item: <CurrentDayDetailsView />},
        {style: styles.col2, item: <CurrentDayRoutes />},
      ],
    },
  ];
  return (
    <View>
      <Grid gridStyle={styles.gridStyle} rowsAndCols={rowsAndCols} />
    </View>
  );
}
