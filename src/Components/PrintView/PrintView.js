import {useState} from 'react';
import React, {Button, View, StyleSheet, Text} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import ScrollArea from '../CustomComponents/ScrollArea/ScrollArea';
import RNFS from 'react-native-fs';
import useCreateFile from '../../stores/createFileStore';
import ButtonIcon from '../CustomComponents/ButtonSvgIcon/ButtonIcon';
import IconOk from 'react-native-vector-icons/FontAwesome';
import BackIcon from 'react-native-vector-icons/Ionicons';
const styles = StyleSheet.create({
  root: {
    height: 850,
    width: 600,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
  },

  gridStyle: {
    flex: 12,
    height: 300,
    width: 400,
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
  },
  col1: {flex: 1, marginHorizontal: 'auto'},
  col2: {flex: 1, marginHorizontal: 'auto'},
  col4: {flex: 4, marginHorizontal: 'auto'},
});

export default function PrintView() {
  const {onDateChange, fileData, onClickOkBtn, handelOnClickBackBtn} =
    useCreateFile();

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
      <View style={styles.gridStyle}>
        <View style={styles.row}>
          <View style={styles.col2}>
            <ButtonIcon
              Icon={BackIcon}
              title="zurück"
              iconName="arrow-back"
              onClick={handelOnClickBackBtn}
            />
          </View>
          <View style={styles.col4} />
          <View style={styles.col2}>
            <ButtonIcon
              Icon={IconOk}
              title="ok"
              iconName="check"
              onClick={onClickOkBtn}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
