import { Box, Button, Grid, ScrollArea, Title } from "@mantine/core";
import React, { useState } from "react";
import { AddressInputView } from "./AddressInputView/AddressInputView";
import "@mantine/core/styles.css";
import useCraeteRoute from "../../hooks/createRouteHook";
import Cards from "./Cards/Cards";
import classes from "./CreateRouteView.module.css";
import { useBetween } from "use-between";
import NewRoutePreView from "./NewRoutePreView/NewRoutePreView";
import { DistanceInput } from "./DistanceInput/DistanceInput";
import { checkDistanceInput } from "../../asserts/helper";

export function CreateRouteView() {
  const [isAddNewAddress, setAddNewAddress] = useState(false);
  
  const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  const { startAddress,distance, viewDescription, viewForwards, viewBackwards, distanceInputRef,okBtn,okBtnRef } =
    useSharedCreateRoute();

  const toggleAddNewAddress = () => {
    setAddNewAddress(!isAddNewAddress);
  };

  const handelOnClickOkBtn = () => {
    okBtn()
  
  };

  const handelOnClickBackBtn = () => {
    viewBackwards();
  };

  const handelOnClickAddBtn = () => {
    toggleAddNewAddress(); 
  };

  console.log(viewDescription);
  return (
    <Grid>
      <Grid.Col span="content">
        {(viewDescription === "start" || viewDescription === "destination") && (
          <>
            {viewDescription === "start" && <Title>Start Addresse</Title>}
            {viewDescription === "destination" && <Title>Ziel Addresse</Title>}
            <Cards />
          </>
        )}

        {viewDescription === "distance" && (
          <>
            <Title>Entfernung</Title>
            <DistanceInput />
          </>
        )}
        {viewDescription === "save" && <Title>Speichern</Title>}
        <Grid justify="flex-start" className={classes.grid}>
          <Grid.Col span={4}>
            {(viewDescription === "start" ||
              viewDescription === "destination") && (
              <Button onClick={handelOnClickAddBtn}>+</Button>
            )}
          </Grid.Col>
          <Grid.Col span={4}>
            {viewDescription !== "save" && (
              <Button disabled={!startAddress} ref={okBtnRef} onClick={handelOnClickOkBtn}>Ok</Button>
            )}
          </Grid.Col>
          <Grid.Col span={4}>
            <Button onClick={handelOnClickBackBtn}>zurück</Button>
          </Grid.Col>
        </Grid>
      </Grid.Col> 
      <Grid.Col span="content">
        <NewRoutePreView />
      </Grid.Col>
    </Grid>
  );
}
