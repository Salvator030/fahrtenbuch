import { Button, Grid } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useState } from "react";
import { DataView } from "../CurrentDate/DataView/DataView";
import { useBetween } from "use-between";
import '@mantine/dates/styles.css';
import classes from "./CurrentDate.module.css"
import useCurrentDate from "../../hooks/currentDateHook";
import useCraeteRoute from "../../hooks/createRouteHook";

export default function CurrentDate() {
    const useSharedCurrentDate = () => useBetween(useCurrentDate);
    const {selectedDate, setSelectedDate} = useSharedCurrentDate();


  const getCurrentDate = () => {
    return {
      day: selectedDate?.getDate(),
      month: selectedDate?.getMonth(),
      year: selectedDate?.getFullYear(),
    };
  };



  return (
    <Grid  >
      <Grid.Col span="auto">
        <DatePicker value={selectedDate} onChange={setSelectedDate} locale="locale" />
      
      </Grid.Col>
      <Grid.Col span="auto">
        <DataView {...getCurrentDate()} />
      </Grid.Col>
    </Grid>
  );
}
