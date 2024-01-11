import React, {View, StyleSheet, Text} from 'react-native';
import {styles} from './Address.style';

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
