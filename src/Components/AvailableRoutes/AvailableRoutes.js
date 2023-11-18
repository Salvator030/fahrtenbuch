import React, {Text, View, ScrollView} from 'react-native';
import Accordion from '../CustomComponents/Accordion/Accordion';
import Grid from '../CustomComponents/Grid/Grid';
import ButtonIcon from '../CustomComponents/ButtonSvgIcon/ButtonIcon';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useAvailableRoutes from '../../stores/availableRoutesStor';

const styles = {
  gridStyle: {
    flex: 0,
    marginHorizontal: 'auto',
    backgroundColor: 'black',
  },
  row: {
    flexDirection: 'row',
  },
  col1: {flex: 0.5, marginHorizontal: 'auto'},
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
  const {handelOnClickNewRouteBtn} = useAvailableRoutes();

  const rowsAndCols = [
    {
      style: styles.row,
      cols: [
        {
          style: styles.col1,
          item: (
            <ButtonIcon
              title="Neue Strecke"
              Icon={Icon}
              iconName="address-card"
              onClick={handelOnClickNewRouteBtn}
            />
          ),
        },
        {
          style: styles.col1,
          item: (
            <ButtonIcon title="Strecke Löschen" Icon={Icon} iconName="route" />
          ),
        },
      ],
    },
  ];

  const example = [
    <View style={{height: 300, width: '100%'}}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>{}</ScrollView>
      </View>
    </View>,
    <Grid rowsAndCols={rowsAndCols} style={styles.gridStyle} />,
  ];
  return <Accordion title="Verfügbare Strecken" items={example} />;
}
