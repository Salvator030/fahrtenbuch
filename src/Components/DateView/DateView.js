import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CalenderView from './CalenderView/CalenderView';
import CurrentDayDetailsView from './CurrentDayDetailsView/CurrentDayDetailsView';
import CurrentDayRoutes from './CurrentDayRoutes/CurrentDayRoutes';
import {styles} from './DateView.styles';

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
