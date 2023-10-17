import { useState, useEffect, useRef } from "react";
import { useInputState } from "@mantine/hooks";
import { useBetween } from "use-between";
import { getAllAddress, insertRoute } from "../Database/database";
import useDatabases from "./databaseHook";
import  useCurrentDate from "./currentDateHook"
import { checkDistanceInput } from "../asserts/helper";

function useCraeteRoute() {
  const useSharedCurrentRoute = () => useBetween(useCurrentDate);
  const useSharedDatabases = () => useBetween(useDatabases);
 

const {selectedDate} = useSharedCurrentRoute();
const {setIsNewRoute} = useSharedDatabases();

  const [startAddress, setStartAddress] = useState();
  const [destinationAddress, setDestinationAddress] = useState();
  const [addressesList, setAddressList] = useState();
  const [isNewAddress, setIsNewAddress] = useState();
  const [viewDescription, setviewDescription] = useState("start");
  const [viewCount, setViewCount] = useState(0);
  const [distance, setDistance] = useInputState("");
  const [isDistance, setIsDistance] = useState(false);
  const [selectedStartAddressCard, setSelectedStartAddressCard] = useState();
  const [selectedDestinationAddressCard, setSelectedDestinationAddressCard] =
    useState();
    const[showCreateRouteView, setShowCreateRouteView] = useState(false);
     

  const distanceInputRef = useRef();
  const okBtnRef = useRef();
  const startAddressRef = useRef();

  useEffect(() => {
    async function fetchData() {
      const list = await getAllAddress();
      if (list) {
        setAddressList(await list);
        setIsNewAddress(false);
      }
    }
    fetchData();
  }, [isNewAddress]);

  const discriptionList = ["start", "destination", "distance", "save"];
  useEffect(() => {
    setviewDescription(discriptionList[viewCount]);
  }, [viewCount]);

  const viewForwards = () => {
    if (viewCount !== 3) {
      setViewCount(viewCount + 1);
    }
  };

  const viewBackwards = () => {
       if (viewDescription === "destination") {
           setStartAddress();
    }
    if (viewDescription === "distance") {
      setDestinationAddress();
      setDistance("");
    }
    if (viewDescription === "save") {
      setDistance("");
    }
    if (viewCount !== 0) {
      setViewCount(viewCount - 1);
    }
  };

  useEffect(() => {
    if (startAddress) {
           startAddressRef.current.style.backgroundColor = "black";
    }
  }, [startAddress]);

  useEffect(() => {
    if (okBtnRef.current) {
      if (viewDescription === "start") {
        if (!startAddress) {
                 okBtnRef.current.disabled = true;
           } else {
              okBtnRef.current.disabled = false;
        }
      }
    }
    if (viewDescription === "destination") {
      if (!destinationAddress) {
        okBtnRef.current.disabled = true;
      } else {
        if (
          destinationAddress &&
          startAddress &&
          startAddress.add_id === destinationAddress.add_id
        ) {
                  okBtnRef.current.disabled = true;
        } else {
          okBtnRef.current.disabled = false;
        }
      }
    }
    if (viewDescription === "distance") {
      if (okBtnRef.current) {
        if (distance.length === 0) {
          okBtnRef.current.disabled = true;
        } else {
          okBtnRef.current.disabled = false;
        }
      }
    }
  }, [viewDescription, startAddress, destinationAddress, distance]);

  useEffect(()=> {
     },[selectedDate])

  const okBtn = () => {
    if (viewDescription === "distance") {
      if (checkDistanceInput(distance)) {
        distanceInputRef.current.style.borderColor = "black";
        setIsDistance(true);
        viewForwards();
      } else {
        distanceInputRef.current.style.borderColor = "red";
      }
    } else {
      viewForwards();
    }

    if (viewDescription === "save") {
      const newRoute = {
        start_id: startAddress.add_id,
        dest_id: destinationAddress.add_id,
        distance: distance,
        // date: `${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDate()}`
      };
          insertRoute(newRoute);
          setIsNewRoute(true)
      setShowCreateRouteView(false);
      setStartAddress();
      setDestinationAddress();
      setDistance("");
      setViewCount(0)
    }
  };

  const backBtn = () => {
    if ( viewDescription === "start") {
      setShowCreateRouteView(false);
     }else{  viewBackwards();}
       
  }



  return {
    okBtn,
    okBtnRef,
    backBtn,
    addressesList,
    startAddressRef,
    viewDescription,
    startAddress,
    setStartAddress,
    destinationAddress,
    setDestinationAddress,
    distance,
    setDistance,
    viewForwards,
    viewBackwards,
    distanceInputRef,
    selectedStartAddressCard,
    setSelectedStartAddressCard,
    selectedDestinationAddressCard,
    setSelectedDestinationAddressCard,
    showCreateRouteView, 
    setShowCreateRouteView,
    setIsNewAddress
    
  };
}
export default useCraeteRoute;
