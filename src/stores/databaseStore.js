import {useState, useCallback, useEffect} from 'react';
import * as database from '../database/databaseHandler';
import {useBetween} from 'use-between';
import useCalender from './calenderStore';

export default function useDatabase() {
  const useShareCalender = () => useBetween(useCalender);
  const {selectedDate} = useShareCalender();

  const [addresses, setAddresses] = useState([]);
  const [routes, setRoutes] = useState(undefined);
  const [drivenRoutes, setDrivenRoutes] = useState([]);
  const [drivenRoutesByDate, setDrivenRoutesByDate] = useState([]);
  const [routesAreHidden, setRoutesAreHidden] = useState(false);
  const [addressesAreHidden, setAddressesAreHidden] = useState(false);

  const loadAddressesCallback = useCallback(async () => {
    console.log('getAddresses');
    try {
      const addressesResult = await database.getAllAddresses();
      if (addressesResult.length) {
        setAddresses(addressesResult);
        let temp =
          addressesResult.filter(address => address.hide === 1).length > 0
            ? true
            : false;
        console.log('temp', temp);
        setAddressesAreHidden(temp);
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
        const temp =
          routesResult.filter(route => route.hide === 1).length > 0
            ? true
            : false;
        console.log('temp', temp);
        setRoutesAreHidden(temp);
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
    const fetch = async () => {
      await loadRoutesCallback();
    };
    fetch();
  }, [loadRoutesCallback]);

  useEffect(() => {
    const fetch = async () => {
      await loadDrivenRoutesCallback();
    };
    fetch();
  }, [loadDrivenRoutesCallback]);

  useEffect(() => {
    console.log('useEffekt, setDrivenRoutesByDate', drivenRoutes);
    let items = drivenRoutes.filter(
      route =>
        route.date ===
        `${selectedDate.getDate()}.${selectedDate.getMonth()}.${selectedDate.getFullYear()}`,
    );

    console.log('useEffekt, setDrivenRoutesByDate', items);
    setDrivenRoutesByDate(items);
  }, [drivenRoutes, getFullRouteById, selectedDate]);

  // --- address
  const saveNewAddress = address => {
    database.saveNewAddress(address);
    loadAddressesCallback();
  };

  const getFullAddressById = id => {
    return addresses.find(address => address.add_id === id);
  };

  const deleteAddress = add_id => {
    database.deleteAddress(add_id);
    loadAddressesCallback();
  };

  const setAddressHide = (id, hide) => {
    database.setAddressHide(id, hide);
    loadAddressesCallback();
  };
  // --- route
  const saveNewRoute = route => {
    database.saveNewRoute(route);
    loadRoutesCallback();
  };

  const getFullRouteById = useCallback(
    id => {
      return routes.find(route => route.route_id === id);
    },
    [routes],
  );

  const deleteRoute = route_id => {
    console.log('dbStore, deleteRoute ', route_id);
    deleteDrivenRoutesByRoutId(route_id);
    database.deleteRoute(route_id);
    loadRoutesCallback();
  };

  const setRouteHide = (id, hide) => {
    database.setRouteHide(id, hide);
    loadRoutesCallback();
  };
  // --- drivenRoute
  const saveNewDrivenRoute = drivenRoute => {
    database.saveNewDrivenRoute(drivenRoute);
    loadDrivenRoutesCallback();
  };

  const deleteDrivenRoute = dRoute_id => {
    console.log('dbStore, deleteDrivenRoute ', dRoute_id);
    database.deleteDrivenRoute(dRoute_id);
    loadDrivenRoutesCallback();
  };

  const deleteDrivenRoutesByRoutId = route_id => {
    console.log('dbStore, deleteDrivenRoutesByRoutId ', route_id);
    database.deleteDrivenRoutesByRouteId(route_id);
    loadDrivenRoutesCallback();
  };

  return {
    addresses,
    saveNewAddress,
    getFullAddressById,
    routes,
    saveNewRoute,
    getFullRouteById,
    drivenRoutesByDate,
    saveNewDrivenRoute,
    deleteAddress,
    deleteRoute,
    deleteDrivenRoute,
    setRouteHide,
    routesAreHidden,
    setAddressHide,
    addressesAreHidden,
  };
}
