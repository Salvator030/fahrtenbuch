import { useEffect, useState } from "react";
import { useBetween } from "use-between";

function useDayRoute () {

    const [selectedDayRoute, setSekectedDayRoute] = useState();
    const [selectedDayRouteCard, setSelectedDayRouteCard] = useState();
      
 
return {selectedDayRoute, setSekectedDayRoute, selectedDayRouteCard, setSelectedDayRouteCard}
}

export default useDayRoute;