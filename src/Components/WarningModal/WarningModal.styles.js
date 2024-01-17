import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    padding: 16,
    backgroundColor: '#0000005d',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    height: 900,
    width: 800,
    zIndex: 3,
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
  col1: {flex: 1, marginHorizontal: 'auto', alignSelf: 'center'},
  col2: {flex: 6, marginHorizontal: 'auto', alignSelf: 'center'},
});
