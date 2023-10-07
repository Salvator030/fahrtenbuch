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

  useEffect(() => {
    setviewDescription(discriptionList[viewCount]);
  }, [viewCount]);

  const discriptionList = ["start", "destination", "distance", "save"];

  const viewForwards = () => {
    console.log(viewCount);
    if (viewCount !== 3) {
      setViewCount(viewCount + 1);
    }
    console.log(viewCount);
  };

  const viewBackwards = () => {
    console.log(viewCount);
    if (viewCount !== 0) {
      setViewCount(viewCount - 1);

      console.log(viewCount);
    }
  };

  useEffect(() => {
    if (okBtnRef.current) {
      console.log(okBtnRef.current);
      if (viewDescription === "start") {
        if (!destinationAddress) {
          okBtnRef.current.disabled = true;
        } else {
          okBtnRef.current.disabled = false;
        }
      }
    }
    if (viewDescription === "destination") {
      if (!destinationAddress) {
        okBtnRef.current.disabled = true;
      }
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
    if (viewDescription === "distance") {
      console.log("distance" + distance.length)
      if (distance.length === 0) {
        okBtnRef.current.disabled = true;
      } else {
        okBtnRef.current.disabled = false;
      }
    }
    console.log(okBtnRef);
  }, [viewDescription,destinationAddress, distance]);
  const okBtn = () => {
    console.log(okBtnRef);
    console.log(distanceInputRef);
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
