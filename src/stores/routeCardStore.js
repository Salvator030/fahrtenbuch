import {useState} from 'react';

export default function useDrivenRoutesCard() {
  const [selectedRoute, setSelectedRoute] = useState(0);
  const handelOnClickRouteCard = id => {
    setSelectedRoute(id);

    return {selectedRoute, handelOnClickRouteCard};
  };
}
