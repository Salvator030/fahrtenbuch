import React, {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Accordion from '../CustomComponents/Accordion/Accordion';
import Grid from '../CustomComponents/Grid/Grid';
import ButtonIcon from '../CustomComponents/ButtonSvgIcon/ButtonIcon';
import TrashIcon from 'react-native-vector-icons/Ionicons';
import PlusIcon from 'react-native-vector-icons/FontAwesome';
import RouteIcon from 'react-native-vector-icons/MaterialIcons';
import useAvailableRoutes from '../../stores/availableRoutesStor';
import {useBetween} from 'use-between';

const styles = {
  gridStyle: {
    flex: 12,
  },
  gridStyleBtn: {
    flex: 12,
  },
  row: {
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
  },
  col: {flex: 2, marginHorizontal: 'auto'},
  col1: {flex: 2, marginHorizontal: 'auto'},

  searchTag: {
    width: 80,
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
  container: {
    width: '100%',
    height: '100%',
  },
  scrollView: {
    marginHorizontal: 8,
    borderColor: 'black',
    borderWidth: 1,
  },
};

export default function AvailableRoutes() {
  const useShareAvaibleRoutes = () => useBetween(useAvailableRoutes);
  const {
    routesCards,
    sortValue,
    searchValue,
    setSearchValue,
    selectedRoute,
    handelOnClickPill,
    handelOnClickNewRouteBtn,
    handelOnClickAddDrivenRouteBtn,
    handelOnClickDeleteRoueBtn,
  } = useShareAvaibleRoutes();

  // const [items, setItems] = useState([]);

  const pills = [
    {
      style: styles.row,
      cols: [
        {
          style: styles.col,
          item: (
            <TouchableOpacity
              onPress={() => handelOnClickPill('startName')}
              style={
                sortValue === 'startName'
                  ? [styles.searchTag, styles.searchTagBackgroundGray]
                  : [styles.searchTag, styles.searchTagBackgroundWhite]
              }>
              <Text styles={styles.text}>Start Name</Text>
            </TouchableOpacity>
          ),
        },
        {
          style: styles.col,
          item: (
            <TouchableOpacity
              onPress={() => handelOnClickPill('startStreet')}
              style={
                sortValue === 'startStreet'
                  ? [styles.searchTag, styles.searchTagBackgroundGray]
                  : [styles.searchTag, styles.searchTagBackgroundWhite]
              }>
              <Text styles={styles.text}>Start Straße</Text>
            </TouchableOpacity>
          ),
        },
        {
          style: styles.col,
          item: (
            <TouchableOpacity
              onPress={() => handelOnClickPill('startPlz')}
              style={
                sortValue === 'startPlz'
                  ? [styles.searchTag, styles.searchTagBackgroundGray]
                  : [styles.searchTag, styles.searchTagBackgroundWhite]
              }>
              <Text styles={styles.text}>Start PLZ</Text>
            </TouchableOpacity>
          ),
        },
        {
          style: styles.col,
          item: (
            <TouchableOpacity
              onPress={() => handelOnClickPill('startPlace')}
              style={
                sortValue === 'startPlace'
                  ? [styles.searchTag, styles.searchTagBackgroundGray]
                  : [styles.searchTag, styles.searchTagBackgroundWhite]
              }>
              <Text styles={styles.text}>Start Ort</Text>
            </TouchableOpacity>
          ),
        },
        {
          style: styles.col,
          item: <View />,
        },
        {
          style: styles.col,
          item: (
            <TouchableOpacity
              onPress={() => handelOnClickPill('destName')}
              style={
                sortValue === 'destName'
                  ? [styles.searchTag, styles.searchTagBackgroundGray]
                  : [styles.searchTag, styles.searchTagBackgroundWhite]
              }>
              <Text styles={styles.text}>Ziel Name</Text>
            </TouchableOpacity>
          ),
        },
        {
          style: styles.col,
          item: (
            <TouchableOpacity
              onPress={() => handelOnClickPill('destStreet')}
              style={
                sortValue === 'destStreet'
                  ? [styles.searchTag, styles.searchTagBackgroundGray]
                  : [styles.searchTag, styles.searchTagBackgroundWhite]
              }>
              <Text styles={styles.text}>Ziel Straße</Text>
            </TouchableOpacity>
          ),
        },
        {
          style: styles.col,
          item: (
            <TouchableOpacity
              onPress={() => handelOnClickPill('destPlz')}
              style={
                sortValue === 'destPlz'
                  ? [styles.searchTag, styles.searchTagBackgroundGray]
                  : [styles.searchTag, styles.searchTagBackgroundWhite]
              }>
              <Text styles={styles.text}>Ziel PLZ</Text>
            </TouchableOpacity>
          ),
        },
        {
          style: styles.col,
          item: (
            <TouchableOpacity
              onPress={() => handelOnClickPill('destPlace')}
              style={
                sortValue === 'destPlace'
                  ? [styles.searchTag, styles.searchTagBackgroundGray]
                  : [styles.searchTag, styles.searchTagBackgroundWhite]
              }>
              <Text styles={styles.text}>Ziel Ort</Text>
            </TouchableOpacity>
          ),
        },
      ],
    },
  ];
  const discription = [
    {
      style: styles.row,
      cols: [
        {
          style: styles.col1,
          item: <Text>Von</Text>,
        },
        {
          style: styles.col1,
          item: <Text>Nach</Text>,
        },
        {
          style: styles.col1,
          item: <Text>Entfernung</Text>,
        },
      ],
    },
  ];

  return (
    <Accordion title="Verfügbare Strecken">
      <View>
        <Grid rowsAndCols={pills} style={styles.gridStyle} />
        <TextInput
          value={searchValue}
          onChangeText={setSearchValue}
          placeholder="Suchen"
        />
        <Grid rowsAndCols={discription} style={styles.gridStyle} />
        <View style={{height: 300, width: '100%', alignSelf: 'center'}}>
          <View style={styles.container}>
            <ScrollView style={styles.scrollView}>{routesCards}</ScrollView>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.gridStyleBtn}>
            <View style={styles.row}>
              <View style={styles.col1}>
                <ButtonIcon
                  title="Strecke hinzufügen"
                  Icon={RouteIcon}
                  iconName="route"
                  onClick={handelOnClickAddDrivenRouteBtn}
                  disabled={selectedRoute === 0}
                  color={selectedRoute === 0 ? 'lightgray' : 'black'}
                />
              </View>
              <View style={styles.col1}>
                <ButtonIcon
                  title="Neue Strecke"
                  Icon={PlusIcon}
                  iconName="plus"
                  onClick={handelOnClickNewRouteBtn}
                />
              </View>
              <View style={styles.col1}>
                <ButtonIcon
                  title="Strecke Löschen"
                  Icon={TrashIcon}
                  iconName="trash"
                  disabled={selectedRoute === 0}
                  color={selectedRoute === 0 ? 'lightgray' : 'black'}
                  onClick={handelOnClickDeleteRoueBtn}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Accordion>
  );
}
