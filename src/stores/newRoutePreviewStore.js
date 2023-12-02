import {useEffect, useState} from 'react';
import {useBetween} from 'use-between';
import useNewRoute from './newRouteStore';
import useDatabase from './databaseStore';

export default function useNewRoutePreview() {
  const useShareNewRoute = () => useBetween(useNewRoute);
  const {startAddressId, destinationAddressId} = useShareNewRoute();

  const useShareDatabase = () => useBetween(useDatabase);
  const {getFullAddressById} = useShareDatabase();

  const [fullStartAddress, setFullStartAddress] = useState(undefined);
  const [fullDestinationAddress, setFullDestinationAddress] =
    useState(undefined);

  // TODO I m sure thats not nice
  useEffect(() => {
    if (startAddressId !== 0) {
      setFullStartAddress(getFullAddressById(startAddressId));
    } else {
      setFullStartAddress(undefined);
    }
  }, [fullStartAddress, getFullAddressById, startAddressId]);

  useEffect(() => {
    if (destinationAddressId !== 0) {
      setFullDestinationAddress(getFullAddressById(destinationAddressId));
    } else {
      setFullDestinationAddress(undefined);
    }
  }, [fullDestinationAddress, getFullAddressById, destinationAddressId]);

  return {fullStartAddress, fullDestinationAddress};
}
