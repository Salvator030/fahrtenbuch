import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    height: 650,
    width: 600,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
    zIndex: 2,
  },

  gridStyle: {
    flex: 12,
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
  },
  col1: {flex: 6, marginHorizontal: 'auto'},
  col2: {flex: 1, marginHorizontal: 'auto'},
  col3: {flex: 3, marginHorizontal: 'auto'},

  verticalLine: {
    width: 1,
    height: 500,
    backgroundColor: 'black',
  },

  headline: {fontSize: 18, fontWeight: 'bold', marginTop: 8, marginBottom: 16},
});
