import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Addresses from './Addresses/Addresses';

import useNewRoute from '../../stores/newRouteStore';
import {useBetween} from 'use-between';
import Distance from './Distance/Distance';
import Save from './Save/Save';

const styles = StyleSheet.create({
  root: {alignSelf: 'center', height: 800, width: 300},

  headline: {fontSize: 18, fontWeight: 'bold', marginTop: 8, marginBottom: 16},
});
export default function NewRoute() {
  const useShareNewRoute = () => useBetween(useNewRoute);
  const {viewDescription} = useShareNewRoute();
  return (
    <View style={styles.root}>
      <Text style={styles.headline}>Neue Strecke</Text>
      {viewDescription === 'startAddress' && <Addresses />}
      {viewDescription === 'destinationAddress' && <Addresses />}
      {viewDescription === 'distance' && <Distance />}
      {viewDescription === 'save' && <Save />}
    </View>
  );
}
