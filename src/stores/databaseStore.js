import {useState, useCallback, useEffect} from 'react';
import * as database from '../database/databaseHandler';

export default function useDatabase() {
  const [addresses, setAddresses] = useState([]);

  const loadAddressesCallback = useCallback(async () => {
    try {
      const addressesResult = await database.getAllAddresses();
      if (addressesResult.length) {
        setAddresses(addressesResult);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadAddressesCallback();
  }, [loadAddressesCallback]); // triggering by new Addresses is a Workaround

  const saveNewAddress = address => {
    database.saveNewAddress(address);
    loadAddressesCallback();
  };

  return {addresses, saveNewAddress};
}
