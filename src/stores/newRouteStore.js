import useMainView from './MainViewStore';
import useNewAddressModal from './newAddresModalStore';
import {useBetween} from 'use-between';
export default function useNewRoute() {
  const useShareMainView = () => useBetween(useMainView);
  const {toggleCreateNewRoute} = useShareMainView();
  const useShareNewAddressModal = () => useBetween(useNewAddressModal);
  const {toggleModalVisible} = useShareNewAddressModal();

  const handelOnClickBackBtn = () => {
    toggleCreateNewRoute();
  };

  const handelOnClickNewAddressBtn = () => {
    toggleModalVisible();
  };

  return {handelOnClickBackBtn, handelOnClickNewAddressBtn};
}
