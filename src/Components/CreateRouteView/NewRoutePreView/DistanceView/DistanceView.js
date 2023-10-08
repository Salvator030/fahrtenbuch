import {Title} from '@mantine/core'
export default function DistanceView({distance, classes}) {
  return (
    <div className={classes}>
      <Title  order={3}>Entfernung</Title>
      <Title order={4}>{distance.toString() + " KM"}</Title>
    </div>
  );
}
 