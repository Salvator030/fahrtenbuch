import React, {View, ScrollView, Text} from 'react-native';
import ButtonIcon from '../../CustomComponents/ButtonSvgIcon/ButtonIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import useCurrentDayRoutes from '../../../stores/currentDayRoutesStore';
import {useBetween} from 'use-between';
import {styles} from './CurrentDayRoutes.styles';

export default function CurrentDayRoutes() {
  const useShareCurrentDayRoutes = () => useBetween(useCurrentDayRoutes);
  const {drivenRoutesCards, selectedDrivenRoute, handelOnClickDeleteBtn} =
    useShareCurrentDayRoutes();

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

      <ButtonIcon
        Icon={Icon}
        iconName="trash"
        color={selectedDrivenRoute === 0 ? 'lightgray' : 'black'}
        disabled={selectedDrivenRoute === 0 ? true : false}
        onClick={handelOnClickDeleteBtn}
      />
    </View>
  );
}
