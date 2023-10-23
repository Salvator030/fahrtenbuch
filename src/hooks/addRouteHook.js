import { useState } from "react";
import { useInputState } from "@mantine/hooks";
import { useBetween } from "use-between";
import useDatabases from "./databaseHook";

function useAddRoute() {
  const [selectedRoute, setSelectedRoute] = useState();
  const [selectedCard, setSelectedCard] = useState();
  const [chipValue, setChipValue] = useState("startAddName");
  const [showHideRoutes, setShowHideRoutes] = useState(false);
  const [searchValue, setSearchValue] = useInputState("");


  return {
    selectedRoute,
    setSelectedRoute,
    selectedCard,
    setSelectedCard,
    chipValue,
    setChipValue,
    sohwHideRoutes: showHideRoutes,
    setSohwHideRoutes: setShowHideRoutes,
    searchValue, setSearchValue
  };
}

export default useAddRoute;
