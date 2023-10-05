import { useState, useEffect } from "react";
import { getAllAddress } from "../Database/database";

function useCraeteRoute(newDescription) {
  const [startAddress, setStartAddress] = useState();
  const [destinationAddress, setDestinationAddress] = useState();
  const [addressesList, setAddressList] = useState();
  const [addressDescription, setAddressDescription] = useState("start");

  useEffect(() => {
    async function fetchData() {
      const list = await getAllAddress();
      console.log(list);
      if (list) {
        setAddressList(await list);
        console.log(addressesList);
      }
      console.log(addressesList);
    }
    fetchData();
  }, []);

  const toggleAddressDescription = () => {
    setAddressDescription(addressesList === "start" ? "destination" : "start");
  };

  return {
    addressesList,
    addressDescription,
    toggleAddressDescription,
    startAddress,
    setStartAddress,
    destinationAddress,
    setDestinationAddress,
  };
}
export default useCraeteRoute;
