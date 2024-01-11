import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {height: 400, width: 300},
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 8,
    borderColor: 'black',
    borderWidth: 1,
  },

  gridStyle: {
    width: 100,
    marginHorizontal: 'auto',
  },
  row: {
    flexDirection: 'row',
    marginLeft: 24,
    marginRight: 24,
  },
  col1: {flex: 1, marginHorizontal: 'auto'},
});
