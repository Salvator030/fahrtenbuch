import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 16,
    marginLeft: 8,
    marginRight: 8,
  },

  rootDefaultBackground: {
    backgroundColor: 'lightgray',
  },

  rootSelectedBackgroundStart: {backgroundColor: 'lightblue'},
  rootSelectedBackgroundDestination: {backgroundColor: 'lightgreen'},
  rootSelectedBackgroundHide: {backgroundColor: 'gray'},
  gridStyle: {
    flex: 12,
    marginHorizontal: 'auto',
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  col1: {flex: 1, marginHorizontal: 'auto'},
  col2: {flex: 9, marginHorizontal: 'auto'},
  col3: {flex: 3, marginHorizontal: 'auto'},
  col4: {flex: 8, marginHorizontal: 'auto'},
  col5: {flex: 2, marginHorizontal: 'auto', alignSelf: 'center'},

  text: {marginRight: 8},
  addresName: {marginRight: 8, fontSize: 16, fontWeight: 'bold'},
  icon: {height: 20, width: 20},
});
