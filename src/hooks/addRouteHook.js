import { useState } from "react";
import { useBetween } from "use-between";
import useDatabases from "./databaseHook";

function useAddRoute() {
  const [selectedRoute, setSelectedRoute] = useState();
  const [selectedCard, setSelectedCard] = useState();
  const [chipValue, setChipValue] = useState("startAddName");
  const [showHideRoutes, setShowHideRoutes] = useState(false);


  return {
    selectedRoute,
    setSelectedRoute,
    selectedCard,
    setSelectedCard,
    chipValue,
    setChipValue,
    sohwHideRoutes: showHideRoutes,
    setSohwHideRoutes: setShowHideRoutes,
  };
}

export default useAddRoute;
