import {useState} from 'react';
import useDatabase from './databaseStore';
import {useBetween} from 'use-between';
export default function useNewAddressModal() {
  const useShareDatabase = () => useBetween(useDatabase);
  const {saveNewAddress} = useShareDatabase();

  const [modalVisible, setModalVisible] = useState(false);
  const toggleModalVisible = () => setModalVisible(!modalVisible);
  const handelOnClickBackBtn = () => toggleModalVisible();
  const handelOnClickSaveBtn = () => {};

  return {modalVisible, toggleModalVisible, handelOnClickBackBtn};
}
