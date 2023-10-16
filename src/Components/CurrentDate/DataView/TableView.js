import React, { useEffect, useState } from "react";
import { useBetween } from "use-between";
import useDatabases from "../../../hooks/databaseHook";
import {Grid, Stack,Title,Text } from "@mantine/core";
import useTableViewStyles from "./TabelViewStyle";

function TableView() {
  const useSharedDatbases = () => useBetween(useDatabases);
  const { routesByDate, getDistanceById} = useSharedDatbases();
  const [dayDistance, setDayDistance] = useState();

  useEffect(() => {
    if(routesByDate){
    let distance = 0;
    routesByDate.forEach((route) => {

      distance += getDistanceById(route);
    });
    setDayDistance(distance);}
  },[routesByDate]);

 

  return (
    <Stack algin="flex-start">
       
      <Grid algin="flex-start">
        <Grid.Col  span="auto">
        <Title order={5}>Anzahl: </Title>
        </Grid.Col>
        <Grid.Col  span="auto">
        <Text>{routesByDate ? routesByDate.length : 0}</Text>
               </Grid.Col>
        </Grid>
        <Grid algin="flex-start">
        <Grid.Col  span="auto">
        <Title order={5}>KM: </Title>
        </Grid.Col>
        <Grid.Col  span="auto">
        <Text>{dayDistance}</Text>
        </Grid.Col>
      </Grid>
     
    </Stack>
  );
}
export { TableView };
