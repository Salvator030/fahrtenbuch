import useNewRoute from './newRouteStore';
import {useBetween} from 'use-between';

export default function useAddressCard() {
  const useShareNewRoute = () => useBetween(useNewRoute);
  const {viewDescription, setStartAddressId, setDestinationAddressId} =
    useShareNewRoute();

  const handelOnPressAddressCard = address => {
    viewDescription === 'startAddress'
      ? setStartAddressId(address.add_id)
      : setDestinationAddressId(address.add_id);
  };

  return {handelOnPressAddressCard};
}
