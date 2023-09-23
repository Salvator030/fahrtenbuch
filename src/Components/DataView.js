import React from "react";
import { TableView } from "./TableView";


 function DataView(date){
    
    console.log("DateView", date);
  
    return(<>
        <p>{date.day}.{date.month}.{date.year}</p>
        <TableView/>
    </>);
}

export { DataView }