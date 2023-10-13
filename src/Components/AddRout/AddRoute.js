import { Button, Grid, Stack } from "@mantine/core";
import { useBetween } from "use-between";
import useCraeteRoute from "../../hooks/createRouteHook";
import useDatabases from "../../hooks/databaseHook";
import RoutesCards from "./RoutesCards/RoutesCards";
import useAddRoute from "../../hooks/addRouteHook";

function AddRoute() {

    const useSharedCreateRoute = () => useBetween(useCraeteRoute);
    const { setShowCreateRouteView } = useSharedCreateRoute();

    const useSharedDatabases = () => useBetween(useDatabases);
    const { routesList, persistDrivenRoute } = useSharedDatabases();

    const useSharedAddRoute = () => useBetween(useAddRoute);
    const {selectedRoute} = useSharedAddRoute();
  
  const handelOnClickNewRouteBtn = () => {
    setShowCreateRouteView(true);
  };

  const handelOnClickAddRouteToDayBtn =() => {
    persistDrivenRoute();
  }

  return (
    <Stack>
      <RoutesCards />
      <Grid justify="flex-start">
        <Grid.Col span="content">
          <Button onClick={handelOnClickNewRouteBtn}>
            Neu Strecke erstellen
          </Button>
        </Grid.Col>
        {routesList && (
          <Grid.Col span="content">
            <Button onClick={handelOnClickAddRouteToDayBtn}> Strecke zum Tag hinzufügen</Button>
          </Grid.Col>
        )}
      </Grid>
    </Stack>
  );
}
export default AddRoute;
