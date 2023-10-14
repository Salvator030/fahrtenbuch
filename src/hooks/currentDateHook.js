import React, { useEffect, useState } from "react";
import { useBetween } from "use-between";
function useCurrentDate() {
  const date = new Date();
  const [selectedDate, setSelectedDate] = useState(date);
  const [newMonth,setNewMonth] = useState();

  useEffect(() => {}, [selectedDate]);

  const getCurrentDate = () => {
    return {
      day: selectedDate?.getDate(),
      month: selectedDate?.getMonth() +1,
      year: selectedDate?.getFullYear(),
    };
  };

  return { selectedDate, setSelectedDate, getCurrentDate,newMonth,setNewMonth };
}
export default useCurrentDate;
