import React, {Button, StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import ButtonIcon from '../CustomComponents/ButtonSvgIcon/ButtonIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import useWarningModal from '../../stores/warningModalStore';
import {useBetween} from 'use-between';
import {styles} from './WarningModal.styles';

export default function WarningModal() {
  const useShareWarningModel = () => useBetween(useWarningModal);
  const {
    warningContent,
    warningDescription,
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
        {(warningDescription === 'deleteRoute' ||
          warningDescription === 'deleteAddress') && (
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
        )}
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
              {warningDescription !== 'printRoutes' && (
                <ButtonIcon
                  Icon={Icon2}
                  title="ok"
                  iconName="check"
                  onClick={handelOnClickOkBtn}
                />
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
