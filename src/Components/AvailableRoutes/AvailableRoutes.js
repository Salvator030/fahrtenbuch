import React, {Text, View, ScrollView} from 'react-native';
import Accordion from '../CustomComponents/Accordion/Accordion';
import Grid from '../CustomComponents/Grid/Grid';
import ButtonIcon from '../CustomComponents/ButtonSvgIcon/ButtonIcon';
import TrashIcon from 'react-native-vector-icons/Ionicons';
import PlusIcon from 'react-native-vector-icons/FontAwesome';
import useAvailableRoutes from '../../stores/availableRoutesStor';

const styles = {
  gridStyle: {
    flex: 12,
  },
  row: {
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
  },
  col1: {flex: 2, marginHorizontal: 'auto'},
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 8,
    borderColor: 'black',
    borderWidth: 1,
  },
};

export default function AvailableRoutes() {
  const {routesCards, handelOnClickNewRouteBtn} = useAvailableRoutes();

  const discription = [
    {
      style: styles.row,
      cols: [
        {
          style: styles.col1,
          item: <Text>Von</Text>,
        },
        {
          style: styles.col1,
          item: <Text>Nach</Text>,
        },
        {
          style: styles.col1,
          item: <Text>Entfernung</Text>,
        },
      ],
    },
  ];
  const buttons = [
    {
      style: styles.row,
      cols: [
        {
          style: styles.col1,
          item: (
            <ButtonIcon
              title="Neue Strecke"
              Icon={PlusIcon}
              iconName="plus"
              onClick={handelOnClickNewRouteBtn}
            />
          ),
        },
        {
          style: styles.col1,
          item: (
            <ButtonIcon
              title="Strecke Löschen"
              Icon={TrashIcon}
              iconName="trash"
            />
          ),
        },
      ],
    },
  ];

  const example = [
    <Grid rowsAndCols={discription} style={styles.gridStyle} />,
    <View style={{height: 300, width: '100%', alignSelf: 'center'}}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>{routesCards}</ScrollView>
      </View>
    </View>,
    <Grid rowsAndCols={buttons} style={styles.gridStyle} />,
  ];
  return <Accordion title="Verfügbare Strecken" items={example} />;
}
