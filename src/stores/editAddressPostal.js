import {useState} from 'react';
import useCreateAndEditAddressModal from './createAndEditAddressModalStore';
import {useBetween} from 'use-between';

export default function useEditAddressPostal() {
  const useShareCreateAndEditAddressModal = () =>
    useBetween(useCreateAndEditAddressModal);
  const {openAddressModalEditAddress} = useShareCreateAndEditAddressModal();
  const [streetValue, setStreetValue] = useState();
  const [streetError, setStreetError] = useState('');
  const [hnrValue, setHnrValue] = useState();
  const [hnrError, setHnrError] = useState('');
  const [plzValue, setPlzValue] = useState();
  const [plzError, setPlzError] = useState('');
  const [placeValue, setPlaceValue] = useState();
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
