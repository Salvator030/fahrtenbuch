import React from 'react';
import CurrentDateView from '../DateView/DateView';
import {Button, SafeAreaView} from 'react-native';
import DateView from '../DateView/DateView';
import AvailableRoutes from '../AvailableRoutes/AvailableRoutes';
import NewRoute from '../NewRoute/NewRoute';
import WarningModal from '../WarningModal/WarningModal';
import useMainView from '../../stores/MainViewStore';
import {useBetween} from 'use-between';
import {
  deleteAddressTable,
  deleteRouteTable,
  deleteDrivenRouteTable,
} from '../../database/databaseHandler';
import useWarningModal from '../../stores/warningModalStore';
import useAvailableRoutes from '../../stores/availableRoutesStor';
export default function MainView() {
  const useShareMainView = () => useBetween(useMainView);
  const {createNewRoute, showWarningModal} = useShareMainView();

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
      {showWarningModal && <WarningModal />}
      {/* <Button onPress={deleteAddressTable} title="d. address" />
      <Button onPress={deleteRouteTable} title="d. route" />
      <Button onPress={deleteDrivenRouteTable} title="d. drivenRoute" /> */}
    </>
  );
}
