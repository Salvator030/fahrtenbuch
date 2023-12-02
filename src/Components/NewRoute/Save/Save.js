import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import ButtonIcon from '../../CustomComponents/ButtonSvgIcon/ButtonIcon';
import useSave from '../../../stores/saveStore';

const styles = StyleSheet.create({
  textInput: {width: 75, alignSelf: 'center'},
  root: {
    height: 950,
    width: 300,
    alignSelf: 'center',
  },
  container: {
    height: 450,
    marginHorizontal: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    alignSelf: 'center',
  },
  text: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  gridStyle: {
    flex: 12,
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
  },
  col1: {flex: 1, marginHorizontal: 'auto'},
  col2: {flex: 2, marginHorizontal: 'auto'},
  col4: {flex: 4, marginHorizontal: 'auto'},
});

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
