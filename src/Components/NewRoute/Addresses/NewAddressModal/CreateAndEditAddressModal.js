import React, {View} from 'react-native';
import {useBetween} from 'use-between';
import useCreateAndEditAddressModal from '../../../../stores/createAndEditAddressModalStore';
import {styles} from './CreateAndEditAddressModal.styles';
import CreateAddress from './CreateAddress/CreateAddress';
import EditAddress from './EditAddress/EditAddress';
import EditAddressName from './EditAddress/EditAddressName/EditAddressName';

export default function CreateAndEditAddressModal() {
  const useShareCreateAndEditAddressModal = () =>
    useBetween(useCreateAndEditAddressModal);

  const {addressModalDiscription} = useShareCreateAndEditAddressModal();
  return (
    <View style={styles.root}>
      {addressModalDiscription === 'create' && <CreateAddress />}
      {addressModalDiscription === 'editAddress' && <EditAddress />}
      {addressModalDiscription === 'editAddressName' && <EditAddressName />}
    </View>
  );
}
