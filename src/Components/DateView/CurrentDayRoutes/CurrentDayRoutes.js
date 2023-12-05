import React, {View, ScrollView, Button} from 'react-native';
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
  },
  col: {flex: 3, marginTop: 16},
};

export default function CurrentDayRoutes() {
  const useShareCurrentDayRoutes = () => useBetween(useCurrentDayRoutes);
  const {drivenRouteCards} = useShareCurrentDayRoutes();

  useEffect(() => {
    console.log('drivenRoutesCards', drivenRouteCards);
  }, [drivenRouteCards]);
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>{drivenRouteCards}</ScrollView>
      </View>
      <ButtonIcon title="Löschen" Icon={Icon} iconName="trash" />
    </View>
  );
}
