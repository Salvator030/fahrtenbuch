import React, { useEffect, useState } from "react";
import { useBetween } from "use-between";
import { getAllRoutes } from "../database/database";
import useDatabases from "./databaseHook";

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
