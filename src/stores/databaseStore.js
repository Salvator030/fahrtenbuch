import {useState, useCallback, useEffect} from 'react';
import * as database from '../database/databaseHandler';
import {useBetween} from 'use-between';
import useCalender from './calenderStore';
import useNewRoute from './newRouteStore';
import {deleteDrivenRouteByRouteId} from '../database/database';
import {parseDateAndTime} from '../asserts/dateHelper';

export default function useDatabase() {
  // const useShareCalender = () => useBetween(useCalender);
  // const {selectedDate} = useShareCalender();

  const useShareNewRoute = () => useBetween(useNewRoute);
  const {changeAddressId} = useShareNewRoute();

  const [addresses, setAddresses] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [drivenRoutes, setDrivenRoutes] = useState([]);
  // const [drivenRoutesByDate, setDrivenRoutesByDate] = useState([]);
  // const [drivenRoutesByMonth, setDrivenRoutesByMonth] = useState([]);
  const [routesAreHidden, setRoutesAreHidden] = useState(false);
  const [addressesAreHidden, setAddressesAreHidden] = useState(false);

  const loadAddressesCallback = useCallback(async () => {
    try {
      const addressesResult = await database.getAllAddresses();
      if (addressesResult.length) {
        setAddresses(addressesResult);
        console.log('äddResult: ', addressesResult);
        let temp =
          addressesResult.filter(address => address.hide === 1).length > 0
            ? true
            : false;
        setAddressesAreHidden(temp);
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
        const temp =
          routesResult.filter(route => route.hide === 1).length > 0
            ? true
            : false;
        setRoutesAreHidden(temp);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const loadDrivenRoutesCallback = useCallback(async () => {
    try {
      const drivenRoutesResult = await database.getAllDrivenRoutes();
      if (drivenRoutesResult.length) {
        console.log('drivenRoutesResult ', drivenRoutesResult);
        setDrivenRoutes(drivenRoutesResult);
      }
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

  // useEffect(() => {
  //   let items = drivenRoutes.filter(
  //     route => route.date === Date.parse(selectedDate),
  //   );
  //   setDrivenRoutesByDate(items);
  // }, [drivenRoutes, getFullRouteById, selectedDate]);

  // --- address
  const saveNewAddress = async address => {
    const result = await database.saveNewAddress(address);
    console.log('res: ', result[0].insertId);
    if (typeof result === 'string') {
      return result;
    } else {
      loadAddressesCallback();
      return result;
    }
  };

  const getFullAddressById = id => {
    return addresses.find(address => address.add_id === id);
  };

  const deleteAddress = add_id => {
    if (routes.length > 0) {
      let deleteRouteList = routes.filter(
        route => route.startAdd_id === add_id || route.destAdd_id === add_id,
      );
      deleteRouteList.forEach(route =>
        deleteDrivenRouteByRouteId(route.route_id),
      );
      deleteRouteList.forEach(route => deleteRoute(route.route_id));
      database.deleteAddress(add_id);
    }
    loadAddressesCallback();
  };

  const changeAddressNAmeOrPostal = async (address, info, id, oldName) => {
    const name = `${oldName.concat(' obsolet')}-${parseDateAndTime(
      new Date(),
    )}`;
    console.log(name);
    await database.updateAddressName(name, id);
    let result = await saveNewAddress(address);
    console.log('result: ', result);
    if (typeof result === 'string') {
      await database.updateAddressName(oldName, id);
      return result;
    } else {
      setAddressHide(id, 1);
      console.log('info ', info);
      await database.updateAddressInfo(info, id);
      if (typeof result === 'string') {
        return result;
      } else {
        database.updtaeRoute(result[0].insertId, id);
        changeAddressId(result[0].insertId);
        loadAddressesCallback();
      }
    }
    loadAddressesCallback();
    loadDrivenRoutesCallback();
    loadRoutesCallback();
  };

  const setAddressHide = (id, hide) => {
    database.setAddressHide(id, hide);
    loadAddressesCallback();
  };
  // --- route
  const saveNewRoute = async route => {
    const result = await database.saveNewRoute(route);
    if (typeof result === 'string') {
      return result;
    } else {
      loadRoutesCallback();
    }
  };

  const getFullRouteById = useCallback(
    id => {
      return routes.find(route => route.route_id === id);
    },
    [routes],
  );

  const deleteRoute = route_id => {
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

  const getDrivenRoutesBetweenDates = async (startDate, endDate) => {
    let res = await database.getDrivenRoutesBetweenDates(startDate, endDate);
    let fullDrivenRoutes = [];
    if (res.length > 0) {
      res.map(r => {
        const route = getFullRouteById(r.route_id);
        fullDrivenRoutes.push({
          date: r.date,
          start: getFullAddressById(route.startAdd_id),
          dest: getFullAddressById(route.destAdd_id),
          dist: route.distance,
        });
      });
    }
    return fullDrivenRoutes;
  };

  const deleteDrivenRoute = dRoute_id => {
    database.deleteDrivenRoute(dRoute_id);
    loadDrivenRoutesCallback();
  };

  const deleteDrivenRoutesByRoutId = route_id => {
    database.deleteDrivenRoutesByRouteId(route_id);
    loadDrivenRoutesCallback();
  };

  return {
    addresses,
    saveNewAddress,
    getFullAddressById,
    changeAddressNAmeOrPostal,
    routes,
    saveNewRoute,
    getFullRouteById,
    drivenRoutes,
    getDrivenRoutesBetweenDates,
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
