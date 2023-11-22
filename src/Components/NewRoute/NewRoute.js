import React, {View, StyleSheet, Text} from 'react-native';
import {Modal, Popup} from 'react-native-windows';
import ScrollArea from '../CustomComponents/ScrollArea/ScrollArea';
import ButtonIcon from '../CustomComponents/ButtonSvgIcon/ButtonIcon';
import Grid from '../CustomComponents/Grid/Grid';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import useNewRoute from '../../stores/newRouteStore';
import NewAddressModal from './NewAddressModal/NewAddressModal';
import useNewAddressModal from '../../stores/newAddresModalStore';
import {useBetween} from 'use-between';

const styles = StyleSheet.create({
  root: {alignSelf: 'center', height: 800, width: 600},

  gridStyle: {
    flex: 3,
    marginHorizontal: 'auto',
    backgroundColor: 'black',
  },
  row: {
    flexDirection: 'row',
  },
  col1: {flex: 2, marginHorizontal: 'auto'},
  col2: {flex: 2, marginHorizontal: 'auto'},
  col3: {flex: 8, marginHorizontal: 'auto'},
  headline: {fontSize: 18, fontWeight: 'bold'},
});
export default function NewRoute() {
  const useShareNewRoute = () => useBetween(useNewRoute);
  const {handelOnClickBackBtn, handelOnClickNewAddressBtn} = useShareNewRoute();
  const useShareNewAddressModal = () => useBetween(useNewAddressModal);
  const {modalVisible} = useShareNewAddressModal();

  const rowsAndCols = [
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
          style: styles.col2,
          item: <ButtonIcon Icon={Icon} title="löschen" iconName="trash" />,
        },
        {
          style: styles.col3,
          item: (
            <ButtonIcon
              Icon={Icon2}
              title="neue Adresse"
              iconName="address-card-o"
              onClick={handelOnClickNewAddressBtn}
            />
          ),
        },
      ],
    },
  ];
  return (
    <View style={styles.root}>
      <Text style={styles.headline}>Neue Strecke</Text>
      <ScrollArea />
      <Grid rowsAndCols={rowsAndCols} style={styles.gridStyle} />
      <Popup isOpen={modalVisible}>
        <NewAddressModal />
      </Popup>
    </View>
  );
}
