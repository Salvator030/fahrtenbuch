import React, {View, ScrollView} from 'react-native';
import {styles} from './ScrollArea.styles';

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
