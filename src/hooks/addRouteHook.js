import { useState } from "react";

function useAddRoute() {
  
  const [selectedRoute, setSelectedRoute] = useState();
  const [selectedCard, setSelectedCard] = useState();
  const [chipValue, setChipValue] = useState("startAddName");

  return {
    selectedRoute,
    setSelectedRoute,
    selectedCard,
    setSelectedCard,
    chipValue, setChipValue
  };
}

export default useAddRoute;
