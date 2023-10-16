import { Accordion, Button, Grid, Stack, Text } from "@mantine/core";
import { useBetween } from "use-between";
import useCraeteRoute from "../../hooks/createRouteHook";
import useDatabases from "../../hooks/databaseHook";
import RoutesCards from "./RoutesCards/RoutesCards";
import useAddRoute from "../../hooks/addRouteHook";
import RouteIcon from "../Icons/RouteIcon";
import classes from "./AddRoute.module.css";
function AddRoute() {
  const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  const { setShowCreateRouteView } = useSharedCreateRoute();

  const useSharedDatabases = () => useBetween(useDatabases);
  const { routesList, persistDrivenRoute } = useSharedDatabases();

  const useSharedAddRoute = () => useBetween(useAddRoute);
  const { selectedRoute } = useSharedAddRoute();


  const handelOnClickNewRouteBtn = () => {
    setShowCreateRouteView(true);
  };

  const handelOnClickAddRouteToDayBtn = () => {
    persistDrivenRoute();
  };

  return (
    <Accordion
      classNames={{
        control: classes.accordionControl,
        item: classes.accordionItem,
      }}
    >
      <Accordion.Item value="Strecken">
        <Accordion.Control icon={<RouteIcon />} algin="center">
          <Text>Strecken</Text>
        </Accordion.Control>
        <Accordion.Panel>
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
                  <Button onClick={handelOnClickAddRouteToDayBtn}>
                    Strecke zum Tag hinzufügen
                  </Button>
                </Grid.Col>
              )}
            </Grid>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
export default AddRoute;
