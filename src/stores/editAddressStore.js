import {useBetween} from 'use-between';
import useCreateAndEditAddressModal from './createAndEditAddressModalStore';

export default function useEditAddress() {
  const useShareCreateAndEditAddressModal = () =>
    useBetween(useCreateAndEditAddressModal);
  const {
    openAddressModalEditCorrection,
    openAddressModalEditName,
    openAddressModalEditPostal,
  } = useShareCreateAndEditAddressModal();

  const handelOnClickCorrectionAddress = () => {
    openAddressModalEditCorrection();
  };
  const handelOnClickRenameing = () => {
    openAddressModalEditName();
  };
  const handelOnClickNewPostal = () => {
    openAddressModalEditPostal();
  };

  return {
    handelOnClickCorrectionAddress,
    handelOnClickRenameing,
    handelOnClickNewPostal,
  };
}
