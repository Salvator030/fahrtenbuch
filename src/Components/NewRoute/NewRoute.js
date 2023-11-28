import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
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

const styles = StyleSheet.create({
  root: {alignSelf: 'center', height: 800, width: 300},

  gridStyle: {
    flex: 4,
    marginHorizontal: 'auto',
    margin: 17,
  },
  row: {
    flexDirection: 'row',
  },
  col: {flex: 1, marginHorizontal: 'auto'},
  col1: {flex: 2, marginHorizontal: 'auto'},
  col2: {flex: 2, marginHorizontal: 'auto'},
  col3: {flex: 8, marginHorizontal: 'auto'},

  searchTag: {
    width: 50,
    alignSelf: 'center',
    // alignContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  searchTagBackgroundWhite: {
    backgroundColor: 'white',
  },
  searchTagBackgroundGray: {
    backgroundColor: 'lightgray',
  },

  searchTextInput: {marginBottom: 8},

  text: {textAlign: 'center', paddingLeft: 8},
  headline: {fontSize: 18, fontWeight: 'bold', marginTop: 8, marginBottom: 16},
});
export default function NewRoute() {
  const useShareNewRoute = () => useBetween(useNewRoute);
  const {
    sortValue,
    handelOnClickBackBtn,
    searchValue,
    setSearchValue,
    cards,
    handelOnClickNewAddressBtn,
    handelOnClickNamePill,
    handelOnClickStreetPill,
    handelOnClickPlzPill,
    handelOnClickPlacePill,
  } = useShareNewRoute();
  const useShareNewAddressModal = () => useBetween(useNewAddressModal);
  const {modalVisible} = useShareNewAddressModal();

  const rowsAndCols1 = [
    {
      style: styles.row,
      cols: [
        {
          style: styles.col,
          item: (
            <TouchableOpacity
              onPress={handelOnClickNamePill}
              style={
                sortValue === 'name'
                  ? [styles.searchTag, styles.searchTagBackgroundGray]
                  : [styles.searchTag, styles.searchTagBackgroundWhite]
              }>
              <Text styles={styles.text}>Name</Text>
            </TouchableOpacity>
          ),
        },
        {
          style: styles.col,
          item: (
            <TouchableOpacity
              onPress={handelOnClickStreetPill}
              style={
                sortValue === 'street'
                  ? [styles.searchTag, styles.searchTagBackgroundGray]
                  : [styles.searchTag, styles.searchTagBackgroundWhite]
              }>
              <Text styles={styles.text}>Straße</Text>
            </TouchableOpacity>
          ),
        },
        {
          style: styles.col,
          item: (
            <TouchableOpacity
              onPress={handelOnClickPlzPill}
              style={
                sortValue === 'plz'
                  ? [styles.searchTag, styles.searchTagBackgroundGray]
                  : [styles.searchTag, styles.searchTagBackgroundWhite]
              }>
              <Text styles={styles.text}>PLZ</Text>
            </TouchableOpacity>
          ),
        },
        {
          style: styles.col,
          item: (
            <TouchableOpacity
              onPress={handelOnClickPlacePill}
              style={
                sortValue === 'place'
                  ? [styles.searchTag, styles.searchTagBackgroundGray]
                  : [styles.searchTag, styles.searchTagBackgroundWhite]
              }>
              <Text styles={styles.text}>Ort</Text>
            </TouchableOpacity>
          ),
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

  return (
    <View style={styles.root}>
      <Text style={styles.headline}>Neue Strecke</Text>
      <Grid rowsAndCols={rowsAndCols1} style={styles.gridStyle} />
      <TextInput
        placeholder="Suche"
        value={searchValue}
        onChangeText={setSearchValue}
        style={styles.searchTextInput}
      />
      <ScrollArea itemsList={cards} />
      <Grid rowsAndCols={rowsAndCols2} style={styles.gridStyle} />
      <Popup isOpen={modalVisible}>
        <NewAddressModal />
      </Popup>
    </View>
  );
}
