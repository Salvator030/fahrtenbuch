import React, {View} from 'react-native';
import {useBetween} from 'use-between';
import useCreateAndEditAddressModal from '../../../../stores/createAndEditAddressModalStore';
import {styles} from './CreateAndEditAddressModal.styles';
import CreateAddress from './CreateAddress/CreateAddress';

export default function CreateAndEditAddressModal() {
  const useShareCreateAndEditAddressModal = () =>
    useBetween(useCreateAndEditAddressModal);

  const {addressModalDiscription} = useShareCreateAndEditAddressModal();
  return (
    <View style={styles.root}>
      {addressModalDiscription === 'create' && <CreateAddress />}
    </View>
  );
}
