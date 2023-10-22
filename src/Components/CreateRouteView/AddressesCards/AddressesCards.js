import { Box, ScrollArea } from "@mantine/core";
import React, { useState, useEffect } from "react";
import Item from "./Item";
import { useBetween } from "use-between";
import useDatabases from "../../../hooks/databaseHook";
import useCraeteRoute from "../../../hooks/createRouteHook";
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
  const { addressesList } = useSharedDatabases();

  const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  const { showHideAddress } = useSharedCreateRoute();
  const [cardList, setCardList] = useState();

  useEffect(() => {
    if (addressesList) {
      let list;
      if (showHideAddress) {
        list = addressesList;
      } else {
        list = addressesList.filter((address) => address.hide === 0);
      }
      const items = list.map(
        (address) => address && <Item address={address} key={address.add_id} />
      );

      setCardList(items);
    }
  }, [addressesList, showHideAddress]);

  return (
    <>
      <ScrollArea w={400} h={700} type="always">
        <Box w={400}>{cardList}</Box>
      </ScrollArea>
    </>
  );
}

export default AddressesCards;
