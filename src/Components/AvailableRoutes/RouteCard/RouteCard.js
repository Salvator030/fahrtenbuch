import React, {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import Address from './Address/Address';
import ButtonIcon from '../../CustomComponents/ButtonSvgIcon/ButtonIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import {useBetween} from 'use-between';
import useAvailableRoutes from '../../../stores/availableRoutesStor';
import useRoutesCard from '../../../stores/routeCardStore';
import {styles} from './RouteCard.styles';

export default function RoteCard({id, startAdd, destAdd, distance, hide}) {
  const useShareAvaibleRoutes = () => useBetween(useAvailableRoutes);
  const {selectedRoute} = useShareAvaibleRoutes();

  const {handelOnClickShowRouteBtn, handelOnClickRouteCard} = useRoutesCard();
  return (
    <TouchableWithoutFeedback onPress={() => handelOnClickRouteCard(id)}>
      <View
        style={
          selectedRoute === id
            ? [styles.root, styles.selected]
            : hide === 1
            ? [styles.root, styles.hide]
            : styles.root
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
            <View style={styles.col1}>
              {hide === 1 && (
                <ButtonIcon
                  title="Strecken einblenden"
                  Icon={Icon}
                  iconName="eye"
                  onClick={() => handelOnClickShowRouteBtn(id)}
                />
              )}
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
