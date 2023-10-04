import { useState, useEffect } from "react";
import { getAllAddress } from "../Database/database";
import { makeObservable} from "../asserts/observable"

function useCraeteRoute(newDescription) {
  const [startAddress, setStartAddress] = useState();
  const [destinationAddress, setDestinationAddress] = useState();
  const [addressesList, setAddressList] = useState();
  const [description, setDescription] = useState("start");

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

  // useEffect(() => {  
  //   console.log(description);
    
  //   returnD();
  // }, [description]);

  const returnD = () => {
    return description
  }


  const toggleDescription = () => {
    setDescription( description === "start" ? "destination" : "start");
  };

  return {
    returnD,
    addressesList,
    description,
    toggleDescription,
    startAddress,
    setStartAddress,
    destinationAddress,
    setDestinationAddress,
  };
}
export default useCraeteRoute;
