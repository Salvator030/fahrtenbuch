import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {Popup} from 'react-native-windows';
import ScrollArea from '../CustomComponents/ScrollArea/ScrollArea';
import ButtonIcon from '../CustomComponents/ButtonSvgIcon/ButtonIcon';
import Grid from '../CustomComponents/Grid/Grid';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import useNewRoute from '../../stores/newRouteStore';
import NewAddressModal from './NewAddressModal/NewAddressModal';
import useNewAddressModal from '../../stores/newAddresModalStore';
import {useBetween} from 'use-between';
import useDatabase from '../../stores/databaseStore';
import AddressCard from './AddressCard/AddressCard';

const styles = StyleSheet.create({
  root: {alignSelf: 'center', height: 800, width: 600},

  gridStyle: {
    flex: 12,
    marginHorizontal: 'auto',
  },
  row: {
    flexDirection: 'row',
  },
  col1: {flex: 2, marginHorizontal: 'auto'},
  col2: {flex: 2, marginHorizontal: 'auto'},
  col3: {flex: 8, marginHorizontal: 'auto'},

  searchTag: {
    width: 75,
    borderRadius: 25,
    backgroundColor: 'white',
  },

  text: {marginLeft: 8},
  headline: {fontSize: 18, fontWeight: 'bold'},
});
export default function NewRoute() {
  const useShareNewRoute = () => useBetween(useNewRoute);
  const {handelOnClickBackBtn, handelOnClickNewAddressBtn} = useShareNewRoute();
  const useShareNewAddressModal = () => useBetween(useNewAddressModal);
  const {modalVisible} = useShareNewAddressModal();
  const useShareDatabase = () => useBetween(useDatabase);
  const {addresses} = useShareDatabase();

  const [cards, setCards] = useState([]);

  const rowsAndCols1 = [
    {
      style: styles.row,
      cols: [
        {
          style: styles.col1,
          item: (
            <View style={styles.searchTag}>
              <Text styles={styles.text}>Name</Text>
            </View>
          ),
        },
        {
          style: styles.col1,
          item: (
            <View style={styles.searchTag}>
              <Text>Straße</Text>
            </View>
          ),
        },
        {
          style: styles.col1,
          item: <Button title="PLZ" />,
        },
        {
          style: styles.col1,
          item: <Button title="Ort" />,
        },
      ],
    },
  ];

  const rowsAndCols2 = [
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

  useEffect(() => {
    console.log(addresses);
    const cardsList = addresses.map(address => (
      <AddressCard key={('add', address.add_id)} address={address} />
    ));
    setCards(cardsList);
  }, [addresses]);
  return (
    <View style={styles.root}>
      <Text style={styles.headline}>Neue Strecke</Text>
      <Grid rowsAndCols={rowsAndCols1} style={styles.gridStyle} />
      <ScrollArea itemsList={cards} />
      <Grid rowsAndCols={rowsAndCols2} style={styles.gridStyle} />
      <Popup isOpen={modalVisible}>
        <NewAddressModal />
      </Popup>
    </View>
  );
}
