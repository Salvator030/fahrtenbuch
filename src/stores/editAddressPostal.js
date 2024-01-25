import {useState} from 'react';
import useCreateAndEditAddressModal from './createAndEditAddressModalStore';
import {useBetween} from 'use-between';
import useNewRoute from './newRouteStore';
import useDatabase from './databaseStore';
import InputHelper from '../asserts/inputFieldsHelper';

export default function useEditAddressPostal() {
  const useShareCreateAndEditAddressModal = () =>
    useBetween(useCreateAndEditAddressModal);
  const {openAddressModalEditAddress} = useShareCreateAndEditAddressModal();

  const useShareNewRoute = () => useBetween(useNewRoute);
  const {startAddressId, destinationAddressId} = useShareNewRoute();

  const useShareDatabase = () => useBetween(useDatabase);
  const {getFullAddressById} = useShareDatabase();

  const address = destinationAddressId
    ? getFullAddressById(destinationAddressId)
    : getFullAddressById(startAddressId);

  const [streetValue, setStreetValue] = useState(address.street);
  const [streetError, setStreetError] = useState('');
  const [hnrValue, setHnrValue] = useState(address.hnr);
  const [hnrError, setHnrError] = useState('');
  const [plzValue, setPlzValue] = useState(address.plz);
  const [plzError, setPlzError] = useState('');
  const [placeValue, setPlaceValue] = useState(address.place);
  const [placeError, setPlaceError] = useState('');

  const [checks] = useState([false, false, false, false]);

  const checkStreetInput = () => {};
  const checkHnrInput = () => {};
  const checkPlzInput = () => {};
  const checkPlaceInput = () => {};

  const handelOnClickBackBtn = () => {
    openAddressModalEditAddress();
  };

  const handelOnClickSaveBtn = () => {};

  return {
    streetValue,
    setStreetValue,
    streetError,
    checkStreetInput,
    hnrValue,
    setHnrValue,
    hnrError,
    checkHnrInput,
    plzValue,
    setPlzValue,
    plzError,
    checkPlzInput,
    placeValue,
    setPlaceValue,
    placeError,
    checkPlaceInput,
    handelOnClickBackBtn,
  };
}
