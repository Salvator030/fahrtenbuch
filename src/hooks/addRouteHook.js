import React, { useEffect, useState } from "react";
import { getAllRoutes } from "../Database/database";

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
