import { Box, Button, Grid, ScrollArea, Title } from "@mantine/core";
import React, { useState } from "react";
import { AddressInputView } from "./AddressInputView/AddressInputView";
import "@mantine/core/styles.css";
import useCraeteRoute from "../../hooks/createRouteHook";
import Cards from "./Cards/Cards";
import classes from "./CreateRouteView.module.css";
import { useBetween } from "use-between";

export function CreateRouteView() {
  const [isAddNewAddress, setAddNewAddress] = useState(false);
  const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  const { addressDescription, toggleAddressDescription } =
    useSharedCreateRoute();

  const toggleAddNewAddress = () => {
    setAddNewAddress(!isAddNewAddress);
  };
  const handelOnClickSaveBtn = () => {
    console.log(addressDescription);
    toggleAddressDescription();
    console.log(addressDescription);
  };

  const handelOnClickAddBtn = () => {
    toggleAddNewAddress();
  };

  console.log(addressDescription);
  return (
    <>
      {isAddNewAddress ? (
        <AddressInputView toggleAddNewAddress={toggleAddNewAddress} />
      ) : (
        <>
          {addressDescription === "start" ? (
            <Title>Start Addresse</Title>
          ) : (
            <Title>Ziel Addresse</Title>
          )}
          <Cards />
          <Grid justify="flex-start" classNames={{ root: classes.gridRoot }}>
            <Grid.Col span="content">
              <Button onClick={handelOnClickAddBtn}>+</Button>
            </Grid.Col>
            <Grid.Col span={3} offset={3}>
              <Button onClick={handelOnClickSaveBtn}>Save</Button>
            </Grid.Col>
          </Grid>
        </>
      )}
    </>
  );
}
