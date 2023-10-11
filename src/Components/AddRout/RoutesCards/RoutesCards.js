import { useBetween } from "use-between";
import useAddRoute from "../../../hooks/addRouteHook";
import { Box, Button, Grid, ScrollArea, Table, Title } from "@mantine/core";

import useCraeteRoute from "../../../hooks/createRouteHook";
import { useEffect, useState } from "react";
import RouteCard from "./RouteCard/RouteCard";
function RoutesCards() {
  const useSharedAddRoute = () => useBetween(useAddRoute);
  const { routesList } = useSharedAddRoute();

  const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  const { setShowCreateRouteView } = useSharedCreateRoute();
  const [cards, setCards] = useState();

  const handelOnClickNewRouteBtn = () => {
    setShowCreateRouteView(true);
  };

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
        <ScrollArea w={900} h={300}>
          <Box >
           {cards}
          </Box>
        </ScrollArea>
      )}
      <Grid justify="flex-start">
        <Grid.Col span="content">
          <Button onClick={handelOnClickNewRouteBtn}>
            Neu Strecke erstellen
          </Button>
        </Grid.Col>
        {routesList && (
          <Grid.Col span="content">
            <Button> Strecke zum Tag hinzufügen</Button>
          </Grid.Col>
        )}
      </Grid>
    </>
  );
}

export default RoutesCards;
