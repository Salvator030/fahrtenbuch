import {useBetween} from 'use-between';
import useNewRoute from './newRouteStore';
import useDatabase from './databaseStore';

export default function useSave() {
  const useShareNewRoute = () => useBetween(useNewRoute);
  const {setViewDescription, createNewRoute, closeNewRoute} =
    useShareNewRoute();

  const useShareDatabase = () => useBetween(useDatabase);
  const {saveNewRoute} = useShareDatabase();

  const handelOnClickBackBtn = () => {
    setViewDescription('distance');
  };

  const handelOnClickSaveBtn = () => {
    saveNewRoute(createNewRoute());
    closeNewRoute();
  };

  return {handelOnClickBackBtn, handelOnClickSaveBtn};
}
