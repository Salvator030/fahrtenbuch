import {Modal} from 'react-native';
import useNewAddressModal from '../../../stores/newAddresModalStore';
import {useBetween} from 'use-between';

export default function NewAddressModal() {
  const useShareNewAddressModal = () => useBetween(useNewAddressModal);
  const {modalVisible} = useShareNewAddressModal();
  return <Modal transparent={true} visible={modalVisible}></Modal>;
}
