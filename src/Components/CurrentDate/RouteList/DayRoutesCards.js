import { Accordion, ActionIcon, Box, Button, ScrollArea } from "@mantine/core";
import { useBetween } from "use-between";
import useDatabases from "../../../hooks/databaseHook";
import { useEffect, useState } from "react";
import DayRouteCard from "./DayRouteCard/DayRouteCard";
import classes from "./DayRoutesCards.module.css";
import TrashIcon from "../../Icons/TrashIcon";
import useDayRoute from "../../../hooks/dayRouteHokk";
import { sortDrivenRouteByLogicalOrder } from "../../../asserts/helper";


function DayRoutesCards() {
  const useSharedDatabases = () => useBetween(useDatabases);
  const { routesByDateList, deleteSelectedDayRoute, getRouteFullAddressesByRouteId } = useSharedDatabases();
  const [cards, setCards] = useState();

  const useSharedDayRoute = () => useBetween(useDayRoute);
  const { selectedDayRoute } = useSharedDayRoute();

  useEffect(() => {
    if (routesByDateList) {
      console.log(routesByDateList)
 const l = routesByDateList.sort((a,b)=> sortDrivenRouteByLogicalOrder( getRouteFullAddressesByRouteId(a.route_id), getRouteFullAddressesByRouteId(b.route_id)))
    console.log(routesByDateList)
    const items = routesByDateList.map(
        (route) =>
          route && <DayRouteCard drivenRoute={route} key={route.dRoute_id} />
      );
      setCards(items);
    }
  }, [routesByDateList]);

  const handelOnClick = () => {
    deleteSelectedDayRoute();
  };

  return (
    <>
      <ScrollArea w={300} h={360} classNames={{ root: classes.scrollAreaRoot }}>
        <Box>{cards}</Box>
      </ScrollArea>
      <ActionIcon onClick={handelOnClick} disabled={!selectedDayRoute}>
        <TrashIcon />
      </ActionIcon>
    </>
  );
}

export default DayRoutesCards;
