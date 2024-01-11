import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {alignSelf: 'center', marginTop: 8, marginHorizontal: 8, width: 800},
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'darkgray',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  parentHr: {
    height: 1,
    color: 'white',
    width: '100%',
  },
  child: {
    backgroundColor: 'lightgray',
    padding: 16,
  },
});
