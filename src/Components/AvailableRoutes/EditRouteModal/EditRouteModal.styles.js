import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    position: 'relative',
    marginHorizontal: 'auto',
    padding: 16,
    backgroundColor: '#0000005d',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    height: 900,
    width: 800,
  },
  dialog: {
    position: 'relative',
    marginTop: 'auto',
    marginBottom: 'auto',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 400,
    width: 300,
    padding: 8,
  },

  headline: {marginTop: 8, marginBottom: 16, fontSize: 18, fontWeight: 'bold'},

  textInput: {
    width: 100,
    height: 25,
    textAlign: 'right',
    textAlignVertical: 'center',
    fontSize: 16,
  },

  text: {
    fontSize: 16,
    alignContent: 'flex-end',
    alignSelf: 'baseline',
  },

  gridStyle: {
    flex: 12,
    marginHorizontal: 'auto',
  },

  row: {
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
  },

  col1: {flex: 2, marginHorizontal: 'auto'},
  col2: {flex: 0, marginHorizontal: 'auto'},

  buttom: {position: 'relative', marginTop: 'auto'},
});
