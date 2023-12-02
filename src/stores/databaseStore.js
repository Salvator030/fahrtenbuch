import {useState, useCallback, useEffect} from 'react';
import * as database from '../database/databaseHandler';

export default function useDatabase() {
  const [addresses, setAddresses] = useState([]);
  const [routes, setRoutes] = useState([]);

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

  const loadRoutesCallback = useCallback(async () => {
    try {
      const routesResult = await database.getAllRoutes();
      if (routesResult.length) {
        setRoutes(routesResult);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadAddressesCallback();
  }, [loadAddressesCallback]);

  useEffect(() => {
    loadRoutesCallback();
  }, [loadRoutesCallback]);

  const saveNewAddress = address => {
    database.saveNewAddress(address);
    loadAddressesCallback();
  };

  const getFullAddressById = id => {
    return addresses.find(address => address.add_id === id);
  };

  const saveNewRoute = route => {
    database.saveNewRoute(route);
    loadRoutesCallback();
  };

  return {addresses, saveNewAddress, getFullAddressById, routes, saveNewRoute};
}
