import React, {useEffect, useState} from 'react';
import {useBetween} from 'use-between';
import useAvailableRoutes from './availableRoutesStor';
import useDatabase from './databaseStore';
import {Text} from 'react-native';

export default function useEditRouteModal() {
  const [editRouteModalVisible, setEdirRouteModalVisible] = useState(false);
  const [editRouteModalDiscription, setRouteModalDiscription] = useState('');

  const useShareDatabase = () => useBetween(useDatabase);
  const {getFullRouteById, changeRouteDistance, changeRouteDistanceAtDate} =
    useShareDatabase();

  const useShareAvaibleRoutes = () => useBetween(useAvailableRoutes);
  const {selectedRoute} = useShareAvaibleRoutes();
  const [newDistance, setNewDistance] = useState('0');
  const [changeDistanceCheckBoxValue, setChangeDistanceCheckBoxValue] =
    useState(false);

  const [date, setDate] = useState(new Date());

  function toggleEditRouteModalVisible() {
    setEdirRouteModalVisible(!editRouteModalVisible);
  }
  const openEditRouteModal = () => {
    setRouteModalDiscription('editRoute');
    setEdirRouteModalVisible(true);
  };
  const onClickOkBtn = () => {
    if (!changeDistanceCheckBoxValue) {
      changeRouteDistance(selectedRoute, newDistance);
      toggleEditRouteModalVisible();
    } else {
      changeRouteDistanceAtDate(selectedRoute, newDistance, date);
    }
    toggleEditRouteModalVisible();
  };

  useEffect(() => {
    if (selectedRoute) {
      setNewDistance(`${getFullRouteById(selectedRoute).distance}`);
    }
  }, [selectedRoute]);

  return {
    editRouteModalVisible,
    editRouteModalDiscription,
    openEditRouteModal,
    toggleEditRouteModalVisible,
    newDistance,
    setNewDistance,
    changeDistanceCheckBoxValue,
    setChangeDistanceCheckBoxValue,
    date,
    setDate,
    onClickOkBtn,
  };
}
