import React from 'react';
import CurrentDateView from '../DateView/DateView';
import {Button, SafeAreaView} from 'react-native';
import DateView from '../DateView/DateView';
import AvailableRoutes from '../AvailableRoutes/AvailableRoutes';
import NewRoute from '../NewRoute/NewRoute';
import useMainView from '../../stores/MainViewStore';
import {useBetween} from 'use-between';
import {
  deleteAddressTable,
  deleteRouteTable,
} from '../../database/databaseHandler';
export default function MainView() {
  const useShareMainView = () => useBetween(useMainView);
  const {createNewRoute} = useShareMainView();
  return (
    <>
      {!createNewRoute ? (
        <>
          <DateView />
          <AvailableRoutes />
        </>
      ) : (
        <NewRoute />
      )}
      <Button onPress={deleteAddressTable} title="d. address" />
      <Button onPress={deleteRouteTable} title="d. route" />
    </>
  );
}
