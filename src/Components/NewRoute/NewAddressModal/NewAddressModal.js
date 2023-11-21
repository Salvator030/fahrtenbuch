import React, {
  Button,
  Modal,
  View,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import ButtonIcon from '../../CustomComponents/ButtonSvgIcon/ButtonIcon';
import Grid from '../../CustomComponents/Grid/Grid';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {useBetween} from 'use-between';
import useNewAddressModal from '../../../stores/newAddresModalStore';

const styles = {
  root: {
    padding: 16,
    backgroundColor: 'white',
    alignSelf: 'center',
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
          item: <TextInput placeholder="Name" />,
        },
      ],
    },
    {
      style: styles.row,
      cols: [
        {
          style: styles.col4,
          item: <TextInput placeholder="Straße" />,
        },
        {
          style: styles.col3,
          item: <TextInput placeholder="Hnr" />,
        },
      ],
    },
    {
      style: styles.row,
      cols: [
        {
          style: styles.col3,
          item: <TextInput placeholder="PLZ" />,
        },
        {
          style: styles.col2,
          item: <TextInput placeholder="Ort" />,
        },
      ],
    },
    {
      style: styles.row,
      cols: [
        {
          style: styles.col,
          item: <TextInput multiline placeholder="Info" />,
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

  return (
    <View style={styles.root}>
      <Text style={styles.headline}>Neue Addresse</Text>
      <Grid style={styles.gridStyle} rowsAndCols={rowsAndCols} />
    </View>
  );
}
