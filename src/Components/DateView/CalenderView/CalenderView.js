import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {useBetween} from 'use-between';
import useCalender from '../../../stores/calenderStore';
export default function CalenderView() {
  const useShareCalender = () => useBetween(useCalender);
  const {selectedDate, changeSelectedDate} = useShareCalender();
  return (
    <View>
      <CalendarPicker
        selectedStartDate={selectedDate}
        onDateChange={changeSelectedDate}
        width={400}
        height={400}
      />
      {/* <Text>SELECTED DATE:{startDate}</Text> */}
    </View>
  );
}
