import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import ButtonIcon from '../../CustomComponents/ButtonSvgIcon/ButtonIcon';
import useSave from '../../../stores/saveStore';
import {styles} from './Save.styles';

export default function Save() {
  const {handelOnClickBackBtn, handelOnClickSaveBtn} = useSave();
  return (
    <View style={styles.root}>
      <Text>Speichern</Text>
      <View style={styles.container}>
        <Text style={styles.text}>Strecke Speichern?</Text>
      </View>
      <View style={styles.gridStyle}>
        <View style={styles.row}>
          <View style={styles.col2}>
            <ButtonIcon
              Icon={Icon}
              title="zurück"
              iconName="arrow-back"
              onClick={handelOnClickBackBtn}
            />
          </View>
          <View style={styles.col4} />
          <View style={styles.col2}>
            <ButtonIcon
              Icon={Icon2}
              title="ok"
              iconName="check"
              onClick={handelOnClickSaveBtn}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
