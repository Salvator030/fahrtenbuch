import { Accordion, Button, Grid, Stack, Text } from "@mantine/core";
 function RoutesAccordion(){

    return (
        <Accordion
        classNames={{
          control: classes.accordionControl,
          item: classes.accordionItem,
        }}
      >
        <Accordion.Item value="Strecken">
          <Accordion.Control icon={<RouteIcon />} algin="center">
            <Text>Strecken</Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Stack>
              <RoutesCards />
              <Grid justify="flex-start">
                <Grid.Col span="content">
                  <Button onClick={handelOnClickNewRouteBtn}>
                    Neu Strecke erstellen
                  </Button>
                </Grid.Col>
                {routesList && (
                  <Grid.Col span="content">
                    <Button onClick={handelOnClickAddRouteToDayBtn}>
                      Strecke zum Tag hinzufügen
                    </Button>
                  </Grid.Col>
                )}
              </Grid>
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    )
                }