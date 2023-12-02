import {useEffect, useState} from 'react';
import {useBetween} from 'use-between';
import useMainView from './MainViewStore';

export default function useNewRoute() {
  const useShareMainView = () => useBetween(useMainView);
  const {toggleCreateNewRoute} = useShareMainView();
  const [viewDescription, setViewDescription] = useState('startAddress');
  const [startAddressId, setStartAddressId] = useState(0);
  const [destinationAddressId, setDestinationAddressId] = useState(0);
  const [distance, setDistance] = useState(0);

  const createNewRoute = () => {
    return {
      startAdd_id: startAddressId,
      destAdd_id: destinationAddressId,
      distance: distance,
    };
  };

  const clearNewRoute = () => {
    setStartAddressId(0);
    setDestinationAddressId(0);
    setDistance(0);
  };

  const closeNewRoute = () => {
    clearNewRoute();
    setViewDescription('startAddress');
    toggleCreateNewRoute();
  };

  return {
    viewDescription,
    setViewDescription,
    startAddressId,
    setStartAddressId,
    destinationAddressId,
    setDestinationAddressId,
    distance,
    setDistance,
    createNewRoute,
    closeNewRoute,
  };
}
