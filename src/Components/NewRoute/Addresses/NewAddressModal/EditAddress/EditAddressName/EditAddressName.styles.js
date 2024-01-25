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
    padding: 8,
  },
  gridStyle: {
    flex: 12,
    marginHorizontal: 'auto',
  },
  row1: {
    flexDirection: 'row',
    marginHorizontal: 8,
    marginTop: 'auto',
  },
  row2: {
    flexDirection: 'row',
    margin: 8,
    marginTop: 'auto',
  },
  col1: {flex: 6, marginHorizontal: 'auto'},
  col2: {flex: 1, marginHorizontal: 'auto'},
  headline: {margin: 8, fontSize: 18, fontWeight: 'bold'},
  textInput: {height: 32},
});
