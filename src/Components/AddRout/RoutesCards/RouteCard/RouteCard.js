import { Card, Grid, Overlay, Text, Title } from "@mantine/core";
import { useBetween } from "use-between";
import useCraeteRoute from "../../../../hooks/createRouteHook";
import useAddRoute from "../../../../hooks/addRouteHook";
function RouteCard({ route }) {
  const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  const { addressesList } = useSharedCreateRoute();

  const useSharedAddRoute = () => useBetween(useAddRoute);
  const { setSelectedRoute, selectedCard, setSelectedCard } = useSharedAddRoute();



  const startAdd = addressesList.find(
    (add) => add.add_id === route.startAdd_id
  );
  const destAdd = addressesList.find((add) => add.add_id === route.destAdd_id);
  const handleOnClick = (e) => {
    if (e.target.style.backgroundColor === "white") {
      if (selectedCard){
        selectedCard.target.style.backgroundColor = "white";
      }
      e.target.style.backgroundColor = "gray";
      setSelectedCard(e);
    }else {
      e.target.style.backgroundColor = "white";
      if(selectedCard){
        setSelectedCard();
      }
    }
    e.target.style.opacity = 0.2;
    setSelectedRoute(route);
  };

  return (
    <Card>
      <Grid
        justify="flex-start"
        style={{ marginBottom: "8px", border: "1px solid gray" }}
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
            Entvernung
          </Title>
          <Text align="left">{route.distance} KM</Text>
        </Grid.Col>
      </Grid>
      <Overlay
        onClick={handleOnClick}
        backgroundOpacity={0}
        id={route.route_id}

        // style={bg}
      />
    </Card>
  );
}

export default RouteCard;
