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
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 400,
    width: 300,
    padding: 8,
  },
  btn1: {marginTop: 75},
  btn2: {marginTop: 8, marginBottom: 8},
  btn3: {marginBottom: 'auto'},
  textInput: {
    width: 100,
    height: 25,
    textAlign: 'right',
    textAlignVertical: 'center',
    fontSize: 16,
  },

  headline: {margin: 8, fontSize: 18, fontWeight: 'bold'},

  text: {
    fontSize: 16,
    alignContent: 'flex-end',
    alignSelf: 'baseline',
  },

  gridStyle: {
    flex: 12,
  },

  row: {
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
  },
  col1: {flex: 2, marginHorizontal: 'auto'},
  col2: {flex: 0, marginHorizontal: 'auto'},
});
