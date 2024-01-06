import React from 'react';
import CurrentDateView from '../DateView/DateView';
import {Button, ScrollView} from 'react-native';
import DateView from '../DateView/DateView';
import AvailableRoutes from '../AvailableRoutes/AvailableRoutes';
import NewRoute from '../NewRoute/NewRoute';
import WarningModal from '../WarningModal/WarningModal';
import ScrollArea from '../CustomComponents/ScrollArea/ScrollArea';
import useMainView from '../../stores/MainViewStore';
import PrintView from '../PrintView/PrintView';
import {useBetween} from 'use-between';
import {
  deleteAddressTable,
  deleteRouteTable,
  deleteDrivenRouteTable,
} from '../../database/databaseHandler';
import useWarningModal from '../../stores/warningModalStore';
import useAvailableRoutes from '../../stores/availableRoutesStor';
import ButtonIcon from '../CustomComponents/ButtonSvgIcon/ButtonIcon';
import PrintIcon from 'react-native-vector-icons/AntDesign';
export default function MainView() {
  const useShareMainView = () => useBetween(useMainView);
  const {createNewRoute, showWarningModal, printView, togglePrintView} =
    useShareMainView();

  return (
    <ScrollView>
      {createNewRoute ? (
        <NewRoute />
      ) : printView ? (
        <PrintView />
      ) : (
        <>
          <DateView />
          <AvailableRoutes />
          <ButtonIcon
            Icon={PrintIcon}
            iconName="printer"
            onClick={togglePrintView}
          />
        </>
      )}
      {showWarningModal && <WarningModal />}
      {/* <Button onPress={deleteAddressTable} title="d. address" />
      <Button onPress={deleteRouteTable} title="d. route" />
      <Button onPress={deleteDrivenRouteTable} title="d. drivenRoute" />  
      */}
    </ScrollView>
  );
}
