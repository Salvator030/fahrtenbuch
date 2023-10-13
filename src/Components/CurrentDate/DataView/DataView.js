import React from "react";
import {Stack, Title} from "@mantine/core"
import { TableView } from "./TableView";
import classes from "./DataView.module.css"


 function DataView(date){
  
    return(
    <Stack classNames={{root: classes.stackRoot}} >
        <Title order={3} style={{marginBottom: "16px"}}>{date.day}.{date.month}.{date.year}</Title>
        <TableView />
    </Stack>);
}

export { DataView }