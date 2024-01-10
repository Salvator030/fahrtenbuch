import {useState} from 'react';
import React, {Button, View, StyleSheet, Text} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import ScrollArea from '../CustomComponents/ScrollArea/ScrollArea';
import RNFS from 'react-native-fs';
import usePrintView from '../../stores/printViewStore';
import ButtonIcon from '../CustomComponents/ButtonSvgIcon/ButtonIcon';
import IconOk from 'react-native-vector-icons/FontAwesome';
import BackIcon from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
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

  scrollView: {height: 400},
});

export default function PrintView() {
  const {
    onDateChange,
    fileData,
    selectedEndDate,
    onClickOkBtn,
    handelOnClickBackBtn,
    printFullAddress,
    setPrintFullAddress,
    printName,
    setPrintName,
  } = usePrintView();

  return (
    <View style={styles.root}>
      <CalendarPicker
        allowRangeSelection={true}
        onDateChange={onDateChange}
        width={400}
        height={400}
      />
      <Text>Name ausgeben?</Text>
      <CheckBox value={printName} onValueChange={setPrintName} />
      <Text>Ganze Addresse ausgeben?</Text>
      <CheckBox value={printFullAddress} onValueChange={setPrintFullAddress} />
      {fileData !== null && (
        <ScrollArea
          itemsList={[<Text>{fileData}</Text>]}
          rootStyle={styles.scrollView}
        />
      )}
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
              disabled={selectedEndDate === null}
              color={selectedEndDate === null ? 'gray' : 'black'}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
