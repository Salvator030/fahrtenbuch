import {useState} from 'react';
import React, {Button, View, StyleSheet, Text} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import ScrollArea from '../CustomComponents/ScrollArea/ScrollArea';
import usePrintView from '../../stores/printViewStore';
import ButtonIcon from '../CustomComponents/ButtonSvgIcon/ButtonIcon';
import IconOk from 'react-native-vector-icons/FontAwesome';
import BackIcon from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import {styles} from './PrintView.styles';

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
