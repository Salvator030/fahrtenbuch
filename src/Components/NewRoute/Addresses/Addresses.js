import React, {
  Text,
  TextInput,
  TouchableOpacity,
  Popup,
  View,
  StyleSheet,
} from 'react-native-windows';
import Grid from '../../CustomComponents/Grid/Grid';
import ScrollArea from '../../CustomComponents/ScrollArea/ScrollArea';
import ButtonIcon from '../../CustomComponents/ButtonSvgIcon/ButtonIcon';
import NewAddressModal from './NewAddressModal/NewAddressModal';
import useAddresses from '../../../stores/addressesStore';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {useBetween} from 'use-between';
import useNewAddressModal from '../../../stores/newAddresModalStore';
import useNewRoute from '../../../stores/newRouteStore';
import useDatabase from '../../../stores/databaseStore';

const styles = StyleSheet.create({
  root: {
    height: 950,
    width: 300,
    alignSelf: 'center',
  },
  gridStyle: {
    flex: 4,
    marginHorizontal: 'auto',
  },
  row: {
    flexDirection: 'row',
  },

  col1: {flex: 2, marginHorizontal: 'auto'},
  col2: {flex: 2, marginHorizontal: 'auto'},
  col3: {flex: 2, marginHorizontal: 'auto'},

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
});
export default function Addresses() {
  const useShareNewAddressModal = () => useBetween(useNewAddressModal);
  const {modalVisible} = useShareNewAddressModal();
  const useShareNewRoute = () => useBetween(useNewRoute);
  const {viewDescription, startAddressId, destinationAddressId} =
    useShareNewRoute();
  const useShareDatabase = () => useBetween(useDatabase);
  const {addressAreHidden} = useShareDatabase();

  const {
    sortValue,
    handelOnClickBackBtn,
    handelOnClickNextBtn,
    searchValue,
    setSearchValue,
    cards,
    handelOnClickNewAddressBtn,
    handelOnClickDeleteBtn,
    handelOnClickNamePill,
    handelOnClickStreetPill,
    handelOnClickPlzPill,
    handelOnClickPlacePill,
    hideAddress,
    toggleHideAddress,
  } = useAddresses();
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
          item: (
            <ButtonIcon
              Icon={Icon}
              title="löschen"
              iconName="trash"
              disabled={
                viewDescription === 'startAddress'
                  ? startAddressId === 0
                    ? true
                    : false
                  : destinationAddressId === 0
                  ? true
                  : false
              }
              color={
                viewDescription === 'startAddress'
                  ? startAddressId === 0
                    ? 'gray'
                    : 'black'
                  : destinationAddressId === 0 && 'gray'
              }
              onClick={handelOnClickDeleteBtn}
            />
          ),
        },
        {
          style: styles.col3,
          item: (
            <ButtonIcon
              Icon={Icon2}
              title="neue Adr."
              iconName="address-card-o"
              onClick={handelOnClickNewAddressBtn}
            />
          ),
        },
        {
          style: styles.col3,
          item: hideAddress ? (
            <ButtonIcon
              title="einblenden"
              Icon={Icon}
              iconName="eye"
              disabled={addressAreHidden}
              color={addressAreHidden ? 'lightgray' : 'black'}
              onClick={toggleHideAddress}
            />
          ) : (
            <ButtonIcon
              title="ausblenden"
              Icon={Icon}
              iconName="eye-off"
              disabled={addressAreHidden}
              color={addressAreHidden ? 'lightgray' : 'black'}
              onClick={toggleHideAddress}
            />
          ),
        },
        {
          style: styles.col3,
          item: (
            <ButtonIcon
              Icon={Icon}
              title="weiter"
              iconName="arrow-forward"
              onClick={handelOnClickNextBtn}
              disabled={
                viewDescription === 'startAddress'
                  ? startAddressId === 0
                    ? true
                    : false
                  : destinationAddressId === 0
                  ? true
                  : false
              }
              color={
                viewDescription === 'startAddress'
                  ? startAddressId === 0
                    ? 'gray'
                    : 'black'
                  : destinationAddressId === 0 && 'gray'
              }
            />
          ),
        },
      ],
    },
  ];
  return (
    <View style={styles.root}>
      <Text>
        {viewDescription === 'startAddress'
          ? 'Start Addresse'
          : 'Ziel Addresse'}
      </Text>
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
