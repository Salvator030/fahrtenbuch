import {useState} from 'react';

export default function useCreateAndEditAddressModal() {
  const [addressModalVisible, setaddressModalVisible] = useState(false);
  const [addressModalDiscription, setAddressModalDiscription] = useState('');

  const toggleAddressModalVisible = () => {
    setaddressModalVisible(!addressModalVisible);
  };

  const openAddressModalCreate = () => {
    setAddressModalDiscription('create');
    toggleAddressModalVisible();
  };
  const openAddressModalEditCorrection = () => {
    setAddressModalDiscription('editCorrection');
    toggleAddressModalVisible();
  };
  const openAddressModalEditName = () => {
    setAddressModalDiscription('editName');
    toggleAddressModalVisible();
  };
  const openAddressModalEditPostal = () => {
    setAddressModalDiscription('editPostal');
    toggleAddressModalVisible();
  };
  const openAddressModalEditInfo = () => {
    setAddressModalDiscription('editInfo');
    toggleAddressModalVisible();
  };

  const closeAddressModal = () => {
    toggleAddressModalVisible();
  };

  return {
    addressModalVisible,
    addressModalDiscription,
    openAddressModalCreate,
    openAddressModalEditCorrection,
    openAddressModalEditName,
    openAddressModalEditPostal,
    openAddressModalEditInfo,
    closeAddressModal,
  };
}
