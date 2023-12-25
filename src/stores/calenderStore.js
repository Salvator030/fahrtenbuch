import {useState} from 'react';

export default function useCalender() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const changeSelectedDate = date => {
    setSelectedDate(date);
  };

  return {selectedDate, changeSelectedDate};
}
