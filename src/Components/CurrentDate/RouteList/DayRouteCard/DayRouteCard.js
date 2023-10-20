import { Card, Grid, Overlay, Text, Title } from "@mantine/core";

import { useState } from "react";
import { useBetween } from "use-between";
import useDatabases from "../../../../hooks/databaseHook";
import useDayRoute from "../../../../hooks/dayRouteHokk";

function DayRouteCard({ drivenRoute }) {
  const useSharedDatabases = () => useBetween(useDatabases);
  const useSharedDayRoute = () => useBetween(useDayRoute);
  const { getRouteById, getRouteFullAddressesByRouteId } = useSharedDatabases();
  const { selectedDayRoute, setSekectedDayRoute } = useSharedDayRoute();


  const [addresses] = useState(
    getRouteFullAddressesByRouteId(drivenRoute.route_id)
  );
  const [selectedCard, setSelectedCard] = useState();
  const route = getRouteById(drivenRoute.route_id);

  const handelOnClick = (e) => {
 
    if (!selectedDayRoute) {
      e.target.style.backgroundColor = "gray";
      setSelectedCard(e);
      setSekectedDayRoute(drivenRoute);
}

     else {
     
       if(selectedDayRoute.dRoute_id === drivenRoute.dRoute_id){
      e.target.style.backgroundColor = "white";
      setSelectedCard();
      setSekectedDayRoute(undefined);}
    }
    e.target.style.opacity = 0.2;

  };
console.log(route)
  
  return (
    <Card withBorder key={drivenRoute.dRoute_id}>
      <Grid>
        <Grid.Col span="auto">
          <Title order={4}>{addresses[0].name}</Title>
        </Grid.Col>
        <Grid.Col span="auto">
          <Title order={4}>{addresses[1].name}</Title>
        </Grid.Col>
        <Grid.Col span="auto">
          {route && <Title order={4}>{route.distance} KM</Title>}
        </Grid.Col>
      </Grid>
      <Overlay
        backgroundOpacity={0}
        onClick={ handelOnClick}
        // style={bg}
      />
    </Card>
  );
}

export default DayRouteCard;
