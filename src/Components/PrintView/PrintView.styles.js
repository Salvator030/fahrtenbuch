import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    height: 850,
    width: 600,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
  },

  gridStyle: {
    flex: 12,
    height: 300,
    width: 400,
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
  },
  col1: {flex: 1, marginHorizontal: 'auto'},
  col2: {flex: 1, marginHorizontal: 'auto'},
  col4: {flex: 4, marginHorizontal: 'auto'},

  scrollView: {height: 400},
});
