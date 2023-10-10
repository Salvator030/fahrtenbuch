import { useState, useEffect, useRef } from "react";
import { useInputState } from "@mantine/hooks";
import { useBetween } from "use-between";
import { getAllAddress, insertRoute } from "../database/database";
import  useCurrentDate from "./currentDateHook"
import { checkDistanceInput } from "../asserts/helper";

function useCraeteRoute(newDescription) {
  const useSharedCurrentRoute = () => useBetween(useCurrentDate);
const {selectedDate} = useSharedCurrentRoute;

  const [startAddress, setStartAddress] = useState();
  const [destinationAddress, setDestinationAddress] = useState();
  const [addressesList, setAddressList] = useState();
  const [viewDescription, setviewDescription] = useState("start");
  const [viewCount, setViewCount] = useState(0);
  const [distance, setDistance] = useInputState("");
  const [isDistance, setIsDistance] = useState(false);
  const [selectedStartAddressCard, setSelectedStartAddressCard] = useState();
  const [selectedDestinationAddressCard, setSelectedDestinationAddressCard] =
    useState();
    const[showCreateRouteView, setShowCreateRouteView] = useState();

  

  const distanceInputRef = useRef();
  const okBtnRef = useRef();
  const startAddressRef = useRef();

  useEffect(() => {
    async function fetchData() {
      const list = await getAllAddress();
      if (list) {
        setAddressList(await list);
      }
    }
    fetchData();
  }, []);

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
    console.log(viewDescription);
    if (viewDescription === "destination") {
      console.log(selectedStartAddressCard.target.style.backgroundColor);
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
      console.log(startAddress);
      startAddressRef.current.style.backgroundColor = "black";
    }
  }, [startAddress]);

  useEffect(() => {
    if (okBtnRef.current) {
      if (viewDescription === "start") {
        if (!startAddress) {
          console.log(startAddress);
          okBtnRef.current.disabled = true;
          console.log("2");
        } else {
          console.log("3");
          okBtnRef.current.disabled = false;
        }
      }
    }
    if (viewDescription === "destination") {
      console.log(viewDescription);

      if (!destinationAddress) {
        okBtnRef.current.disabled = true;
      } else {
        if (
          destinationAddress &&
          startAddress &&
          startAddress.add_id === destinationAddress.add_id
        ) {
          console.log("gleiche add");
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
        date: selectedDate
      };
      insertRoute(newRoute);
      setShowCreateRouteView(false);
    }
  };

  const backBtn = () => {
    if ( viewDescription === "start") {
      setShowCreateRouteView(false);
      viewBackwards();
    }
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
    setShowCreateRouteView
  };
}
export default useCraeteRoute;
