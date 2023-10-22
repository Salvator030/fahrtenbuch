import { useState, useEffect, useRef } from "react";
import { useInputState } from "@mantine/hooks";
import { useBetween } from "use-between";
import { getAllAddress, insertRoute } from "../database/database";
import useDatabases from "./databaseHook";
import useCurrentDate from "./currentDateHook";
import useMainView from "./mainViewHook";
import { checkDistanceInput } from "../asserts/helper";

function useCraeteRoute() {
  const useSharedCurrentRoute = () => useBetween(useCurrentDate);
  const useSharedDatabases = () => useBetween(useDatabases);
  const useSharedMainView = () => useBetween(useMainView);

  const { selectedDate } = useSharedCurrentRoute();
  const { routesList, setIsNewRoute, persistRoute, setRouteHide } = useSharedDatabases();
  const { setMassageContent, setShowMassage } = useSharedMainView();

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
  const [showCreateRouteView, setShowCreateRouteView] = useState(false);
  const [showHideAddress, setShowHideAddress] = useState(false);

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

  useEffect(() => {}, [selectedDate]);

  const trashBtn = () => {
    setMassageContent("deleteAddressWarning");
    setShowMassage(true);
  };

  const eyeIcon = () => {
    setShowHideAddress(!showHideAddress);
  }

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
        startAdd_id: startAddress.add_id,
        destAdd_id: destinationAddress.add_id,
        distance: parseFloat(distance.replace(",", ".")),
        // date: `${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDate()}`
      };

      let route = routesList.find(
        (route) =>
          (route.startAdd_id === newRoute.startAdd_id) &
          (route.destAdd_id === newRoute.destAdd_id)
      );

      if (!route) {
        persistRoute(newRoute);
        setIsNewRoute(true);
        setShowCreateRouteView(false);
      } else {
        if (route.hide === 1) {
          setMassageContent("routeExistButHide");
        } else {
          setMassageContent("routeExist");
        }
        setShowMassage(true);
      }
      setStartAddress();
      setDestinationAddress();
      setDistance("");
      setViewCount(0);
    }
  };

  const backBtn = () => {
    if (viewDescription === "start") {
      setShowCreateRouteView(false);
    } else {
      viewBackwards();
    }
  };

  return {
    eyeIcon,
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
    setIsNewAddress,
    trashBtn,
    showHideAddress, setShowHideAddress
  };
}
export default useCraeteRoute;
