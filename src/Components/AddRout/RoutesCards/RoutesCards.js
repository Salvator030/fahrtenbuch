import { useBetween } from "use-between";
// import useAddRoute from "../../../hooks/addRouteHook";
import { Box, Button, Grid, ScrollArea, Table, Title } from "@mantine/core";

import useCraeteRoute from "../../../hooks/createRouteHook";
import useDatabases from "../../../hooks/databaseHook";
import { useEffect, useState } from "react";
import RouteCard from "./RouteCard/RouteCard";
function RoutesCards() {
  const useSharedDatabases = () => useBetween(useDatabases);
  const { routesList } = useSharedDatabases();

  const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  const { setShowCreateRouteView } = useSharedCreateRoute();
  const [cards, setCards] = useState();

 

  useEffect(() => {
    if (routesList) {
     
      const cardsList = routesList.map((route) => route && <RouteCard route={route} key={route.route_idd}/>);
      setCards(cardsList);
    }
  },[routesList]);

    return (
    <>
      {!routesList ? (
        <Title order={2}>Keine Strecken vorhanden</Title>
      ) : (
        <ScrollArea w={700} h={300}>
          <Box >
           {cards}
          </Box>
        </ScrollArea>
      )}
         </>
  );
}

export default RoutesCards;
