import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import {useBetween} from 'use-between';
import useDatabase from '../../../../stores/databaseStore';
import {styles} from './DrivenRoutesCards.syles';

export default function DrivenRoutesCards({
  drivenRoute,
  selectedDrivenRoute,
  onClick,
}) {
  const useShareDatabase = () => useBetween(useDatabase);
  const {getFullAddressById, getFullRouteById} = useShareDatabase();

  const startAddName = getFullAddressById(
    getFullRouteById(drivenRoute.route_id).startAdd_id,
  ).name;

  const destAddName = getFullAddressById(
    getFullRouteById(drivenRoute.route_id).destAdd_id,
  ).name;

  const distance = getFullRouteById(drivenRoute.route_id).distance;
  return (
    <TouchableWithoutFeedback onPress={() => onClick(drivenRoute.dRoute_id)}>
      <View
        style={
          selectedDrivenRoute === drivenRoute.dRoute_id
            ? [styles.root, styles.selected]
            : styles.root
        }>
        <View style={styles.gridStyleBtn}>
          <View style={styles.row}>
            <View style={styles.col1}>
              <Text>{startAddName}</Text>
            </View>
            <View style={styles.col1}>
              <Text>{destAddName}</Text>
            </View>
            <View style={styles.col1}>
              <Text>{distance} KM</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
