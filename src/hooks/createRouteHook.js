import { useState, useEffect, useRef } from "react";
import { useInputState } from "@mantine/hooks";
import { getAllAddress } from "../Database/database";

import { checkDistanceInput } from "../asserts/helper";

function useCraeteRoute(newDescription) {
  const [startAddress, setStartAddress] = useState();
  const [destinationAddress, setDestinationAddress] = useState();
  const [addressesList, setAddressList] = useState();
  const [viewDescription, setviewDescription] = useState("start");
  const [viewCount, setViewCount] = useState(0);
  const [distance, setDistance] = useInputState("");
  const [isDistance, setIsDistance] = useState(false);

  const distanceInputRef = useRef();
  const okBtnRef = useRef();

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

  }, [viewCount,]);

 

  const viewForwards = () => {
    if (viewCount !== 3) {
      setViewCount(viewCount + 1);
      
    }
  };

  const viewBackwards = () => {
    if (viewDescription === "destination"){setStartAddress(undefined)};
    if (viewDescription === "distance"){setDestinationAddress(undefined);setDistance("")};
    if (viewDescription === "save"){setDistance("")};
    if (viewCount !== 0) {
      setViewCount(viewCount - 1);
    }
  };

  useEffect(() => {
    console.log(okBtnRef)
    if (okBtnRef.current) {
 
      if (viewDescription === "start") {
        console.log("1")  
        if (!startAddress) {
         okBtnRef.current.disabled = true; 
         console.log("2")
        } else {
          console.log("3")
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

      if (distance.length === 0) {
        okBtnRef.current.disabled = true;
      } else {
        okBtnRef.current.disabled = false;
      }
    }
    }, [viewDescription,startAddress, destinationAddress, distance]);
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
  };

  return {
    okBtn,
    okBtnRef,
    addressesList,
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
  };
}
export default useCraeteRoute;
