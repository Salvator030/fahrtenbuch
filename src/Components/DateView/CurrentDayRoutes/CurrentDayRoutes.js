import React, {View, ScrollView, Button} from 'react-native';
import Grid from '../../CustomComponents/Grid/Grid';
import ButtonSvgIcon from '../../CustomComponents/ButtonSvgIcon/ButtonSvgIcon';
import TrashIcon from '../../Icons/TrashIcon';

const styles = {
  root: {height: 400, width: 300, borderColor: 'black', borderWidth: 1},
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 8,
  },

  gridStyle: {
    width: 100,
    marginHorizontal: 'auto',
  },
  row: {
    flexDirection: 'row',
  },
  col: {flex: 3, marginTop: 16},
};

const buttons = [
  {
    style: styles.row,
    // cols: [{style: styles.col, item: <ButtonSvgIcon svg={<TrashIcon />} />}],
  },
];
export default function CurrentDayRoutes() {
  const itemsList = [];

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>{itemsList}</ScrollView>
      </View>
      <Grid gridStyle={styles.gridStyle} rowsAndCols={buttons} />
    </View>
  );
}
