import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {alignSelf: 'center'},
  gridStyle: {
    width: 800,
    marginHorizontal: 'auto',
  },
  row: {
    flexDirection: 'row',
  },
  col1: {flex: 1.4, marginHorizontal: 'auto'},
  col2: {flex: 0.4, marginHorizontal: 'auto'},
  col3: {flex: 1, marginHorizontal: 'auto'},
});
