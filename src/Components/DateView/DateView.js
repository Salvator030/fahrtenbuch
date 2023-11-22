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
  const rowsAndCols = [
    {
      style: styles.row,
      cols: [
        {style: styles.col1, item: <CalenderView />, key: 'col1'},
        {style: styles.col2, item: <CurrentDayDetailsView />, key: 'col2'},
        {style: styles.col3, item: <CurrentDayRoutes />, key: 'col3'},
      ],
    },
  ];
  return (
    <View style={styles.root}>
      <Grid gridStyle={styles.gridStyle} rowsAndCols={rowsAndCols} />
    </View>
  );
}
