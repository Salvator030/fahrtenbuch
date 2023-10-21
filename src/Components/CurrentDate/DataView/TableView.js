import React, { useEffect, useState } from "react";
import { useBetween } from "use-between";
import useDatabases from "../../../hooks/databaseHook";
import { Grid, Stack, Title, Text } from "@mantine/core";
import useTableViewStyles from "./TabelViewStyle";

function TableView() {
  const useSharedDatbases = () => useBetween(useDatabases);

  const { routesByDateList, routesByMonthList, getDistanceById } =
    useSharedDatbases();

  const [dayDistance, setDayDistance] = useState();
  const [monthDistance, setMonthDistance] = useState();

  useEffect(() => {

    if (routesByDateList) {
      let distance = 0.0;
      routesByDateList.forEach((route) => {
        distance += parseFloat(getDistanceById(route));
      });
      setDayDistance(distance);
    }
  }, [routesByDateList]);


  useEffect(() => {
       if (routesByMonthList) {
      let distance = 0.0;
      routesByMonthList.forEach((route) => {
        console.log(getDistanceById(route));
        console.log(parseFloat(getDistanceById(route)));
        distance += parseFloat(getDistanceById(route));
        console.log(distance);
      });
      setMonthDistance(distance);
    }
  }, [routesByMonthList]);



  return (
    <Stack algin="flex-start">
      <Grid algin="flex-start">

        <Grid.Col span={3}>

          <Title order={5}>Anzahl: </Title>
        </Grid.Col>
        <Grid.Col span="auto">
          <Text>{routesByDateList ? routesByDateList.length : 0}</Text>

        </Grid.Col>
      </Grid>
      <Grid algin="flex-start">
        <Grid.Col span={3}>
          <Title order={5}>KM: </Title>
        </Grid.Col>
        <Grid.Col span="auto">
          <Text>{dayDistance}</Text>
        </Grid.Col>
      </Grid>
      <Title order={4} style={{marginTop: 32, textAlign: "left"}}>Im Monat</Title>
      <Grid algin="flex-start">
        <Grid.Col span={3}>
          <Title order={5}>Anzahl: </Title>
        </Grid.Col>
        <Grid.Col span="auto">
          <Text>{routesByMonthList ? routesByMonthList.length : 0}</Text>
        </Grid.Col>
      </Grid>
      <Grid algin="flex-start">
        <Grid.Col span={3}>
          <Title order={5}>KM: </Title>
        </Grid.Col>
        <Grid.Col span="auto">
          <Text>{monthDistance}</Text>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
export { TableView };
