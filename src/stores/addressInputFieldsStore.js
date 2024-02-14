import {useState} from 'react';
import * as InputHelper from '../asserts/inputFieldsHelper';
export default function useAddressInputFields() {
  const [nameValue, setNameValue] = useState('');
  const [nameError, setNameError] = useState('');
  const [streetValue, setStreetValue] = useState('');
  const [streetError, setStreetError] = useState('');

  const [hnrValue, setHnrValue] = useState('');
  const [hnrError, setHnrError] = useState('');

  const [plzValue, setPlzValue] = useState('');
  const [plzError, setPlzError] = useState('');

  const [placeValue, setPlaceValue] = useState('');
  const [placeError, setPlaceError] = useState('');

  const [infoValue, setInfoValue] = useState('');
  const [infoError, setInfoError] = useState('');

  const [checks] = useState([false, false, false, false, false, true]);
  const checkNameInput = () => {
    InputHelper.checkAlphabetString(
      nameValue,
      setNameError,
      setNameValue,
      checks,
      0,
    );
  };

  const checkStreetInput = () => {
    InputHelper.checkAlphabetString(
      streetValue,
      setStreetError,
      setStreetValue,
      checks,
      1,
    );
  };
  const checkHnrInput = () => {
    InputHelper.checkHnrInput(hnrValue, setHnrError, setHnrValue, checks, 2);
  };

  const checkPlzInput = () => {
    InputHelper.checkPlzInput(plzValue, setPlzError, setPlzValue, checks, 3);
  };

  const checkPlaceInput = () => {
    InputHelper.checkAlphabetString(
      placeValue,
      setPlaceError,
      setPlaceValue,
      checks,
      4,
    );
  };

  const checkInfoInput = () => {
    InputHelper.checkAlphabetString(
      infoValue,
      setInfoError,
      setInfoValue,
      checks,
      5,
    );
  };

  const setGivenAddresValues = address => {
    setNameValue(address.name);
    setStreetValue(address.street);
    setHnrValue(address.hnr);
    setPlzValue(address.plz);
    setPlaceValue(address.place);
    setInfoValue(!address.info ? '' : address.info);
  };

  const getNewAddress = () => {
    console.log(checks);
    if (!checks.includes(false)) {
      return {
        name: nameValue,
        street: streetValue,
        hnr: hnrValue,
        plz: plzValue,
        place: placeValue,
        info: infoValue ? infoValue : '',
      };
    } else {
      return null;
    }
  };

  function cleanInputFields() {
    setNameValue('');
    setStreetValue('');
    setHnrValue('');
    setPlzValue('');
    setPlaceValue('');
    setInfoValue('');
  }

  return {
    nameValue,
    setNameValue,
    nameError,
    streetValue,
    setStreetValue,
    streetError,
    hnrValue,
    setHnrValue,
    hnrError,
    plzValue,
    setPlzValue,
    plzError,
    placeValue,
    setPlaceValue,
    placeError,
    infoValue,
    infoError,
    setInfoError,
    setInfoValue,
    checkNameInput,
    checkStreetInput,
    checkHnrInput,
    checkPlzInput,
    checkPlaceInput,
    checkInfoInput,
    getNewAddress,
    cleanInputFields,
    setGivenAddresValues,
  };
}
