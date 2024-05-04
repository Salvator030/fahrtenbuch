import {useState} from 'react';
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
    setNewDistance('te');
    console.log('newDistance: ' + getFullRouteById(selectedRoute).distance);
    console.log('d: ' + newDistance);
    setEdirRouteModalVisible(true);
  };
  return {
    editRouteModalVisible,
    editRouteModalDiscription,
    openEditRouteModal,
    toggleEditRouteModalVisible,
    newDistance,
    setNewDistance,
  };
}
