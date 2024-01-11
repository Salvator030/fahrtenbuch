import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  textInput: {width: 75, alignSelf: 'center'},
  root: {
    height: 950,
    width: 300,
    alignSelf: 'center',
  },
  container: {
    height: 450,
    marginHorizontal: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    alignSelf: 'center',
  },
  text: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  gridStyle: {
    flex: 12,
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
  },
  col1: {flex: 1, marginHorizontal: 'auto'},
  col2: {flex: 2, marginHorizontal: 'auto'},
  col4: {flex: 4, marginHorizontal: 'auto'},
});
