import {useState} from 'react';
import * as InputHelper from '../asserts/inputFieldsHelper';
import {useBetween} from 'use-between';
import useCreateAndEditAddressModal from './createAndEditAddressModalStore';
import useNewRoute from './newRouteStore';
import useDatabase from './databaseStore';
import {parseDate} from '../asserts/dateHelper';
import useWarningModal from './warningModalStore';

export default function useEditAddressName() {
  const useShareCreateAndEditAddressModal = () =>
    useBetween(useCreateAndEditAddressModal);
  const {openAddressModalEditAddress, closeAddressModal} =
    useShareCreateAndEditAddressModal();

  const useShareNewRoute = () => useBetween(useNewRoute);
  const {startAddressId, destinationAddressId} = useShareNewRoute();

  const useShareDatabase = () => useBetween(useDatabase);
  const {getFullAddressById, renameAddress} = useShareDatabase();

  const useShareWarningModal = () => useBetween(useWarningModal);
  const {openWarning} = useShareWarningModal();
  const [oldAddress] = useState(
    destinationAddressId
      ? getFullAddressById(destinationAddressId)
      : getFullAddressById(startAddressId),
  );
  const [inputName, setInputName] = useState(oldAddress.name);
  const [inputError, setInputError] = useState('');
  const [check] = useState([false]);

  const checkNameInput = () => {
    InputHelper.checkAlphabetString(
      inputName,
      setInputError,
      setInputName,
      check,
      0,
    );
  };

  const handelOnClickBackBtn = () => {
    openAddressModalEditAddress();
  };
  const handelOnClickSaveBtn = async () => {
    InputHelper.checkAlphabetString(
      inputName,
      setInputError,
      setInputName,
      check,
      0,
    );
    if (!check.includes(false)) {
      const info = oldAddress.info.concat(
        `\n ${parseDate(new Date())} - umbenant - ${
          oldAddress.name
        } -> ${inputName}`,
      );
      const address = {
        name: inputName,
        street: oldAddress.street,
        hnr: oldAddress.hnr,
        plz: oldAddress.plz,
        place: oldAddress.place,
        info: info,
      };
      const result = await renameAddress(address, info, oldAddress.add_id);
      result === 'addressExist' && openWarning('addressExist');
      closeAddressModal();
    }
  };

  return {
    inputName,
    setInputName,
    inputError,
    checkNameInput,
    handelOnClickBackBtn,
    handelOnClickSaveBtn,
  };
}
