import {useState} from 'react';
import React, {Button, View, StyleSheet, Text} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import ScrollArea from '../CustomComponents/ScrollArea/ScrollArea';
import RNFS from 'react-native-fs';
import useCreateFile from '../../stores/createFileStore';
import ButtonIcon from '../CustomComponents/ButtonSvgIcon/ButtonIcon';
import IconOk from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
  root: {
    height: 850,
    width: 600,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default function CreateFile() {
  const {onDateChange, fileData, onClickOkBtn} = useCreateFile();

  //   const [text, setText] = useState('a');
  //   const click = async () => {
  //     console.log('RITTEN!');
  //     var path = RNFS.DocumentDirectoryPath + '/test7.txt';

  //     // create file and write content to the file
  //     // in test get error ' Failed to create handle for file to touch ' but it works ???
  //     await RNFS.touch(path)
  //       .then(success => {
  //         console.log('FILE create!');
  //         setText(path);
  //       })
  //       .then(
  //         await RNFS.writeFile(path, 'asdfqweryxcv')
  //           .then(success => {
  //             console.log('FILE WRITTEN!');
  //             setText(path);
  //           })
  //           .catch(err => {
  //             console.error(err.message);
  //           }),
  //       )
  //       .catch(err => {
  //         console.error(err.message);
  //       });
  //   };
  return (
    <View style={styles.root}>
      <CalendarPicker
        allowRangeSelection={true}
        onDateChange={onDateChange}
        width={400}
        height={400}
      />
      <ScrollArea itemsList={[<Text>{fileData}</Text>]} />
      <ButtonIcon
        Icon={IconOk}
        title="ok"
        iconName="check"
        onClick={onClickOkBtn}
      />
    </View>
  );
}
