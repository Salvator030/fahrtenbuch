import { ActionIcon, Card, Grid, Overlay, Text, Title } from "@mantine/core";
import { useBetween } from "use-between";
import useCraeteRoute from "../../../../hooks/createRouteHook";
import useAddRoute from "../../../../hooks/addRouteHook";
import useDatabases from "../../../../hooks/databaseHook";
import EyeOpenIcon from "../../../Icons/EyeOpenIcon";
import { useEffect, useState } from "react";
function RouteCard({ route }) {
  const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  const { addressesList } = useSharedCreateRoute();

  const useSharedAddRoute = () => useBetween(useAddRoute);
  const { selectedRoute, setSelectedRoute, selectedCard, setSelectedCard } =
    useSharedAddRoute();

    const useSharedDatabases = () => useBetween(useDatabases);
    const {setRouteHide} = useSharedDatabases();

  const [startAdd, setStartAdd] = useState({
    name: "",
    street: "",
    hnr: "",
    plz: "",
    info: "",
  });
  const [destAdd, setDestAdd] = useState({
    name: "",
    street: "",
    hnr: "",
    plz: "",
    info: "",
  });

  useEffect(() => {
    if (addressesList) {
      setStartAdd(
        addressesList.find((add) => add.add_id === route.startAdd_id)
      );
      setDestAdd(addressesList.find((add) => add.add_id === route.destAdd_id));
    }
  }, [addressesList, selectedRoute]);

  const handleOnClick = (e) => {
    if (!selectedRoute) {
      e.target.style.backgroundColor = "gray";
      setSelectedRoute(route);
      setSelectedCard(e);
      console.log(selectedRoute);
    } else {
      console.log(route.route_id);

      if (route.route_id === selectedRoute.route_id) {
        e.target.style.backgroundColor = "white";
        setSelectedRoute(undefined);
        setSelectedCard(undefined);
      } else {
        e.target.style.backgroundColor = "gray";
        selectedCard.target.style.backgroundColor = "white";
        setSelectedCard(e);
        setSelectedRoute(route);
        console.log(selectedRoute);
      }
    }

    e.target.style.opacity = 0.2;
  };

  const handelOnClickEye = () => {
    setRouteHide(route.route_id, 0);
  }

  console.log(startAdd);
  console.log(destAdd);

  return (
    <>
    <Card key={route.route_id} style={{paddingTop: "0px", paddingBottom: "0px"}}>
      <Grid
        justify="flex-start"
        style={
          route.hide === 0
            ? { marginBottom: "8px", border: "1px solid gray" }
            : {
               
                border: "1px solid gray",
                backgroundColor: "lightblue",
              }
        }
      >
        <Grid.Col span="auto">
          <Title order={5} align="left">
            Startadresse
          </Title>
          <Text align="left">{startAdd.name}</Text>

          <Text align="left">
            {startAdd.street} {startAdd.hnr}
          </Text>
          <Text align="left">
            {startAdd.plz} {startAdd.place}
          </Text>
        </Grid.Col>
        <Grid.Col span="auto">
          <Title order={4} align="left">
            Zieladresse
          </Title>
          <Text align="left">{destAdd.name}</Text>

          <Text align="left">
            {destAdd.street} {destAdd.hnr}
          </Text>
          <Text align="left">
            {destAdd.plz} {destAdd.place}
          </Text>
        </Grid.Col>
        <Grid.Col span={2}>
          <Title order={4} align="left">
            Entfernung
          </Title>
          <Text align="left">{route.distance} KM</Text>
        </Grid.Col>
      
   
      </Grid>
      <Overlay
        onClick={handleOnClick}
        backgroundOpacity={0}
        id={route.route_id}
        key={route.route_id}
      />
    
    </Card>
   {route.hide === 1 && 
          <ActionIcon size="xs" onClick={handelOnClickEye}>
            <EyeOpenIcon />
          </ActionIcon>}
    </>
  );
}

export default RouteCard;
