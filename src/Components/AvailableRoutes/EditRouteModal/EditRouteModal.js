import React, {View, Text, Button} from 'react-native-windows';
import ButtonIcon from '../../CustomComponents/ButtonSvgIcon/ButtonIcon';
import Grid from '../../CustomComponents/Grid/Grid';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './EditRouteModal.styles';
import {useBetween} from 'use-between';
import useEditRouteModal from '../../../stores/editRouteStore';
import {TextInput} from 'react-native';
import useEditRouteDistance from '../../../stores/editRouteDistanceStore';
import CheckBox from '@react-native-community/checkbox';

export default function EditRouteModal() {
  const useShareEditRoute = () => useBetween(useEditRouteModal);
  const {
    toggleEditRouteModalVisible,
    editRouteModalDiscription,
    newDistance,
    setNewDistance,
    changeDistanceCheckBoxValue,
    setChangeDistanceCheckBoxValue,
  } = useShareEditRoute();

  const inputField = [
    {
      style: styles.row,
      cols: [
        {
          style: styles.col1,
          item: (
            <TextInput
              value={newDistance}
              onChangeText={setNewDistance}
              style={styles.textInput}
            />
          ),
        },
        {
          style: styles.col2,
          item: <Text style={styles.text}>KM</Text>,
        },
      ],
    },
  ];
  const checkboxGid = [
    {
      style: styles.row,
      cols: [
        {
          style: styles.col1,
          item: (
            <CheckBox
              value={changeDistanceCheckBoxValue}
              onChange={setChangeDistanceCheckBoxValue}
            />
          ),
        },
        {
          style: styles.col2,
          item: <Text style={styles.text}>KM</Text>,
        },
      ],
    },
  ];

  return (
    <View style={styles.root}>
      <View style={styles.dialog}>
        <Text style={styles.headline}>Entfernung Bearbeiten</Text>
        <Grid rowsAndCols={inputField} style={styles.gridStyle} />

        <ButtonIcon
          Icon={Icon}
          title="zurück"
          iconName="arrow-back"
          onClick={toggleEditRouteModalVisible}
        />
      </View>
    </View>
  );
}
