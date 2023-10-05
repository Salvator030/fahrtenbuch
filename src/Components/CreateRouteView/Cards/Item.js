import { Grid, Overlay, Stack, Text, Card } from "@mantine/core";
import classes from "./Cards.module.css";
import useCraeteRoute from "../../../hooks/createRouteHook";
import { useBetween } from "use-between";
import { useEffect } from "react";


function Item({ address}) {
  const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  const {

    addressDescription,
    startAddress,
    setStartAddress,
    destinationAddress,
    setDestinationAddress,
  } = useSharedCreateRoute();


  console.log(startAddress);
  console.log(destinationAddress);

  const handelOnClick = () => {
    console.log(addressDescription);
    if (addressDescription === "start") {
      console.log(addressDescription);
      setStartAddress(address);
    } else {
      console.log(addressDescription);
      setDestinationAddress(address);
    }
    console.log(addressDescription);
  };
  return (
    <Card
      withBorder
      padding="xs"
      inheritPadding
      classNames={{ root: classes.cardRoot }}
      key={address.add_id}
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
