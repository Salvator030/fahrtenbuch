import React, {useEffect, useState} from 'react';
import useMainView from './MainViewStore';
import {useBetween} from 'use-between';
import useDatabase from './databaseStore';
import RouteCard from '../Components/AvailableRoutes/RouteCard/RouteCard';

export default function useAvailableRoutes() {
  const useShareMainView = () => useBetween(useMainView);
  const {toggleCreateNewRoute} = useShareMainView();

  const useShareDatabase = () => useBetween(useDatabase);
  const {routes, getFullAddressById} = useShareDatabase();

  const [routesCards, setRoutesCards] = useState([]);

  useEffect(() => {
    const cards = routes.map(route => {
      console.log('route');
      console.log(route);
      return (
        <RouteCard
          key={route.route_id}
          startAdd={getFullAddressById(route.startAdd_id)}
          destAdd={getFullAddressById(route.destAdd_id)}
          distance={route.distance}
        />
      );
    });
    setRoutesCards(cards);
  }, [routes, getFullAddressById]);

  const handelOnClickNewRouteBtn = () => toggleCreateNewRoute();

  return {routesCards, handelOnClickNewRouteBtn};
}
