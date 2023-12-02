import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import useNewRoute from '../../stores/newRouteStore';
import {useBetween} from 'use-between';
import Addresses from './Addresses/Addresses';
import Distance from './Distance/Distance';
import Save from './Save/Save';
import NewRoutePreview from './NewRoutePreview/NewRoutePreview';

const styles = StyleSheet.create({
  root: {
    height: 650,
    width: 600,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
  },

  gridStyle: {
    flex: 12,
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
  },
  col1: {flex: 6, marginHorizontal: 'auto'},
  col2: {flex: 1, marginHorizontal: 'auto'},
  col3: {flex: 3, marginHorizontal: 'auto'},

  verticalLine: {
    width: 1,
    height: 500,
    backgroundColor: 'black',
  },

  headline: {fontSize: 18, fontWeight: 'bold', marginTop: 8, marginBottom: 16},
});
export default function NewRoute() {
  const useShareNewRoute = () => useBetween(useNewRoute);
  const {viewDescription} = useShareNewRoute();
  return (
    <View style={styles.root}>
      <Text style={styles.headline}>Neue Strecke</Text>
      <View style={styles.gridStyle}>
        <View style={styles.row}>
          <View style={styles.col1}>
            {viewDescription === 'startAddress' && <Addresses />}
            {viewDescription === 'destinationAddress' && <Addresses />}
            {viewDescription === 'distance' && <Distance />}
            {viewDescription === 'save' && <Save />}
          </View>
          <View style={styles.col2}>
            <View style={styles.verticalLine} />
          </View>
          <View style={styles.col3}>
            <NewRoutePreview />
          </View>
        </View>
      </View>
    </View>
  );
}
