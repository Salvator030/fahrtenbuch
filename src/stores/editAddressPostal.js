import {useState} from 'react';
import useCreateAndEditAddressModal from './createAndEditAddressModalStore';
import {useBetween} from 'use-between';
import useNewRoute from './newRouteStore';
import useDatabase from './databaseStore';
import {parseDate} from '../asserts/dateHelper';
import * as InputHelper from '../asserts/inputFieldsHelper';

export default function useEditAddressPostal() {
  const useShareCreateAndEditAddressModal = () =>
    useBetween(useCreateAndEditAddressModal);
  const {openAddressModalEditAddress, closeAddressModal} =
    useShareCreateAndEditAddressModal();

  const useShareNewRoute = () => useBetween(useNewRoute);
  const {startAddressId, destinationAddressId} = useShareNewRoute();

  const useShareDatabase = () => useBetween(useDatabase);
  const {getFullAddressById, changeAddressNAmeOrPostal} = useShareDatabase();

  const [oldAddress] = useState(
    destinationAddressId
      ? getFullAddressById(destinationAddressId)
      : getFullAddressById(startAddressId),
  );

  const [streetValue, setStreetValue] = useState(oldAddress.street);
  const [streetError, setStreetError] = useState('');
  const [hnrValue, setHnrValue] = useState(oldAddress.hnr);
  const [hnrError, setHnrError] = useState('');
  const [plzValue, setPlzValue] = useState(oldAddress.plz);
  const [plzError, setPlzError] = useState('');
  const [placeValue, setPlaceValue] = useState(oldAddress.place);
  const [placeError, setPlaceError] = useState('');

  const [checks] = useState([false, false, false, false]);

  const checkStreetInput = () => {
    InputHelper.checkAlphabetString(
      streetValue,
      setStreetError,
      setStreetValue,
      checks,
      0,
    );
  };
  const checkHnrInput = () => {
    InputHelper.checkHnrInput(hnrValue, setHnrError, setHnrValue, checks, 1);
  };
  const checkPlzInput = () => {
    InputHelper.checkPlzInput(plzValue, setPlzError, setPlzValue, checks, 2);
  };
  const checkPlaceInput = () => {
    InputHelper.checkAlphabetString(
      placeValue,
      setPlaceError,
      setPlaceValue,
      checks,
      3,
    );
  };

  const checkInputs = () => {
    checkStreetInput();
    checkHnrInput();
    checkPlaceInput();
    checkPlzInput();
  };

  const handelOnClickBackBtn = () => {
    openAddressModalEditAddress();
  };

  const handelOnClickSaveBtn = async () => {
    checkInputs();
    if (!checks.includes(false)) {
      const info = oldAddress.info.concat(
        `\n ${parseDate(new Date())} - neu Addresse - ${oldAddress.street} ${
          oldAddress.hnr
        } ${oldAddress.plz} ${
          oldAddress.place
        } -> ${streetValue} ${hnrValue} ${plzValue} ${placeValue}`,
      );

      const address = {
        name: oldAddress.name,
        street: streetValue,
        hnr: hnrValue,
        plz: plzValue,
        place: placeValue,
        info: info,
      };
      await changeAddressNAmeOrPostal(
        address,
        info,
        oldAddress.add_id,
        oldAddress.name,
      );
      closeAddressModal();
    }
  };

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
    handelOnClickSaveBtn,
  };
}
