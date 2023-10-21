import { Grid, Overlay, Stack, Text, Card } from "@mantine/core";
import classes from "./Cards.module.css";
import useCraeteRoute from "../../../hooks/createRouteHook";
import { useBetween } from "use-between";
import { useEffect, useState } from "react";

function Item({ address }) {
  const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  const {
    startAddress,
    destinationAddress,
    viewDescription,
    setStartAddress,
    setDestinationAddress,
    startAddressRef,
    selectedStartAddressCard,
    setSelectedStartAddressCard,
    selectedDestinationAddressCard,
    setSelectedDestinationAddressCard,
  } = useSharedCreateRoute();

  const handelOnClick = (e) => {
           if (viewDescription === "start") {
      setStartAddress(address);
      e.target.style.backgroundColor = "lightgreen";
      e.target.style.opacity = "0.2";
      if (selectedStartAddressCard !== undefined) {
        selectedStartAddressCard.target.style.backgroundColor = "";
        e.target.style.opacity = "0.2";
      }
      setSelectedStartAddressCard(e);
    } else {
      if (startAddress.add_id !== address.add_id) {
        e.target.style.backgroundColor = "blue";
        e.target.style.opacity = "0.2";

        setSelectedDestinationAddressCard(e);
      }
      if (selectedDestinationAddressCard !== undefined) {
        selectedDestinationAddressCard.target.style.backgroundColor = "";
        e.target.style.opacity = "0.2";
      }

      setDestinationAddress(address);
    }
  };

  
  const getBg = () => {
    if (startAddress && startAddress.add_id === address.add_id) {
      return {
        backgroundColor: "lightgreen",
        opacity: "0.2",
      };
    }
    if (destinationAddress && destinationAddress.add_id === address.add_id) {
      return {
        backgroundColor: "blue",
        opacity: "0.2",
      };
    }
  };
  const bg = getBg;

  return (
    <Card
      withBorder
      padding="xs"
      inheritPadding
      classNames={{ root: classes.cardRoot }}
      key={address.add_id}
      ref={startAddressRef}
    >
      <Stack gap="xs">
        <Grid>
          <Grid.Col span="content">
            {" "}
            <Text>{address.name}</Text>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span="content">
            <Text>{address.street}</Text>
          </Grid.Col>
          <Grid.Col span="content">
            <Text>{address.hnr}</Text>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span="content">
            <Text>{address.plz}</Text>
          </Grid.Col>
          <Grid.Col span="content">
            <Text>{address.place}</Text>
          </Grid.Col>
        </Grid>
        <Text>{address.info}</Text>
      </Stack>

      <Overlay
        backgroundOpacity={0}
        id={address.add_id}
        onClick={handelOnClick}
        // style={bg}
      />
    </Card>
  );
}

export default Item;
