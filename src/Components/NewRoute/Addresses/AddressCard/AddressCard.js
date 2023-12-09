import React, {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ButtonIcon from '../../../CustomComponents/ButtonSvgIcon/ButtonIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import {useBetween} from 'use-between';
import useAddressCard from '../../../../stores/addressCardStore';
import useNewRoute from '../../../../stores/newRouteStore';
import {useEffect} from 'react';

const styles = StyleSheet.create({
  root: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 16,
    marginLeft: 8,
    marginRight: 8,
  },

  rootDefaultBackground: {
    backgroundColor: 'lightgray',
  },

  rootSelectedBackgroundStart: {backgroundColor: 'lightblue'},
  rootSelectedBackgroundDestination: {backgroundColor: 'lightgreen'},
  rootSelectedBackgroundHide: {backgroundColor: 'gray'},
  gridStyle: {
    flex: 12,
    marginHorizontal: 'auto',
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  col1: {flex: 1, marginHorizontal: 'auto'},
  col2: {flex: 9, marginHorizontal: 'auto'},
  col3: {flex: 3, marginHorizontal: 'auto'},
  col4: {flex: 8, marginHorizontal: 'auto'},
  col5: {flex: 2, marginHorizontal: 'auto', alignSelf: 'center'},

  text: {marginRight: 8},
  addresName: {marginRight: 8, fontSize: 16, fontWeight: 'bold'},
  icon: {height: 20, width: 20},
});
export default function AddressCard({address}) {
  const useShareAddressCard = () => useBetween(useAddressCard);
  const {handelOnPressAddressCard, handelOnClickHideBtn} =
    useShareAddressCard();
  const useShareNewRoute = () => useBetween(useNewRoute);
  const {startAddressId, destinationAddressId} = useShareNewRoute();

  // useEffect(() => {}, [startAddress, destinationAddress]);
  return (
    <TouchableWithoutFeedback onPress={() => handelOnPressAddressCard(address)}>
      <View
        style={
          startAddressId === address.add_id
            ? [styles.root, styles.rootSelectedBackgroundStart]
            : destinationAddressId === address.add_id
            ? [styles.root, styles.rootSelectedBackgroundDestination]
            : address.hide === 1
            ? [styles.root, styles.rootSelectedBackgroundHide]
            : [styles.root, styles.rootDefaultBackground]
        }>
        <View style={styles.gridStyle}>
          <View style={styles.row}>
            <View style={styles.col2}>
              <View style={styles.gridStyle}>
                <View style={styles.row}>
                  <View style={styles.col2}>
                    <Text style={styles.addresName}>{address.name}</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View>
                    <Text style={styles.text}>{address.street}</Text>
                  </View>
                  <View>
                    <Text>{address.hnr}</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View>
                    <Text style={styles.text}>{address.plz}</Text>
                  </View>
                  <View style={styles.col2}>
                    <Text>{address.place}</Text>
                  </View>
                </View>
                {address.info !== '' && (
                  <View style={styles.row}>
                    <View>
                      <Text>{address.info}</Text>
                    </View>
                  </View>
                )}
              </View>
            </View>
            <View style={styles.col5}>
              {address.hide === 1 && (
                <ButtonIcon
                  title="einblenden"
                  Icon={Icon}
                  iconName="eye"
                  onClick={() => handelOnClickHideBtn(address.add_id)}
                />
              )}
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
