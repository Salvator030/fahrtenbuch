import { Grid, Overlay, Stack, Text, Card } from "@mantine/core";
import classes from "./Cards.module.css";
import useCraeteRoute from "../../../hooks/createRouteHook";

import { useEffect } from "react";

function Item({ description, address, onClickHandler }) {
  const {
    returnD,
    // description,
    startAddress,
    setStartAddress,
    destinationAddress,
    setDestinationAddress,
  } = useCraeteRoute();

  // console.log(description);
  console.log(startAddress);
  console.log(destinationAddress);

  const handelOnClick = () => {
    console.log(returnD());

    if (description === "start") {
      console.log(description);
      setStartAddress(address);
    } else {
      console.log(description);
      setDestinationAddress(address);
    }
    console.log(description);
  };
  return (
    <Card
      withBorder
      padding="xs"
      inheritPadding
      classNames={{ root: classes.cardRoot }}
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
      />
    </Card>
  );
}

export default Item;
