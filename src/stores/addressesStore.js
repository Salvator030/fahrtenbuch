import React, {use, useEffect, useState} from 'react';
import AddressCard from '../Components/NewRoute/Addresses/AddressCard/AddressCard';
import {sortByAlphabetAscending} from '../asserts/sortHelper';
import {useBetween} from 'use-between';
import useDatabase from './databaseStore';
import useMainView from './MainViewStore';
import useNewAddressModal from './newAddresModalStore';
import useNewRoute from './newRouteStore';

export default function useAddresses() {
  const [sortValue, setSortValue] = useState('name');
  const [searchValue, setSearchValue] = useState('');
  const [cards, setCards] = useState([]);

  const useShareDatabase = () => useBetween(useDatabase);
  const {addresses} = useShareDatabase();
  const useShareMainView = () => useBetween(useMainView);
  const {toggleCreateNewRoute} = useShareMainView();
  const useShareNewAddressModal = () => useBetween(useNewAddressModal);
  const {toggleModalVisible} = useShareNewAddressModal();
  const useShareNewRoute = () => useBetween(useNewRoute);
  const {
    viewDescription,
    setViewDescription,
    setStartAddress,
    setDestinationAddress,
  } = useShareNewRoute();

  const handelOnClickBackBtn = () => {
    viewDescription === 'startAddress'
      ? (setStartAddress(0), toggleCreateNewRoute())
      : setDestinationAddress(0),
      setViewDescription('startAddress');
  };

  const handelOnClickNextBtn = () => {
    console.log('next');
    viewDescription === 'startAddress'
      ? setViewDescription('destinationAddress')
      : setViewDescription('distance');
  };

  const handelOnClickNewAddressBtn = () => {
    toggleModalVisible();
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
    console.log(addresses);
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
            address.street.toLowerCase().startsWith(searchValue),
          );
        }

        break;
      }
      case 'plz': {
        list.sort((a, b) => sortByAlphabetAscending(a.plz, b.plz));
        if (searchValue !== '') {
          list = list.filter(address =>
            address.plz.toLowerCase().startsWith(searchValue),
          );
        }
        break;
      }
      case 'place': {
        list.sort((a, b) => sortByAlphabetAscending(a.place, b.place));
        if (searchValue !== '') {
          list = list.filter(address =>
            address.place.toLowerCase().startsWith(searchValue),
          );
        }
        break;
      }
      default: {
      }
    }
    const cardsList = list.map(address => (
      <AddressCard key={('add', address.add_id)} address={address} />
    ));
    setCards(cardsList);
  }, [addresses, searchValue, sortValue]);

  return {
    sortValue,
    setSortValue,
    searchValue,
    setSearchValue,
    cards,
    handelOnClickBackBtn,
    handelOnClickNextBtn,
    handelOnClickNewAddressBtn,
    handelOnClickNamePill,
    handelOnClickStreetPill,
    handelOnClickPlzPill,
    handelOnClickPlacePill,
  };
}
