import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
export default function CalenderView() {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  return (
    <View>
      <CalendarPicker
        onDateChange={setSelectedStartDate}
        width={400}
        height={400}
      />
      {/* <Text>SELECTED DATE:{startDate}</Text> */}
    </View>
  );
}
