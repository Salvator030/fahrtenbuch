import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Grid from '../../CustomComponents/Grid/Grid';

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

const rowsAndCols = [
  {
    style: styles.row,
    cols: [
      {style: styles.col, item: <Text style={styles.text}>anz</Text>},
      {style: styles.col, item: <Text style={styles.text}>0</Text>},
    ],
  },
  {
    style: styles.row,
    cols: [
      {style: styles.col, item: <Text style={styles.text}>km</Text>},
      {style: styles.col, item: <Text style={styles.text}>0</Text>},
    ],
  },
];

export default function CurrentDayDetailsView() {
  return (
    <View style={styles.root}>
      <Text style={styles.textDate}>00.00.0000</Text>
      <Grid gridStyle={styles.gridStyle} rowsAndCols={rowsAndCols} />
    </View>
  );
}
