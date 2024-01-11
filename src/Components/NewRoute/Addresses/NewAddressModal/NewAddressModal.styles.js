import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    padding: 16,
    backgroundColor: '#0000005d',
    alignItems: 'center',
    alignContent: 'center',
    height: 900,
    width: 800,
  },
  dialog: {
    marginTop: 'auto',
    marginBottom: 'auto',
    alignContent: 'center',
    padding: 16,
    backgroundColor: 'white',
    height: 400,
    width: 300,
  },
  gridStyle: {
    flex: 12,
    marginHorizontal: 'auto',
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
  },
  col: {flex: 1, marginHorizontal: 'auto'},
  col1: {flex: 1, marginHorizontal: 'auto'},
  col2: {flex: 9, marginHorizontal: 'auto'},
  col3: {flex: 3, marginHorizontal: 'auto'},
  col4: {flex: 8, marginHorizontal: 'auto'},
  headline: {marginBottom: 8, fontSize: 18, fontWeight: 'bold'},
  infoText: {height: 150},
  text: {height: 32},
  textColorBlack: {color: 'black'},
  textColorRed: {color: 'red'},
});
