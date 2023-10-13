import React, { useEffect, useState } from "react";
import { useBetween } from "use-between";
function useCurrentDate() {
  const date = new Date();
  const [selectedDate, setSelectedDate] = useState(date);

  useEffect(() => {}, [selectedDate]);

  const getCurrentDate = () => {
    return {
      day: selectedDate?.getDate(),
      month: selectedDate?.getMonth(),
      year: selectedDate?.getFullYear(),
    };
  };

  return { selectedDate, setSelectedDate, getCurrentDate };
}
export default useCurrentDate;
