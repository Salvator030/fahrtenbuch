import useMainView from './MainViewStore';
import {useBetween} from 'use-between';
export default function useNewRoute() {
  const useShareMainView = () => useBetween(useMainView);
  const {toggleCreateNewRoute} = useShareMainView();
  const handelOnClickBackBtn = () => {
    toggleCreateNewRoute();
  };

  return {handelOnClickBackBtn};
}
