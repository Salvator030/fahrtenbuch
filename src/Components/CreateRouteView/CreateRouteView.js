import { Box, Button, ScrollArea, Title } from "@mantine/core";
import React, { useState, useCallback, useRef, useEffect } from "react";
import "@mantine/core/styles.css";
import useCraeteRoute from "../../hooks/createRouteHook";
import Cards from "./Cards/Cards";


export function CreateRouteView() {
let des = "start";
  const { description, toggleDescription } = useCraeteRoute();
  
  const handelSaveBtn = () => {
    console.log(description);
      toggleDescription();
      console.log(description);
  };

  console.log(description);
  return (
    <>
      {description === "start" ? (
        <Title>Start Addresse</Title>
      ) : (
        <Title>Ziel Addresse</Title>
      )}
      <Cards description={description}/>
      <Button onClick={handelSaveBtn}>Save</Button>
    </>
  );
}
