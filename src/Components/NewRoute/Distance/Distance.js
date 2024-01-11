import React, {Text, TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonIcon from '../../CustomComponents/ButtonSvgIcon/ButtonIcon';
import {useBetween} from 'use-between';
import useDistance from '../../../stores/distanceStore';
import {styles} from './Distance.styles';

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
