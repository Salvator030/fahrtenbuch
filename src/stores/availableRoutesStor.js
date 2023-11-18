import useMainView from './MainViewStore';
import {useBetween} from 'use-between';

export default function useAvailableRoutes() {
  const useShareMainView = () => useBetween(useMainView);
  const {toggleCreateNewRoute} = useShareMainView();

  const handelOnClickNewRouteBtn = () => toggleCreateNewRoute();

  return {handelOnClickNewRouteBtn};
}
