import React, {StyleSheet, Text, View} from 'react-native';
import AddressCard from './AddressCard/AddressCard';
import useNewRoutePreview from '../../../stores/newRoutePreviewStore';
import {useBetween} from 'use-between';
import useNewRoute from '../../../stores/newRouteStore';

const styles = StyleSheet.create({
  container: {marginTop: 32, marginBottom: 32},
  addressHeadlline: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default function NewRoutePreview() {
  const {fullStartAddress, fullDestinationAddress} = useNewRoutePreview();
  const useShareNewRoute = () => useBetween(useNewRoute);
  const {distance} = useShareNewRoute();

  return (
    <View style={styles.root}>
      {fullStartAddress && (
        <View style={styles.container}>
          <Text style={styles.addressHeadlline}>Start Addresse</Text>
          <AddressCard address={fullStartAddress} />
        </View>
      )}
      {fullDestinationAddress && (
        <View style={styles.container}>
          <Text style={styles.addressHeadlline}>Ziel Addresse</Text>
          <AddressCard address={fullDestinationAddress} />
        </View>
      )}
      {distance !== 0 && (
        <View style={styles.container}>
          <Text style={styles.addressHeadlline}>Entfernung</Text>
          <Text>{distance} KM</Text>
        </View>
      )}
    </View>
  );
}
