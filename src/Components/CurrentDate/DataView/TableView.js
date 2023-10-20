import React, { useEffect, useState } from "react";
import { useBetween } from "use-between";
import useDatabases from "../../../hooks/databaseHook";
import {Grid, Stack,Title,Text } from "@mantine/core";
import useTableViewStyles from "./TabelViewStyle";

function TableView() {
  const useSharedDatbases = () => useBetween(useDatabases);
  const { routesByDateList, getDistanceById} = useSharedDatbases();
  const [dayDistance, setDayDistance] = useState();

  useEffect(() => {
    console.log(routesByDateList)
    if(routesByDateList){
    let distance = 0.00;
    routesByDateList.forEach((route) => {
console.log(getDistanceById(route))
console.log(parseFloat(getDistanceById(route)))
      distance += parseFloat(getDistanceById(route)) ;
      console.log(distance)
    });
    setDayDistance(distance);}
  },[routesByDateList]);

 

  return (
    <Stack algin="flex-start">
       
      <Grid algin="flex-start">
        <Grid.Col  span="auto">
        <Title order={5}>Anzahl: </Title>
        </Grid.Col>
        <Grid.Col  span="auto">
        <Text>{routesByDateList ? routesByDateList.length : 0}</Text>
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
