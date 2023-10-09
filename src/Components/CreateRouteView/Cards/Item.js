import { Grid, Overlay, Stack, Text, Card } from "@mantine/core";
import classes from "./Cards.module.css";
import useCraeteRoute from "../../../hooks/createRouteHook";
import { useBetween } from "use-between";
import { useEffect, useState } from "react";

function Item({ address }) {
  const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  const {
    viewDescription,
    setStartAddress,
    setDestinationAddress,
    startAddressRef,
    selectedCard, setSelectedCard
  } = useSharedCreateRoute();



  const handelOnClick = (e) => {
    console.log(e)
       if (viewDescription === "start") {
      setStartAddress(address);
        e.target.style.border = "1pxs solid lightgreen"
        e.target.style.backgroundColor = "black"
    
    
    } else {
      console.log(startAddressRef)
      setDestinationAddress(address);
     
    }
  };

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
       
     
      />
    </Card>
  );
}

export default Item;
