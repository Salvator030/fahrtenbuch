import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    height: 950,
    width: 300,
    alignSelf: 'center',
  },
  gridStyle: {
    flex: 4,
    marginHorizontal: 'auto',
  },
  row: {
    flexDirection: 'row',
  },

  col1: {flex: 2, marginHorizontal: 'auto'},
  col2: {flex: 2, marginHorizontal: 'auto'},
  col3: {flex: 2, marginHorizontal: 'auto'},

  searchTag: {
    width: 50,
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

  searchTextInput: {marginBottom: 8},

  text: {textAlign: 'center', paddingLeft: 8},
});
