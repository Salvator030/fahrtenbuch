import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import useNewRoute from '../../stores/newRouteStore';
import {useBetween} from 'use-between';
import Addresses from './Addresses/Addresses';
import Distance from './Distance/Distance';
import Save from './Save/Save';
import NewRoutePreview from './NewRoutePreview/NewRoutePreview';
import {styles} from './NewRoute.styles';
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
