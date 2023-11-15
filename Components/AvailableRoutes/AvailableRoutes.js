import React, {Text} from 'react-native';
import Accordion from '../CustomComponents/Accordion/Accordion';

const example = [<Text>a</Text>];

export default function AvailableRoutes() {
  return <Accordion title="Verfügbare Strecken" items={example} />;
}
