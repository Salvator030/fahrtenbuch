import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Addresses from './Addresses/Addresses';

import useNewRoute from '../../stores/newRouteStore';
import {useBetween} from 'use-between';

const styles = StyleSheet.create({
  root: {alignSelf: 'center', height: 800, width: 300},

  headline: {fontSize: 18, fontWeight: 'bold', marginTop: 8, marginBottom: 16},
});
export default function NewRoute() {
  return (
    <View style={styles.root}>
      <Text style={styles.headline}>Neue Strecke</Text>
      <Addresses />
    </View>
  );
}
