import React, {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  textInput: {width: 75, alignSelf: 'center'},
  root: {
    minHeight: 90,
    width: 300,
  },
  container: {
    height: 500,
    marginHorizontal: 'auto',
  },
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
  text: {marginRight: 8},
});
export default function Address({address}) {
  return (
    <View style={styles.root}>
      <View style={styles.gridStyle}>
        <View style={styles.row}>
          <View style={styles.col2}>
            <Text style={styles.addresName}>{address.name}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.text}>{address.street}</Text>
          </View>
          <View>
            <Text>{address.hnr}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.text}>{address.plz}</Text>
          </View>
          <View style={styles.col2}>
            <Text>{address.place}</Text>
          </View>
        </View>
        {/* {address.info !== '' && (
          <View style={styles.row}>
            <View>
              <Text>{address.info}</Text>
            </View>
          </View>
        )} */}
      </View>
    </View>
  );
}
