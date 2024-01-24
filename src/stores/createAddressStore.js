import {useBetween} from 'use-between';
import useAddressInputFields from './addressInputFieldsStore';
import useCreateAndEditAddressModal from './createAndEditAddressModalStore';
import useDatabase from './databaseStore';
import useWarningModal from './warningModalStore';

export default function useCreateAddress() {
  const useShareCreateAndEditAddressModal = () =>
    useBetween(useCreateAndEditAddressModal);
  const {closeAddressModal} = useShareCreateAndEditAddressModal();

  const useShareDatabase = () => useBetween(useDatabase);
  const {saveNewAddress} = useShareDatabase();

  const useShareWarningModal = () => useBetween(useWarningModal);
  const {openWarning} = useShareWarningModal();

  const useShareAddressInputFields = () => useBetween(useAddressInputFields);
  const {getNewAddress, cleanInputFields} = useShareAddressInputFields();

  const handelOnClickBackBtn = () => {
    cleanInputFields();
    closeAddressModal();
  };

  const handelOnClickSaveBtn = async () => {
    console.log('handelOnClickSaveBtn');
    const address = getNewAddress();
    console.log(address);
    if (address) {
      let result = await saveNewAddress(address);
      console.log('click ', result);
      if (typeof result === 'string') {
        openWarning(result);
      }
      cleanInputFields();
      closeAddressModal();
    }
  };

  return {handelOnClickBackBtn, handelOnClickSaveBtn};
}
