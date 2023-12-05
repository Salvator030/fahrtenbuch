import React, {View, ScrollView, Text, Button} from 'react-native';
import Grid from '../../CustomComponents/Grid/Grid';
import ButtonIcon from '../../CustomComponents/ButtonSvgIcon/ButtonIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import useCurrentDayRoutes from '../../../stores/currentDayRoutesStore';
import {useBetween} from 'use-between';
import {useEffect} from 'react';

const styles = {
  root: {height: 400, width: 300},
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 8,
    borderColor: 'black',
    borderWidth: 1,
  },

  gridStyle: {
    width: 100,
    marginHorizontal: 'auto',
  },
  row: {
    flexDirection: 'row',
    marginLeft: 24,
    marginRight: 24,
  },
  col1: {flex: 1, marginHorizontal: 'auto'},
};

export default function CurrentDayRoutes() {
  const useShareCurrentDayRoutes = () => useBetween(useCurrentDayRoutes);
  const {drivenRoutesCards, test} = useShareCurrentDayRoutes();

  return (
    <View style={styles.root}>
      <View style={styles.gridStyleBtn}>
        <View style={styles.row}>
          <View style={styles.col1}>
            <Text>Start</Text>
          </View>
          <View style={styles.col1}>
            <Text>Ziel</Text>
          </View>
          <View style={styles.col1}>
            <Text>Entfernung</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>{drivenRoutesCards}</ScrollView>
      </View>
      <ButtonIcon title="Löschen" Icon={Icon} iconName="trash" />
    </View>
  );
}
