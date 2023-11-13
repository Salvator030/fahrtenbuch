import React from 'react';
import CurrentDateView from '../DateView/DateView';
import {SafeAreaView} from 'react-native';
import DateView from '../DateView/DateView';
import AvailableRoutes from '../AvailableRoutes/AvailableRoutes';
export default function MainView() {
  return (
    <>
      <DateView />
      <AvailableRoutes />
    </>
  );
}
