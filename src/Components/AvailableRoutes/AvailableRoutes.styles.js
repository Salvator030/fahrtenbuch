import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  gridStyle: {
    flex: 12,
  },
  gridStyleBtn: {
    flex: 12,
  },
  row: {
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
  },
  col: {flex: 2, marginHorizontal: 'auto'},
  col1: {flex: 2, marginHorizontal: 'auto'},

  searchTag: {
    width: 80,
    alignSelf: 'center',
    // alignContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  searchTagBackgroundWhite: {
    backgroundColor: 'white',
  },
  searchTagBackgroundGray: {
    backgroundColor: 'lightgray',
  },
  container: {
    width: '100%',
    height: '100%',
  },
  scrollView: {
    marginHorizontal: 8,
    borderColor: 'black',
    borderWidth: 1,
  },
});
