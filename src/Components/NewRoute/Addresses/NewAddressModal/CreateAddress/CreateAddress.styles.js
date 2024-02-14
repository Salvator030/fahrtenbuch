import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  dialog: {
    marginTop: 'auto',
    marginBottom: 'auto',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 400,
    width: 300,
  },
  gridStyle: {
    flex: 12,
    marginHorizontal: 'auto',
  },
  row1: {
    flexDirection: 'row',
    margin: 8,
    height: 275,
  },
  row: {
    flexDirection: 'row',
    margin: 8,
  },
  col1: {flex: 6, marginHorizontal: 'auto'},
  col2: {flex: 1, marginHorizontal: 'auto'},
  headline: {margin: 8, fontSize: 18, fontWeight: 'bold'},
});
