import { useBetween } from "use-between";
import useAddRoute from "../../../hooks/addRouteHook";
import { Box, Button, Grid, ScrollArea, Title } from "@mantine/core";

import useCraeteRoute from "../../../hooks/createRouteHook";
function RoutesCards() {
  const useSharedAddRoute = () => useBetween(useAddRoute);
  const { routesList } = useSharedAddRoute;

  const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  const {setShowCreateRouteView} = useSharedCreateRoute();

  const handelOnClickNewRouteBtn = () => {
setShowCreateRouteView(true)
  }
  return (
    <>
      {routesList === undefined ? (
        <Title order={2}>Keine Strecken vorhanden</Title>
      ) : (
        <ScrollArea>
          <Box></Box>
        </ScrollArea>
      )}
      <Grid justify="flex-start">
        <Grid.Col span="content">
          <Button onClick={handelOnClickNewRouteBtn}>Neu Strecke erstellen</Button>
        </Grid.Col>
        {routesList && <Grid.Col span="content">
          <Button> Strecke zum Tag hinzufügen</Button>
        </Grid.Col>}
        
      </Grid>
    </>
  );
}

export default RoutesCards;
