import {
  Accordion,
  Button,
  Chip,
  Grid,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { useBetween } from "use-between";
import useCraeteRoute from "../../hooks/createRouteHook";
import useDatabases from "../../hooks/databaseHook";
import RoutesCards from "./RoutesCards/RoutesCards";
import useAddRoute from "../../hooks/addRouteHook";
import useMainView from "../../hooks/mainViewHook";
import RouteIcon from "../Icons/RouteIcon";
import classes from "./AddRoute.module.css";
function AddRoute() {
  const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  const { setShowCreateRouteView } = useSharedCreateRoute();
  const useSharedAddRoute = () => useBetween(useAddRoute);
  const { selectedRoute, chipValue, setChipValue } = useSharedAddRoute();
  const useSharedDatabases = () => useBetween(useDatabases);
  const { routesList, routesByDateList, persistDrivenRoute } =
    useSharedDatabases();
  const useSharedMainView = () => useBetween(useMainView);
  const { setShowMassage, setMassageContent } = useSharedMainView();

 

  const handelOnClickNewRouteBtn = () => {
    setShowCreateRouteView(true);
  };

  const handelOnClickAddRouteToDayBtn = () => {
    console.log(
      routesByDateList.find((r) => r.route_id === selectedRoute.route_id)
    );
    if (
      routesByDateList.find((r) => r.route_id === selectedRoute.route_id) ===
      undefined
    ) {
      persistDrivenRoute();
    } else {
      setMassageContent("routeIsSetInDay");
      setShowMassage(true);
    }
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
          <Chip.Group
            multiple={false}
            value={chipValue}
            onChange={setChipValue}
          >
            <Group justify="center">
            <Chip value="startAddName">Start Name</Chip>
            <Chip value="startAddStreet">Start Straße </Chip>
            <Chip value="destinationAddName">Ziel Adresse Name</Chip>
            <Chip value="destinationAddStreet">Ziel Straße</Chip>
            </Group>
          </Chip.Group>
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
                  <Button
                    onClick={handelOnClickAddRouteToDayBtn}
                    disabled={!selectedRoute}
                  >
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
