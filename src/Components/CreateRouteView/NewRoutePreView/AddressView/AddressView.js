import { Grid, Stack,Text, Title } from "@mantine/core";

export default function AddressView({ address, classes}) {
    return (
      <Stack align="flex-start" className={classes}>

        
        <Title order={4}>{address.name}</Title>
        <Grid >
          <Grid.Col span="content">
            <Text>{address.street}</Text>
          </Grid.Col>
          <Grid.Col span={2}>
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
      </Stack>
    );
  }