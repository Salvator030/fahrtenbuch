import {useRef, useState} from 'react';
import useDatabase from './databaseStore';
import {useBetween} from 'use-between';
import useWarningModal from './warningModalStore';
export default function useNewAddressModal() {
  const useShareDatabase = () => useBetween(useDatabase);
  const {saveNewAddress} = useShareDatabase();

  const useShareWarningModal = () => useBetween(useWarningModal);
  const {openWarning} = useShareWarningModal();

  const [modalVisible, setModalVisible] = useState(false);

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
    const v = /^[\w\säüöß.,-]+$/;

    if (nameValue && !v.test(nameValue)) {
      setNameError(nameValue);
      setNameValue('');
      checks[0] = false;
    } else {
      setNameError('');
      checks[0] = true;
    }
  };

  const checkStreetInput = () => {
    const v = /^[\w\säüöß.,-]+$/;

    if (streetValue && !v.test(streetValue)) {
      setStreetError(streetValue);
      setStreetValue('');
      checks[1] = false;
    } else {
      setStreetError('');
      checks[1] = true;
    }
  };
  const checkHnrInput = () => {
    const v = /^\d{1,4}[A-Za-z]?$/;

    if (hnrValue && !v.test(hnrValue)) {
      setHnrError(hnrValue);
      setHnrValue('');
      checks[2] = false;
    } else {
      setHnrError('');
      checks[2] = true;
    }
  };

  const checkPlzInput = () => {
    const v = /^\d{5}$/;

    if (plzValue && !v.test(plzValue)) {
      setPlzError(plzValue);
      setPlzValue('');
      checks[3] = false;
    } else {
      setPlzError('');
      checks[3] = true;
    }
  };

  const checkPlaceInput = () => {
    const v = /^[\w\säüöß.,-]+$/;

    if (placeValue && !v.test(placeValue)) {
      setPlaceError(placeValue);
      setPlaceValue('');
      checks[4] = false;
    } else {
      setPlaceError('');
      checks[4] = true;
    }
  };

  const checkInfoInput = () => {
    const v = /^[\w\säüöß.,-]+$/;

    if (infoValue && !v.test(infoValue)) {
      setInfoError(infoValue);
      setInfoValue('');
      checks[5] = false;
    } else {
      setInfoError('');
      checks[5] = true;
    }
  };

  const getNewAddress = () => {
    const address = {
      name: nameValue,
      street: streetValue,
      hnr: hnrValue,
      plz: plzValue,
      place: placeValue,
      info: infoValue ? infoValue : null,
    };

    return address;
  };

  function cleanInputFields() {
    setNameValue('');
    setStreetValue('');
    setHnrValue('');
    setPlzValue('');
    setPlaceValue('');
    setInfoValue('');
  }

  const toggleModalVisible = () => setModalVisible(!modalVisible);
  const handelOnClickBackBtn = () => {
    cleanInputFields();
    toggleModalVisible();
  };

  const handelOnClickSaveBtn = async () => {
    if (!checks.includes(false)) {
      let result = await saveNewAddress(getNewAddress());
      if (typeof result === 'string') {
        console.log('click ', result);
        openWarning(result);
        cleanInputFields();
        toggleModalVisible();
      }
    }
  };

  return {
    modalVisible,
    toggleModalVisible,
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
    handelOnClickBackBtn,
    handelOnClickSaveBtn,
    checkNameInput,
    checkStreetInput,
    checkHnrInput,
    checkPlzInput,
    checkPlaceInput,
    checkInfoInput,
  };
}
