import React, {View, ScrollView} from 'react-native';
export default function ScrollArea({rootStyle, scrollViewStyle, itemsList}) {
  return (
    <View style={rootStyle ? rootStyle : styles.root}>
      <View style={styles.container}>
        <ScrollView
          style={scrollViewStyle ? scrollViewStyle : styles.scrollView}>
          {itemsList ? itemsList : null}
        </ScrollView>
      </View>
    </View>
  );
}
const styles = {
  root: {height: 400, width: 300},
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 8,
    borderColor: 'black',
    borderWidth: 1,
  },
};
