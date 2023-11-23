import {Button, Modal, View, StyleSheet, Text, TextInput} from 'react-native';
import React from 'react';
import ButtonIcon from '../../CustomComponents/ButtonSvgIcon/ButtonIcon';
import Grid from '../../CustomComponents/Grid/Grid';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {useBetween} from 'use-between';
import useNewAddressModal from '../../../stores/newAddresModalStore';

const styles = {
  root: {
    padding: 16,
    backgroundColor: '#0000005d',
    alignItems: 'center',
    alignContent: 'center',
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
    backgroundColor: 'black',
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
  },
  col: {flex: 1, marginHorizontal: 'auto'},
  col1: {flex: 1, marginHorizontal: 'auto'},
  col2: {flex: 9, marginHorizontal: 'auto'},
  col3: {flex: 3, marginHorizontal: 'auto'},
  col4: {flex: 8, marginHorizontal: 'auto'},
  headline: {marginBottom: 8, fontSize: 18, fontWeight: 'bold'},
  infoText: {height: 150},
  text: {height: 32},
};

export default function NewAddressModal() {
  const useShareNewAddressModal = () => useBetween(useNewAddressModal);
  const {handelOnClickBackBtn} = useShareNewAddressModal();

  const rowsAndCols = [
    {
      style: styles.row,
      cols: [
        {
          style: styles.col1,
          item: <TextInput placeholder="Name" style={styles.text} />,
        },
      ],
    },
    {
      style: styles.row,
      cols: [
        {
          style: styles.col4,
          item: <TextInput placeholder="Straße" style={styles.text} />,
        },
        {
          style: styles.col3,
          item: <TextInput placeholder="Hnr" style={styles.text} />,
        },
      ],
    },
    {
      style: styles.row,
      cols: [
        {
          style: styles.col3,
          item: <TextInput placeholder="PLZ" style={styles.text} />,
        },
        {
          style: styles.col2,
          item: <TextInput placeholder="Ort" style={styles.text} />,
        },
      ],
    },
    {
      style: styles.row,
      cols: [
        {
          style: styles.col,
          item: (
            <TextInput multiline placeholder="Info" style={styles.infoText} />
          ),
        },
      ],
    },
    {
      style: styles.row,
      cols: [
        {
          style: styles.col1,
          item: (
            <ButtonIcon
              Icon={Icon}
              title="zurück"
              iconName="arrow-back"
              onClick={handelOnClickBackBtn}
            />
          ),
        },
        {
          style: styles.col1,
          item: <ButtonIcon Icon={Icon2} title="ok" iconName="check" />,
        },
      ],
    },
  ];

  const [nameValue, setNameValue] = React.useInputState('');
  const [streetValue, setStreetValue] = React.useInputState('');
  const [hnrValue, setHnrValue] = React.useInputState('');
  const [plzValue, setPlzValue] = React.useInputState('0');
  const [placeValue, setPlaceValue] = React.useInputState('');
  const [infoValue, setInfoValue] = React.useInputState('');

  return (
    <View style={styles.root}>
      <View style={styles.dialog}>
        <Text style={styles.headline}>Neue Addresse</Text>
        <Grid style={styles.gridStyle} rowsAndCols={rowsAndCols} />
      </View>
    </View>
  );
}
