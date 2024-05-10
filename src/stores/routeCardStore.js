import {useState} from 'react';
import {useBetween} from 'use-between';
import useDatabase from './databaseStore';
import useAvailableRoutes from './availableRoutesStor';

export default function useRoutesCard() {
  const useShareDatabase = () => useBetween(useDatabase);
  const {setRouteHide} = useShareDatabase();

  const useShareAvailableRoutes = () => useBetween(useAvailableRoutes);
  const {setSelectedRoute} = useShareAvailableRoutes();

  const handelOnClickShowRouteBtn = id => {
    setRouteHide(id, 0);
  };

  const handelOnClickRouteCard = id => {
    setSelectedRoute(id);
  };

  return {handelOnClickShowRouteBtn, handelOnClickRouteCard};
}
