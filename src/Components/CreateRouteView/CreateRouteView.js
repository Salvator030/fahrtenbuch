import {
  Box,
  Button,
  Card,
  CardActionArea,
  Grid,
  Overlay,
  ScrollArea,
  Select,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { useState, useCallback, useRef } from "react";
import "@mantine/core/styles.css";
import { useEventListener } from '@mantine/hooks';
import { getAddressList } from "../../Database/databaseHandler";
import classes from "./CreateRouteView.module.css";

let list = await getAddressList();


export function CreateRouteView() {
  console.log(list);
  const [addressList, setAddressList] = useState(list);
   const increment = useCallback((e) =>click(), []);
  const ref = useEventListener('click', increment);
 
  const click = (e) => {console.log(e)}


   const Cards = addressList.map((address) => (
    <Card ref={ref} key={address.add_id}  withBorder  padding="xs" inheritPadding classNames={{root: classes.cardRoot}}>
       <Card.Section component="a" onClick={ click}>
      <Stack gap="xs">
        <Grid>
          <Grid.Col span="content" > <Text>{address.name}</Text></Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span="content"><Text>{address.street}</Text></Grid.Col>
          <Grid.Col span="content"><Text>{address.hnr}</Text></Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span="content"><Text>{address.plz}</Text></Grid.Col>
          <Grid.Col span="content"><Text>{address.place}</Text></Grid.Col>
        </Grid>
        <Text>{address.info}</Text>
      </Stack>
      </Card.Section>
      <Overlay backgroundOpacity={0} id={address.add_id} onClick={click}/>
    </Card>
  ));
  async function onClick() {
    console.log(addressList);
  }
  return (
    <>
   <Title>Start Addresse</Title>
      <ScrollArea w={400} h={500} type="always">
        <Box w={400}>{Cards}</Box>
      </ScrollArea>
    </>
  
  );
}
