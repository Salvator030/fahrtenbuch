import {useState} from 'react';

export default function useNewAddressModal() {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModalVisible = () => setModalVisible(!modalVisible);

  return {modalVisible, toggleModalVisible};
}
