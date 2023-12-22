import {useState} from 'react';
import React, {Button, View, StyleSheet, Text} from 'react-native';
import RNFS from 'react-native-fs';
const styles = StyleSheet.create({
  root: {
    height: 650,
    width: 600,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
  },
});

export default function CreateFile() {
  const [text, setText] = useState('a');
  const click = () => {
    console.log('RITTEN!');
    var path = RNFS.DocumentDirectoryPath + '/test.txt';

    // write the file
    RNFS.touch(path)
      .then(success => {
        console.log('FILE WRITTEN!');
        setText(path);
      })
      .catch(err => {
        console.error(err.message);
      });
  };
  return (
    <View style={styles.root}>
      <Button title="Create" onPress={click} />
      <Text>{text}</Text>
    </View>
  );
}
