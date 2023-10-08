import { Grid, Stack, Text, Title } from "@mantine/core";
import useCraeteRoute from "../../../hooks/createRouteHook";
import { useBetween } from "use-between";
import AddressView from "./AddressView/AddressView";
import classes from "./NewRoutePreView.module.css";
import DistanceView from "./DistanceView/DistanceView";

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
      {distance.length > 0 && (
        <>
        <DistanceView classes={classes.distance} distance={distance} />
        </>
      )}
    </>
  );
} 
