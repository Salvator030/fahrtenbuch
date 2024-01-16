import {useBetween} from 'use-between';
import useNewRoute from './newRouteStore';
import useDatabase from './databaseStore';
import useWarningModal from './warningModalStore';

export default function useSave() {
  const useShareNewRoute = () => useBetween(useNewRoute);
  const {setViewDescription, createNewRoute, closeNewRoute} =
    useShareNewRoute();

  const useShareDatabase = () => useBetween(useDatabase);
  const {saveNewRoute} = useShareDatabase();

  const useShareWarningModal = () => useBetween(useWarningModal);
  const {openWarning} = useShareWarningModal();

  const handelOnClickBackBtn = () => {
    setViewDescription('distance');
  };

  const handelOnClickSaveBtn = async () => {
    let result = await saveNewRoute(createNewRoute());
    if (typeof result === 'string') {
      openWarning(result);
    } else {
      closeNewRoute();
    }
  };

  return {handelOnClickBackBtn, handelOnClickSaveBtn};
}
