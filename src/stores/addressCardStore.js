import useDatabase from './databaseStore';
import useNewRoute from './newRouteStore';
import {useBetween} from 'use-between';

export default function useAddressCard() {
  const useShareNewRoute = () => useBetween(useNewRoute);
  const {viewDescription, setStartAddressId, setDestinationAddressId} =
    useShareNewRoute();

  const useShareDatabase = () => useBetween(useDatabase);
  const {setAddressHide} = useShareDatabase();

  const handelOnPressAddressCard = address => {
    viewDescription === 'startAddress'
      ? setStartAddressId(address.add_id)
      : setDestinationAddressId(address.add_id);
  };

  const handelOnClickHideBtn = id => {
    setAddressHide(id, 0);
  };
  return {handelOnPressAddressCard, handelOnClickHideBtn};
}
