import {useState} from 'react';
import {useBetween} from 'use-between';
import useMainView from './MainViewStore';

export default function useNewRoute() {
  const useShareMainView = () => useBetween(useMainView);
  const {toggleCreateNewRoute} = useShareMainView();
  const [viewDescription, setViewDescription] = useState('startAddress');
  const [startAddress, setStartAddress] = useState(0);
  const [destinationAddress, setDestinationAddress] = useState(0);
  const [distance, setDistance] = useState(0);

  const createNewRoute = () => {
    return {startAddress, destinationAddress, distance};
  };

  const clearNewRoute = () => {
    setStartAddress(0);
    setDestinationAddress(0);
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
    startAddress,
    setStartAddress,
    destinationAddress,
    setDestinationAddress,
    distance,
    setDistance,
    createNewRoute,
    closeNewRoute,
  };
}
