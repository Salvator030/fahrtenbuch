import useNewRoute from './newRouteStore';
import {useBetween} from 'use-between';

export default function useAddressCard() {
  const useShareNewRoute = () => useBetween(useNewRoute);
  const {viewDescription, setStartAddress, setDestinationAddress} =
    useShareNewRoute();

  const handelOnPressAddressCard = address => {
    console.log(address.add_id);
    console.log(viewDescription);
    viewDescription === 'startAddress'
      ? setStartAddress(address.add_id)
      : setDestinationAddress(address.add_id);
    //     console.log(selectedCardID);'
  };

  return {handelOnPressAddressCard};
}
