import {useState, useCallback, useEffect} from 'react';
import * as database from '../database/databaseHandler';

export default function useDatabase() {
  const [addresses, setAddresses] = useState([]);
  const [routes, setRoutes] = useState(undefined);
  const [drivenRoutes, setDrivenRoutes] = useState([]);

  const loadAddressesCallback = useCallback(async () => {
    console.log('getAddresses');
    try {
      const addressesResult = await database.getAllAddresses();
      if (addressesResult.length) {
        setAddresses(addressesResult);
      }
      console.log('addressesResult', addressesResult);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const loadRoutesCallback = useCallback(async () => {
    console.log('getRoutes');
    try {
      const routesResult = await database.getAllRoutes();
      if (routesResult.length) {
        setRoutes(routesResult);
      }
      console.log('routesResult', routesResult);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const loadDrivenRoutesCallback = useCallback(async () => {
    console.log('getDrivenRoutes');
    try {
      const drivenRoutesResult = await database.getAllDrivenRoutes();
      if (drivenRoutesResult.length) {
        setDrivenRoutes(drivenRoutesResult);
      }
      console.log('drivenRoutesResult', drivenRoutesResult);
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

  useEffect(() => {
    loadDrivenRoutesCallback();
  }, [loadDrivenRoutesCallback]);

  // --- address
  const saveNewAddress = address => {
    database.saveNewAddress(address);
    loadAddressesCallback();
  };

  const getFullAddressById = id => {
    return addresses.find(address => address.add_id === id);
  };

  // --- route
  const saveNewRoute = route => {
    database.saveNewRoute(route);
    loadRoutesCallback();
  };

  const getFullRouteById = id => {
    return routes.find(route => route.route_id === id);
  };

  // --- drivenRoute
  const saveNewDrivenRoute = drivenRoute => {
    database.saveNewDrivenRoute(drivenRoute);
    loadDrivenRoutesCallback();
  };

  return {
    addresses,
    saveNewAddress,
    getFullAddressById,
    routes,
    saveNewRoute,
    getFullRouteById,
    drivenRoutes,
    saveNewDrivenRoute,
  };
}
