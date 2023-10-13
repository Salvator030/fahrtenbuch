//----NOT INUSE

import { useState, useEffect } from "react";
import * as db from "../database/database";
import { useBetween } from "use-between";
import useAddRoute from "./addRouteHook";
import useCurrentDate from "./currentDateHook";
import useDayRoute from "./dayRouteHokk";

function useDatabases() {
  const [addressesList, setAddressList] = useState();
  const [isNewAddress, setIsNewAddress] = useState();
  const [routesList, setRoutesList] = useState();
  const [isNewRoute, setIsNewRoute] = useState();
  const [routesByDate, setRoutesByDate] = useState();
  const [isNewDayRoute, setIsNewDayRoute] = useState(false);

  const useSharedAddRoute = () => useBetween(useAddRoute);
  const { selectedRoute } = useSharedAddRoute();

  const useSharedDayRoute = () => useBetween(useDayRoute);
  const {selectedDayRoute, setSekectedDayRoute } = useSharedDayRoute();
  

  const useSharedCurrentDate = () => useBetween(useCurrentDate);
  const { selectedDate, getCurrentDate } = useSharedCurrentDate();

  // fetch the content of tbl_address
  useEffect(() => {
    async function fetchData() {
      const list = await db.getAllAddress();
      if (list) {
        setAddressList(await list);
        setIsNewAddress(false);
      }
    }
    fetchData();
  }, [isNewAddress]);

  // fetch the content of tbl_route
  useEffect(() => {
    async function fetchData() {
      const list = await db.getAllRoutes();
      if (list) {
        setRoutesList( list);
        setIsNewRoute(false);
      }
    }
    fetchData();
  }, [isNewRoute]);

  useEffect(() => {
    async function fetchData() {
      if (selectedDate || isNewDayRoute) { 
        const date = `${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDate()}`
        const list = await db.getDrivenRoutesByDate(date);
        if (await list) {
          setRoutesByDate(list);
        }
      }
      
      setIsNewDayRoute(false)
    }
    fetchData();
  }, [selectedDate, isNewDayRoute]);

  const persistDrivenRoute = () => {
    if (selectedRoute) {
      console.log(selectedRoute);
      const date = getCurrentDate();
      try {
        db.insertDrivenRoute({
          date: `${date.year}-${date.month}-${date.day}`,
          route_id: selectedRoute.route_id,
        });
      } catch (e) {
        console.error(e);
      }
      setIsNewDayRoute(true)
    }
  };
  
  const getDistanceById = (route) => {
    console.log(route);
    const fullRoute = routesList.find(item => item.route_id === route.route_id);
    console.log(fullRoute.distance);
    return fullRoute.distance
  }

  const getFullAddressByID = (id) => {
    return addressesList.find(item => item.add_id === id);
  }

  const getRouteById = (id) => {
    return routesList.find(item => item.route_id === id);
  }

  const getRouteFullAddressesByRouteId = (id) => {
    console.log(id)
    const route = routesList.find(item => item.route_id === id);
    console.log(route)
    const startId = route.startAdd_id;
    const destId = route.destAdd_id;

    console.log(startId)
    console.log(destId)

    return [getFullAddressByID(startId), getFullAddressByID(destId)]

  }

  const deleteSelectedDayRoute = () => {
    db.deleteDrivenRouteById(selectedDayRoute.dRoute_id);
    setRoutesByDate(routesByDate.filter((route) => route.dRoute_id !== selectedDayRoute.dRoute_id));
    setSekectedDayRoute();
  }

  return {
    addressesList,
    setIsNewAddress,
    routesList,
    routesByDate, 
    setRoutesList,
    setIsNewRoute,
    persistDrivenRoute,
    getDistanceById,
    getFullAddressByID,
    getRouteById,
    getRouteFullAddressesByRouteId,
    deleteSelectedDayRoute
  };
}

export default useDatabases;
