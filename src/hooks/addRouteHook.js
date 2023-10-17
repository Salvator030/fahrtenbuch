import { useState } from "react";

function useAddRoute() {
  
  const [selectedRoute, setSelectedRoute] = useState();
  const [selectedCard, setSelectedCard] = useState();

  return {
    selectedRoute,
    setSelectedRoute,
    selectedCard,
    setSelectedCard,

  };
}

export default useAddRoute;
