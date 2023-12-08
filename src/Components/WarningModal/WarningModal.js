import React, {Button, StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import ButtonIcon from '../CustomComponents/ButtonSvgIcon/ButtonIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import useWarningModal from '../../stores/warningModalStore';
import {useBetween} from 'use-between';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    padding: 16,
    backgroundColor: '#0000005d',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    height: 900,
    width: 800,
  },
  dialog: {
    marginTop: 'auto',
    marginBottom: 'auto',
    alignContent: 'center',
    padding: 16,
    backgroundColor: 'white',
    height: 400,
    width: 300,
  },
  gridStyle: {
    flex: 12,
    marginHorizontal: 'auto',
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
  },
  col1: {flex: 1, marginHorizontal: 'auto', alignSelf: 'center'},
  col2: {flex: 6, marginHorizontal: 'auto', alignSelf: 'center'},
});

export default function WarningModal() {
  const useShareWarningModel = () => useBetween(useWarningModal);
  const {
    warningContent,
    deleteCheckboxValue,
    setDeleteCheckboxValue,
    handelOnClickBackBtn,
    handelOnClickOkBtn,
  } = useShareWarningModel();
  return (
    <View style={styles.root}>
      <View style={styles.dialog}>
        <Text style={styles.headline}>Warnung</Text>
        <Text>{warningContent}</Text>
        <View style={styles.gridStyle}>
          <View style={styles.row}>
            <View style={styles.col1}>
              <CheckBox
                disabled={false}
                value={deleteCheckboxValue}
                onValueChange={setDeleteCheckboxValue}
              />
            </View>
            <View style={styles.col2}>
              <Text>komplet Löschen</Text>
            </View>
          </View>
        </View>
        <View style={styles.gridStyle}>
          <View style={styles.row}>
            <View style={styles.col1}>
              <ButtonIcon
                Icon={Icon}
                title="zurück"
                iconName="arrow-back"
                onClick={handelOnClickBackBtn}
              />
            </View>

            <View style={styles.col1}>
              <ButtonIcon
                Icon={Icon2}
                title="ok"
                iconName="check"
                onClick={handelOnClickOkBtn}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
