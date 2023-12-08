import {useState} from 'react';
import {useBetween} from 'use-between';
import useDatabase from './databaseStore';

export default function useRoutesCard() {
  const useShareDatabase = () => useBetween(useDatabase);
  const {setRouteHide} = useShareDatabase();

  const handelOnClickShowRouteBtn = id => {
    setRouteHide(id, 0);
  };
  return {handelOnClickShowRouteBtn};
}
