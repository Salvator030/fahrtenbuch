// The logic to make the days on which routes are available is very complicated

import { useBetween } from "use-between";
// import useAddRoute from "../../../hooks/addRouteHook";
import { Box, Button, Grid, ScrollArea, Table, Title } from "@mantine/core";

import useCraeteRoute from "../../../hooks/createRouteHook";
import useDatabases from "../../../hooks/databaseHook";
import { useEffect, useState } from "react";
import RouteCard from "./RouteCard/RouteCard";
import useAddRoute from "../../../hooks/addRouteHook";
import { sortByAddress } from "../../../asserts/helper";
function RoutesCards() {
  const useSharedDatabases = () => useBetween(useDatabases);
  const { routesList, getRouteFullAddressesByRouteId, selectedRo } = useSharedDatabases();

  const useSharedAddRoute = () => useBetween(useAddRoute);
  const { chipValue } = useSharedAddRoute();

  const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  const { setShowCreateRouteView } = useSharedCreateRoute();
  const [cards, setCards] = useState();

  useEffect(() => {
    if (routesList) {

      let list = routesList.filter((route => route.hide === 0))
      console.log(list)
      if(list){
      switch (chipValue) {

        case "startAddName": {
          list.sort((a, b) =>
            sortByAddress(
              getRouteFullAddressesByRouteId(a.route_id)[0].name,
              getRouteFullAddressesByRouteId(b.route_id)[0].name
            )
          );
          break;
        }
        case "destinationAddName": {
          list.sort((a, b) =>
            sortByAddress(
              getRouteFullAddressesByRouteId(a.route_id)[1].name,
              getRouteFullAddressesByRouteId(b.route_id)[1].name
            )
          );
          break;
        }
        case "startAddStreet": {
          list.sort((a, b) =>
            sortByAddress(
              getRouteFullAddressesByRouteId(a.route_id)[0].street,
              getRouteFullAddressesByRouteId(b.route_id)[0].street
            )
          );
          break;
        }
        case "destinationAddStreet": {
          list.sort((a, b) =>
            sortByAddress(
              getRouteFullAddressesByRouteId(a.route_id)[1].street,
              getRouteFullAddressesByRouteId(b.route_id)[1].street
            )
          );
          break;
        }
        default: {
        }
      }


      const cardsList = list.map(
        (route) => route && <RouteCard route={route} key={route.route_id} />

      );
      setCards(cardsList);}
    }
  }, [routesList, chipValue]);

  return (
    <>
      {!routesList ? (
        <Title order={2}>Keine Strecken vorhanden</Title>
      ) : (
        <ScrollArea w={700} h={300}>
          <Box>{cards}</Box>
        </ScrollArea>
      )}
    </>
  );
}

export default RoutesCards;
