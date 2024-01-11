import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    height: 50,
    padding: 8,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 16,
    marginLeft: 8,
    marginRight: 8,
  },
  selected: {backgroundColor: 'lightgray'},
  row: {
    flexDirection: 'row',
    marginTop: 8,
  },
  col1: {flex: 1, marginHorizontal: 'auto'},
});
