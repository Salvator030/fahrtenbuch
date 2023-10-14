import { Button, Grid, Indicator } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useState } from "react";
import { DataView } from "../CurrentDate/DataView/DataView";
import DayRoutesCards from "./RouteList/DayRoutesCards";
import { useBetween } from "use-between";
import "@mantine/core/styles/global.css";
import "@mantine/dates/styles.css";
import classes from "./CurrentDate.module.css";
import useCurrentDate from "../../hooks/currentDateHook";
import useDatabases from "../../hooks/databaseHook";
import useCraeteRoute from "../../hooks/createRouteHook";

export default function CurrentDate() {
  const useSharedCurrentDate = () => useBetween(useCurrentDate);
  const { selectedDate, setSelectedDate, getCurrentDate, setNewMonth } =
    useSharedCurrentDate();

  const useSharedDatabase = () => useBetween(useDatabases);
  const { setIsChangedMonth, routesByMonthList } = useSharedDatabase();

  const handelOnChangeDatePicker = (e) => {
    console.log(e);
  };

  const dayRenderer = (date) => {
    if(routesByMonthList){
    console.log(
      routesByMonthList.find(
        (route) =>
          route.date ===
          `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
      )
    )};
    const day = date.getDate();
    return (
      <Indicator
        size={6}
        color="red"
        offset={-5}
        disabled={
          !routesByMonthList.find(
            (route) => 
              route.date ===
              `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
          )
        }
      >
        <div>{day}</div>
      </Indicator>
    );
  };

  const handelChangeMonth = (e) => {
    console.log(e);
    setNewMonth({ year: e.getFullYear(), month: e.getMonth() });
    setIsChangedMonth(true);
  };

  return (
    <Grid>
      <Grid.Col span="auto">
        <DatePicker
          value={selectedDate}
          onChange={setSelectedDate}
          onNextMonth={handelChangeMonth}
          onPreviousMonth={handelChangeMonth}
          locale="locale"
          renderDay={dayRenderer}
        />
      </Grid.Col>
      <Grid.Col span="auto">
        <DataView {...getCurrentDate()} />
      </Grid.Col>
      <Grid.Col span="auto">
        <DayRoutesCards />
      </Grid.Col>
    </Grid>
  );
}
