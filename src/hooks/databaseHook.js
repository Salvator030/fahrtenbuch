import { useState, useEffect } from "react";
import * as db from "../database/database";
import { useBetween } from "use-between";
import useAddRoute from "./addRouteHook";
import useCurrentDate from "./currentDateHook";
import useDayRoute from "./dayRouteHokk";
import useMainView from "./mainViewHook";

function useDatabases() {
  const [addressesList, setAddressList] = useState();
  const [isNewAddress, setIsNewAddress] = useState();
  const [routesList, setRoutesList] = useState();
  const [isNewRoute, setIsNewRoute] = useState(false);
  const [routesByDateList, setRoutesByDateList] = useState();
  const [isNewDayRoute, setIsNewDayRoute] = useState(false);
  const [routesByMonthList, setRoutesByMonthList] = useState();
  const [isChangedMonth, setIsChangedMonth] = useState(false);

  const useSharedAddRoute = () => useBetween(useAddRoute);
  const { selectedRoute, setSelectedRoute } = useSharedAddRoute();

  const useSharedDayRoute = () => useBetween(useDayRoute);
  const { selectedDayRoute, setSekectedDayRoute: setSelectedDayRoute } =
    useSharedDayRoute();

  const useSharedCurrentDate = () => useBetween(useCurrentDate);
  const { selectedDate, getCurrentDate, newMonth } = useSharedCurrentDate();

  const useSharedMainView = () => useBetween(useMainView);
  const { setSaveAfterMassage } = useSharedMainView();

  const [first, setFirst] = useState(true);

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

  // fetch all displayed routes from tbl_route
  useEffect(() => {
    async function fetchData() {
      const list = await db.getAllRoutes();
      if (list) {
        setRoutesList(list);
        setIsNewRoute(false);
      }
    }
    fetchData();
  }, [isNewRoute]);

  // ----fetch the driven routes by a month ----

  useEffect(() => {
    async function fetchData() {
      let list;
      if (isChangedMonth) {
        list = await db.getDrivenRoutesByMonth(newMonth.year, newMonth.month);
        setIsChangedMonth(false);
        setIsNewDayRoute(false);
      }
      if (first | isNewDayRoute) {
        if (selectedDate) {
          list = await db.getDrivenRoutesByMonth(
            selectedDate.getFullYear(),
            selectedDate.getMonth() + 1
          );
          setFirst(false);
        }
      }

      if (list) {
        setRoutesByMonthList(list);
      }
    }

    fetchData();
  }, [isChangedMonth, isNewDayRoute, selectedDate]);

  //---- fetch content of the Route by a day
  useEffect(() => {
    async function fetchData() {
      if (selectedDate || isNewDayRoute) {
        const date = `${selectedDate.getFullYear()}-${
          selectedDate.getMonth() + 1
        }-${selectedDate.getDate()}`;
        const list = await db.getDrivenRoutesByDate(date);
        if (await list) {
          console.log(list);
          setRoutesByDateList(list);
        }
        setIsNewDayRoute(false);
      }
    }
    fetchData();
  }, [selectedDate, isNewDayRoute]);

  const persistRoute = (route) => {
    try {
      db.insertRoute(route);
    } catch (e) {
      console.error(e);
    }
  };

  const persistDrivenRoute = () => {
    const date = getCurrentDate();
    try {
      db.insertDrivenRoute({
        date: `${date.year}-${date.month}-${date.day}`,
        route_id: selectedRoute.route_id,
      });
    } catch (e) {
      console.error(e);
    }
    setSaveAfterMassage(false);
    setIsNewDayRoute(true);
  };

  const getDistanceById = (route) => {
    console.log(route);
    console.log(route.route_id);
    console.log(routesList);
    const fullRoute = routesList.find(
      (item) => item.route_id === route.route_id
    );
    console.log(fullRoute);

    return fullRoute.distance;
  };

  const getFullAddressByID = (id) => {
    return addressesList.find((item) => item.add_id === id);
  };

  const getRouteById = (id) => {
    return routesList.find((item) => item.route_id === id);
  };

  const getRouteFullAddressesByRouteId = (id) => {
    const route = routesList.find((item) => item.route_id === id);
    if (route) {
      const startId = route.startAdd_id;
      const destId = route.destAdd_id;

      return [getFullAddressByID(startId), getFullAddressByID(destId)];
    }
  };

  const deleteSelectedRoute = () => {
    console.log(selectedRoute.route_id);
    db.deleteRouteById(selectedRoute.route_id);
    // setRoutesList(
    //   routesList.filter((route) => route.route_id !== selectedRoute.route_id)
    // );
    setIsNewRoute(true);
    setSelectedRoute();
  };

  const deleteSelectedDayRouteById = () => {
    db.deleteDrivenRouteById(selectedDayRoute.dRoute_id);
    setRoutesByDateList(
      routesByDateList.filter(
        (route) => route.dRoute_id !== selectedDayRoute.dRoute_id
      )
    );
    setSelectedDayRoute();
  };

  const deleteDrivenRouteByRoute = () => {
    db.deleteDrivenRouteByRoute(selectedRoute);
    setIsNewDayRoute(true);
  };

  const setSelectedRouteHideInRouteTbl = (hide) => {
    db.updateRouteTblHideById(selectedRoute.route_id, hide);
    setIsNewRoute(true);
    setSelectedRoute();
    setSelectedDayRoute();
  };

  const setRouteHide = (route_id, hide) => {
    db.updateRouteTblHideById(route_id, hide);
    setIsNewRoute(true);
    setSelectedRoute();
  }

  const setAddressHideById = (id, hide) => {
    db.updateAddressTblHideById(id, hide);
    setIsNewAddress(true);
  };

  const deleteAddressByIdAndHandelDbConsistent = (id) => {
    const routes = routesList.filter(
      (r) => (r.startAdd_id === id) || (r.destAdd_id === id)
    );
    console.log(routes);
    if (routes) {
      routes.map((r) => {
        console.log(r)
        db.deleteDrivenRouteByRoute(r);
        return null;
      });
    }
    db.deleteRouteByAddressId(id);
    db.deleteAddressById(id);
     setIsNewDayRoute(true);
 
    setIsNewRoute(true);
   setIsNewAddress(true);
   
  };

  return {
    addressesList,
    setIsNewAddress,
    routesList,
    routesByDateList,
    setRoutesList,
    setIsNewRoute,
    setIsChangedMonth,
    routesByMonthList,
    persistRoute,
    persistDrivenRoute,
    getDistanceById,
    getFullAddressByID,
    getRouteById,
    getRouteFullAddressesByRouteId,
    deleteSelectedRoute,
    deleteSelectedDayRouteById,
    deleteDrivenRouteByRoute,
    setSelectedRouteHideInRouteTblTrue: setSelectedRouteHideInRouteTbl,
    setAddressHideById,
    setRouteHide,
    deleteAddressByIdAndHandelDbConsistent,
  };
}

export default useDatabases;
