import React, {useEffect, useState} from 'react';
import AddressCard from '../Components/NewRoute/Addresses/AddressCard/AddressCard';
import {sortByAlphabetAscending} from '../asserts/sortHelper';
import {useBetween} from 'use-between';
import useDatabase from './databaseStore';
import useMainView from './MainViewStore';
import useCreateAndEditAddressModal from './createAndEditAddressModalStore';
import useNewRoute from './newRouteStore';
import useWarningModal from './warningModalStore';

export default function useAddresses() {
  const [sortValue, setSortValue] = useState('name');
  const [searchValue, setSearchValue] = useState('');
  const [cards, setCards] = useState([]);
  const [hideAddress, setHideAddress] = useState(true);

  const useShareDatabase = () => useBetween(useDatabase);
  const {addresses, getFullAddressById} = useShareDatabase();

  const useShareMainView = () => useBetween(useMainView);
  const {toggleCreateNewRoute, toggleShowWarning} = useShareMainView();

  const useShareCreateAndEditAddressModal = () =>
    useBetween(useCreateAndEditAddressModal);
  const {openAddressModalCreate} = useShareCreateAndEditAddressModal();

  const useShareWarningModal = () => useBetween(useWarningModal);
  const {setWarningDescription, setSelectedAddressesWarning} =
    useShareWarningModal();

  const useShareNewRoute = () => useBetween(useNewRoute);
  const {
    viewDescription,
    setViewDescription,
    startAddressId,
    setStartAddressId,
    destinationAddressId,
    setDestinationAddressId,
  } = useShareNewRoute();

  const toggleHideAddress = () => {
    setHideAddress(!hideAddress);
  };

  const handelOnClickBackBtn = () => {
    viewDescription === 'startAddress'
      ? (setStartAddressId(0), toggleCreateNewRoute())
      : setDestinationAddressId(0),
      setViewDescription('startAddress');
  };

  const handelOnClickNextBtn = () => {
    viewDescription === 'startAddress'
      ? setViewDescription('destinationAddress')
      : setViewDescription('distance');
  };

  const handelOnClickEditAddrees = () => {
    // viewDescription === 'startAddress'
    //   ? handelEditAddress(getFullAddressById(startAddressId))
    //   : handelEditAddress(getFullAddressById(destinationAddressId));
  };

  const handelOnClickDeleteBtn = () => {
    setWarningDescription('deleteAddress');
    if (viewDescription === 'startAddress') {
      setSelectedAddressesWarning(startAddressId);
    } else {
      setSelectedAddressesWarning(destinationAddressId);
    }
    toggleShowWarning();
  };

  const handelOnClickNewAddressBtn = () => {
    openAddressModalCreate();
  };

  const handelOnClickNamePill = () => {
    setSortValue('name');
  };

  const handelOnClickStreetPill = () => {
    setSortValue('street');
  };

  const handelOnClickPlzPill = () => {
    setSortValue('plz');
  };

  const handelOnClickPlacePill = () => {
    setSortValue('place');
  };

  useEffect(() => {
    let list = addresses;
    switch (sortValue) {
      case 'name': {
        list.sort((a, b) => sortByAlphabetAscending(a.name, b.name));
        if (searchValue !== '') {
          list = list.filter(address =>
            address.name.toLowerCase().startsWith(searchValue.toLowerCase()),
          );
        }

        break;
      }
      case 'street': {
        list.sort((a, b) => sortByAlphabetAscending(a.street, b.street));
        if (searchValue !== '') {
          list = list.filter(address =>
            address.street.toLowerCase().startsWith(searchValue.toLowerCase()),
          );
        }

        break;
      }
      case 'plz': {
        list.sort((a, b) => sortByAlphabetAscending(a.plz, b.plz));
        if (searchValue !== '') {
          list = list.filter(address =>
            address.plz.toLowerCase().startsWith(searchValue.toLowerCase()),
          );
        }
        break;
      }
      case 'place': {
        list.sort((a, b) => sortByAlphabetAscending(a.place, b.place));
        if (searchValue !== '') {
          list = list.filter(address =>
            address.place.toLowerCase().startsWith(searchValue.toLowerCase()),
          );
        }
        break;
      }
      default: {
      }
    }
    if (hideAddress) {
      list = list.filter(address => address.hide === 0);
    }

    const cardsList = list.map(address => (
      <AddressCard key={('add', address.add_id)} address={address} />
    ));
    setCards(cardsList);
  }, [addresses, searchValue, sortValue, hideAddress]);

  return {
    sortValue,
    setSortValue,
    searchValue,
    setSearchValue,
    cards,
    handelOnClickBackBtn,
    handelOnClickNextBtn,
    handelOnClickNewAddressBtn,
    handelOnClickDeleteBtn,
    handelOnClickNamePill,
    handelOnClickStreetPill,
    handelOnClickPlzPill,
    handelOnClickPlacePill,
    hideAddress,
    toggleHideAddress,
    handelOnClickEditAddrees,
  };
}
