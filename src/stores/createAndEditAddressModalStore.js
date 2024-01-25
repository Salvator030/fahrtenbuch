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

  const openAddressModalEditAddress = () => {
    setAddressModalDiscription('editAddress');
    if (!addressModalVisible) {
      toggleAddressModalVisible();
    }
  };
  const openAddressModalEditCorrection = () => {
    setAddressModalDiscription('editCorrection');
  };
  const openAddressModalEditName = () => {
    setAddressModalDiscription('editAddressName');
  };
  const openAddressModalEditPostal = () => {
    setAddressModalDiscription('editAddressPostal');
  };

  const closeAddressModal = () => {
    toggleAddressModalVisible();
  };

  return {
    addressModalVisible,
    addressModalDiscription,
    openAddressModalCreate,
    openAddressModalEditAddress,
    openAddressModalEditCorrection,
    openAddressModalEditName,
    openAddressModalEditPostal,
    closeAddressModal,
  };
}
