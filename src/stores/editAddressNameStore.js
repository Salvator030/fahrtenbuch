import {useState} from 'react';
import {checkAlphabetString} from '../asserts/inputFieldsHelper';
import {useBetween} from 'use-between';
import useCreateAndEditAddressModal from './createAndEditAddressModalStore';
import useNewRoute from './newRouteStore';
import useDatabase from './databaseStore';

export default function useEditAddressName(oldAddressName) {
  const useShareCreateAndEditAddressModal = () =>
    useBetween(useCreateAndEditAddressModal);
  const {openAddressModalEditAddress} = useShareCreateAndEditAddressModal();

  const useShareNewRoute = () => useBetween(useNewRoute);
  const {startAddressId, destinationAddressId} = useShareNewRoute();

  const useShareDatabase = () => useBetween(useDatabase);
  const {getFullAddressById} = useShareDatabase();

  const [inputName, setInputName] = useState(
    destinationAddressId
      ? getFullAddressById(destinationAddressId).name
      : getFullAddressById(startAddressId).name,
  );
  const [inputError, setInputError] = useState('');
  const [isCheck, setCheck] = useState(false);

  const checkNameInput = () => {
    checkAlphabetString(inputName, setInputError, setInputName);
  };

  const handelOnClickBackBtn = () => {
    openAddressModalEditAddress();
  };

  return {
    inputName,
    setInputName,
    inputError,
    checkNameInput,
    handelOnClickBackBtn,
  };
}
