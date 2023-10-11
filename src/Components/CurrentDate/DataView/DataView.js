import React from "react";
import {Title} from "@mantine/core"
import { TableView } from "./TableView";


 function DataView(date){
  
    return(<>
        <Title order={3} style={{marginBottom: "16px"}}>{date.day}.{date.month}.{date.year}</Title>
        <TableView />
    </>);
}

export { DataView }