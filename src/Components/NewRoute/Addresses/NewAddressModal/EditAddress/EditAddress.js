import React, {Button, Text, View} from 'react-native';
import ButtonIcon from '../../../../CustomComponents/ButtonSvgIcon/ButtonIcon';
import BackIcon from 'react-native-vector-icons/Ionicons';
import {styles} from './EditAddress.styles';
import {useBetween} from 'use-between';
import useCreateAndEditAddressModal from '../../../../../stores/createAndEditAddressModalStore';
import useEditAddress from '../../../../../stores/editAddressStore';

export default function EditAddress() {
  const useShareCreateAndEditAddressModal = () =>
    useBetween(useCreateAndEditAddressModal);
  const {closeAddressModal} = useShareCreateAndEditAddressModal();

  const {
    handelOnClickCorrectionAddress,
    handelOnClickRenameing,
    handelOnClickNewPostal,
  } = useEditAddress();
  return (
    <View style={styles.dialog}>
      <Text style={styles.headline}>Bearbeiten</Text>
      <View style={styles.btn1}>
        <Button title="Korrigieren" onPress={handelOnClickCorrectionAddress} />
      </View>
      <View style={styles.btn2}>
        <Button title="Namen ändern" onPress={handelOnClickRenameing} />
      </View>
      <View style={styles.btn3}>
        <Button title="Adresse ändern" onPress={handelOnClickNewPostal} />
      </View>
      <ButtonIcon
        Icon={BackIcon}
        title="zurück"
        iconName="arrow-back"
        onClick={closeAddressModal}
      />
    </View>
  );
}
