import {useEffect, useState} from 'react';
import {useBetween} from 'use-between';
import useAvailableRoutes from './availableRoutesStor';
import useDatabase from './databaseStore';

export default function useEditRouteModal() {
  const [editRouteModalVisible, setEdirRouteModalVisible] = useState(false);
  const [editRouteModalDiscription, setRouteModalDiscription] = useState('');

  const useShareDatabase = () => useBetween(useDatabase);
  const {getFullRouteById} = useShareDatabase();

  const useShareAvaibleRoutes = () => useBetween(useAvailableRoutes);
  const {selectedRoute} = useShareAvaibleRoutes();
  const [fullRoute] = useState(selectedRoute);
  const [newDistance, setNewDistance] = useState('');

  function toggleEditRouteModalVisible() {
    setEdirRouteModalVisible(!editRouteModalVisible);
  }
  const openEditRouteModal = () => {
    setRouteModalDiscription('editRoute');
    t;
    //setNewDistance(getFullRouteById(seedRlectoute).distance);
    console.log('newDistance: ' + newDistance);
    setEdirRouteModalVisible(true);
  };

  const t = useEffect(() => {
    if (selectedRoute != 0) {
      console.log(getFullRouteById(selectedRoute).distance);
      setNewDistance(getFullRouteById(selectedRoute).distance);
    }
  }, [getFullRouteById, selectedRoute]);

  return {
    editRouteModalVisible,
    editRouteModalDiscription,
    openEditRouteModal,
    toggleEditRouteModalVisible,
    newDistance,
    setNewDistance,
  };
}
