import {useBetween} from 'use-between';
import useNewRoute from './newRouteStore';
import useDatabase from './databaseStore';
import useWarningModal from './warningModalStore';
import {useState} from 'react';

export default function useSave() {
  const useShareNewRoute = () => useBetween(useNewRoute);
  const {setViewDescription, createNewRoutes, closeNewRoute} =
    useShareNewRoute();

  const useShareDatabase = () => useBetween(useDatabase);
  const {saveNewRoute} = useShareDatabase();

  const useShareWarningModal = () => useBetween(useWarningModal);
  const {openWarning} = useShareWarningModal();

  const [isBackRoute, setIsBackRoute] = useState(true);

  const handelOnClickBackBtn = () => {
    setViewDescription('distance');
  };

  const handelOnClickSaveBtn = async () => {
    let routes = createNewRoutes();
    let result = await saveNewRoute(routes[0]);
    if (typeof result === 'string') {
      openWarning(result);
    }
    if (isBackRoute) {
      await saveNewRoute(routes[1]);
    }
    closeNewRoute();
  };

  return {
    handelOnClickBackBtn,
    handelOnClickSaveBtn,
    isBackRoute,
    setIsBackRoute,
  };
}
