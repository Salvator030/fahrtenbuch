import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import {useBetween} from 'use-between';
import useDatabase from '../../../../stores/databaseStore';
const styles = StyleSheet.create({
  root: {
    height: 50,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 16,
    marginLeft: 8,
    marginRight: 8,
  },
});
export default function DrivenRoutesCards({drivenRoute}) {
  console.log(drivenRoute);

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
    <TouchableWithoutFeedback>
      <View style={styles.root}>
        <View style={styles.gridStyleBtn}>
          <View style={styles.row}>
            <View style={styles.col1}>
              <Text>{startAddName}</Text>
            </View>
            <View style={styles.col1}>
              <Text>{destAddName}</Text>
            </View>
            <View style={styles.col1}>
              <Text>{distance}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
