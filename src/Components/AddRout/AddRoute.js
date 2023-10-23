import {
  Accordion,
  ActionIcon,
  Button,
  Chip,
  Group,
  Grid,
  TextInput,
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
import TrashIcon from "../Icons/TrashIcon";
import EyeOpenIcon from "../Icons/EyeOpenIcon";
import EyeCloseIcon from "../Icons/EyeCloseIcon";

function AddRoute() {
  const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  const { setShowCreateRouteView } = useSharedCreateRoute();

  const useSharedAddRoute = () => useBetween(useAddRoute);
  const {
    selectedRoute,
    chipValue,
    setChipValue,
    sohwHideRoutes,
    setSohwHideRoutes,
    searchValue,
    setSearchValue,
  } = useSharedAddRoute();

  const useSharedDatabases = () => useBetween(useDatabases);
  const { routesList, routesByDateList, persistDrivenRoute } =
    useSharedDatabases();

  const useSharedMainView = () => useBetween(useMainView);
  const { setShowMassage, setMassageContent } = useSharedMainView();

  const handelOnClickNewRouteBtn = () => {
    setShowCreateRouteView(true);
  };

  const handelOnClickAddRouteToDayBtn = () => {
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

  const handelOnClickTrashIcon = () => {
    setMassageContent("deleteRouteWarning");
    setShowMassage(true);
  };

  const handelOnClickEyeIcon = () => {
    setSohwHideRoutes(!sohwHideRoutes);
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
            <Chip.Group
              multiple={false}
              value={chipValue}
              onChange={setChipValue}
            >
              <Group justify="center">
                <Chip value="startAddName">Startadresse Name</Chip>
                <Chip value="startAddStreet">Startadresse Straße</Chip>
                <Chip value="destinationAddName">Zieladresse Name</Chip>
                <Chip value="destinationAddStreet">Zieladresse Starße</Chip>
              </Group>
            </Chip.Group>
            <TextInput
              label="Suche"
              value={searchValue}
              onChange={setSearchValue}
            />
            <RoutesCards />
            <Grid justify="flex-start">
              <Grid.Col span={3}>
                <Button onClick={handelOnClickNewRouteBtn}>
                  Neu Strecke erstellen
                </Button>
              </Grid.Col>
              {routesList && (
                <>
                  <Grid.Col span={4}>
                    <Button
                      onClick={handelOnClickAddRouteToDayBtn}
                      disabled={!selectedRoute}
                    >
                      Strecke zum Tag hinzufügen
                    </Button>
                  </Grid.Col>
                  <Grid.Col span={1} offset={3}>
                    <ActionIcon
                      onClick={handelOnClickTrashIcon}
                      disabled={!selectedRoute}
                      size={"lg"}
                    >
                      <TrashIcon />
                    </ActionIcon>
                  </Grid.Col>
                  <Grid.Col span={1}>
                    <ActionIcon onClick={handelOnClickEyeIcon}>
                      {!sohwHideRoutes ? <EyeOpenIcon /> : <EyeCloseIcon />}
                    </ActionIcon>
                  </Grid.Col>
                </>
              )}
            </Grid>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
export default AddRoute;
