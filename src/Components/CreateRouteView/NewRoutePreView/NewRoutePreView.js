import { Grid, Stack, Text, Title } from "@mantine/core";
import useCraeteRoute from "../../../hooks/createRouteHook";
import { useBetween } from "use-between";
import AddressView from "./AddressView/AddressView";
import classes from "./NewRoutePreView.module.css";

export default function NewRoutePreView() {
  const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  const { startAddress, destinationAddress, distance } = useSharedCreateRoute();

  return (
    <>
      {startAddress && (
        <AddressView description="Start Adresse" address={startAddress} />
      )}
      {destinationAddress && (
        <AddressView
          classes={classes.destinationAddress}
          description="Ziel Adresse"
          address={destinationAddress}
        />
      )}
      {distance && (
        <>
          <Title order={3}>Entfernuug</Title>
          <Title order={4}>{distance.toString()+ " KM"}</Title>
        </>
      )}
    </>
  );
} 
