import React from 'react';
import CurrentDateView from '../DateView/DateView';
import {View, ScrollView, StyleSheet} from 'react-native';
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

const styles = StyleSheet.create({
  gridStyle: {
    flex: 12,
    width: 800,
    alignSelf: 'center',
  
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
  },
  col2: {flex: 1, marginHorizontal: 'auto'},
});

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
          <View style={styles.gridStyle}>
            <View style={styles.row}>
              <View style={styles.col2}>
                <ButtonIcon
                  Icon={PrintIcon}
                  iconName="printer"
                  onClick={togglePrintView}
                />
              </View>
            </View>
          </View>
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
