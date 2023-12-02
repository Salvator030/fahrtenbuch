import React, {Text, TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonIcon from '../../CustomComponents/ButtonSvgIcon/ButtonIcon';
import {useBetween} from 'use-between';
import useDistance from '../../../stores/distanceStore';

const styles = StyleSheet.create({
  textInput: {width: 150, alignSelf: 'center'},
  root: {
    height: 950,
    width: 300,
    alignSelf: 'center',
  },
  container: {
    height: 500,
    marginHorizontal: 'auto',
  },
  gridStyle: {
    flex: 12,
    height: 800,
  },
  gridStyleBtn: {
    flex: 12,
  },
  rowInput: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
  },
  col1: {flex: 1, marginHorizontal: 'auto', alignSelf: 'center'},
  col2: {flex: 2, marginHorizontal: 'auto', alignSelf: 'center'},
  col3: {flex: 4, marginHorizontal: 'auto', alignSelf: 'center'},
});
export default function Distance() {
  const useShareDistance = () => useBetween(useDistance);
  const {
    distanceInputValue,
    setDistanceInputValue,
    checkDistance,
    handelOnClickBackBtn,
    handelOnClickNextBtn,
    error,
  } = useShareDistance();
  return (
    <View style={styles.root}>
      <Text>Entfernung</Text>

      <View style={styles.gridStyle}>
        <View style={styles.rowInput}>
          <View style={styles.col2}>
            <TextInput
              style={styles.textInput}
              value={distanceInputValue}
              onChangeText={setDistanceInputValue}
              placeholder={!error ? '0' : error}
            />
          </View>
          <View style={styles.col1}>
            <Text>KM</Text>
          </View>
        </View>
      </View>
      <View style={styles.gridStyleBtn}>
        <View style={styles.row}>
          <View style={styles.col2}>
            <ButtonIcon
              Icon={Icon}
              title="zurück"
              iconName="arrow-back"
              onClick={handelOnClickBackBtn}
            />
          </View>
          <View style={styles.col3} />
          <View style={styles.col2}>
            <ButtonIcon
              Icon={Icon}
              title="weiter"
              iconName="arrow-forward"
              onClick={handelOnClickNextBtn}
              color={distanceInputValue === '' && 'gray'}
              disabled={distanceInputValue === '' ? true : false}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
