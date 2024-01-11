import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  textInput: {width: 150, alignSelf: 'center'},
  root: {
    height: 950,
    width: 300,
    alignSelf: 'center',
  },
  container: {
    height: 500,
    marginHorizontal: 'auto',
  },
  gridStyle: {
    flex: 12,
    height: 800,
  },
  gridStyleBtn: {
    flex: 12,
  },
  rowInput: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
  },
  col1: {flex: 1, marginHorizontal: 'auto', alignSelf: 'center'},
  col2: {flex: 2, marginHorizontal: 'auto', alignSelf: 'center'},
  col3: {flex: 4, marginHorizontal: 'auto', alignSelf: 'center'},
});
