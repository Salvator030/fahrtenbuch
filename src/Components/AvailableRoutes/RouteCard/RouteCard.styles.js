import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  textInput: {width: 75, alignSelf: 'center'},
  root: {
    height: 95,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 16,
    marginLeft: 8,
    marginRight: 8,
  },
  selected: {backgroundColor: 'lightgray'},
  container: {
    height: 500,
    marginHorizontal: 'auto',
  },
  hide: {backgroundColor: 'gray'},
  gridStyle: {
    flex: 12,
    height: 800,
  },
  gridStyleBtn: {
    flex: 12,
  },
  rowInput: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
  },
  col1: {flex: 1, marginHorizontal: 'auto'},
  col2: {flex: 2, marginHorizontal: 'auto'},
  col3: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  text: {marginRight: 8},
});
