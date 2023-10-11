import React, { useEffect, useState } from "react";
import { useBetween } from "use-between";
function useCurrentDate(){
    const date = new Date();
    const [selectedDate, setSelectedDate] = useState(date);

    useEffect(()=> {
           },[selectedDate])

return {selectedDate, setSelectedDate}
}
export default useCurrentDate