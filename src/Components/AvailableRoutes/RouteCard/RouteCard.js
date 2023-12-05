import React, {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import Address from './Address/Address';
import {useBetween} from 'use-between';
import useAvailableRoutes from '../../../stores/availableRoutesStor';

const styles = StyleSheet.create({
  textInput: {width: 75, alignSelf: 'center'},
  root: {
    height: 95,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 16,
    marginLeft: 8,
    marginRight: 8,
  },
  selected: {backgroundColor: 'lightgray'},
  container: {
    height: 500,
    marginHorizontal: 'auto',
  },
  gridStyle: {
    flex: 12,
    height: 800,
  },
  gridStyleBtn: {
    flex: 12,
  },
  rowInput: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
  },
  col1: {flex: 1, marginHorizontal: 'auto'},
  col2: {flex: 2, marginHorizontal: 'auto'},
  col3: {
    flex: 2,
    marginHorizontal: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  text: {marginRight: 8},
});
export default function RoteCard({id, startAdd, destAdd, distance}) {
  const useShareAvaibleRoutes = () => useBetween(useAvailableRoutes);
  const {selectedRoute, handelOnClickRouteCard} = useShareAvaibleRoutes();

  return (
    <TouchableWithoutFeedback onPress={() => handelOnClickRouteCard(id)}>
      <View
        style={
          selectedRoute === id ? [styles.root, styles.selected] : styles.root
        }>
        <View style={styles.gridStyle}>
          <View style={styles.row}>
            <View style={styles.col2}>
              <Address address={startAdd} />
            </View>

            <View style={styles.col2}>
              <Address address={destAdd} />
            </View>
            <View style={styles.col3}>
              <Text>{distance} KM</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
