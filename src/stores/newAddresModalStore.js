import {useRef, useState} from 'react';
import useDatabase from './databaseStore';
import {useBetween} from 'use-between';
export default function useNewAddressModal() {
  const useShareDatabase = () => useBetween(useDatabase);
  const {saveNewAddress} = useShareDatabase();

  const [modalVisible, setModalVisible] = useState(false);

  const [nameValue, setNameValue] = useState('');
  const [streetValue, setStreetValue] = useState('');
  const [hnrValue, setHnrValue] = useState('');
  const [plzValue, setPlzValue] = useState('');
  const [placeValue, setPlaceValue] = useState('');
  const [infoValue, setInfoValue] = useState('');

  const nameRef = useRef(null);
  const streetRef = useRef(null);
  const hnrRef = useRef(null);
  const plzRef = useRef(null);
  const placeRef = useRef(null);

  function cleanInputFields() {
    setNameValue('');
    setStreetValue('');
    setHnrValue('');
    setPlzValue('');
    setPlaceValue('');
    setInfoValue('');
  }

  var checks = [false, false, false, false, false];
  const refs = [nameRef, streetRef, hnrRef, plzRef, placeRef];

  function checkInput() {
    console.log(refs[1].current.element);
    // for (let i = 0; i < 5; i++) {
    //   
    //   if (refs[i].current.value === '') {
    //     checks[i] = false;
    //     refs[i].current.element.style.borderColor = 'red';
    //   } else {
    //     checks[i] = true;
    //     refs[i].current.style.borderColor = 'black';
    //   }
    // }

    // if (plzRef.current.element.value === '') {
    //   checks[4] = false;
    //   plzRef.current.element.style.borderColor = 'red';
    // } else {
    //   checks[4] = true;
    //   plzRef.current.element.style.borderColor = 'black';
    // }
  }

  const toggleModalVisible = () => setModalVisible(!modalVisible);
  const handelOnClickBackBtn = () => toggleModalVisible();
  const handelOnClickSaveBtn = () => {
    checkInput();
  };

  return {
    modalVisible,
    nameValue,
    setNameValue,
    nameRef,
    streetValue,
    setStreetValue,
    streetRef,
    hnrValue,
    setHnrValue,
    hnrRef,
    plzValue,
    setPlzValue,
    plzRef,
    placeValue,
    setPlaceValue,
    placeRef,
    infoValue,
    setInfoValue,
    toggleModalVisible,
    handelOnClickBackBtn,
    handelOnClickSaveBtn,
  };
}
