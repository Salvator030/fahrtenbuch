import { Box, ScrollArea } from "@mantine/core";
import React, { useState, useEffect } from "react";
import Item from "./Item";
import { useBetween } from "use-between";
import useDatabases from "../../../hooks/databaseHook";
import useCraeteRoute from "../../../hooks/createRouteHook";
import { sortByAlphAscending } from "../../../asserts/helper";
// import Card from "./Card";

function AddressesCards() {
  const a = {
    name: "abc",
    street: "street",
    hnr: "12",
    plz: "12345",
    place: "place",
  };
  const useSharedDatabases = () => useBetween(useDatabases);
  const { addressesList, isNewAddress, setIsNewAddress } = useSharedDatabases();

  const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  const { showHideAddress, searchAddValue } = useSharedCreateRoute();
  const [cardList, setCardList] = useState();

  useEffect(() => {
    if (addressesList) {
      let list;
      if (showHideAddress) {
        list = addressesList;
      } else {
        list = addressesList.filter((address) => address.hide === 0);
      }

      list.sort((a, b) => sortByAlphAscending(a.name, b.name));
      list = list.filter((a) => a.name.toLowerCase().startsWith(searchAddValue.toLowerCase()));
      const items = list.map(
        (address) => address && <Item address={address} key={address.add_id} />
      );
   

      setCardList(items);
    }
  }, [addressesList, isNewAddress, showHideAddress, searchAddValue]);

  return (
    <>
      <ScrollArea w={400} h={700} type="always">
        <Box w={400}>{cardList}</Box>
      </ScrollArea>
    </>
  );
}

export default AddressesCards;
