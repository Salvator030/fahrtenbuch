import { Box, ScrollArea } from "@mantine/core";
import React, { useState, useEffect } from "react";
import Item from "./Item";
import { useBetween } from "use-between";
import useDatabases from "../../../hooks/databaseHook";
// import Card from "./Card";

function AddressesCards() {
  const a = {
    name: "abc",
    street: "street",
    hnr: "12",
    plz: "12345",
    place: "place",
  };
  const useSharedDatabases = useBetween(useDatabases)
  const { addressesList } = useSharedDatabases();
  const [cardList, setCardList] = useState();
  

  useEffect(() => {
    if (addressesList) {
      const items = addressesList.map(
        (address) => address && <Item address={address} key={address.add_id} />
      );

      setCardList(items);
    }
  }, [addressesList]);

  return (
    <>
      <ScrollArea w={400} h={700} type="always">
        <Box w={400}>{cardList}</Box>
      </ScrollArea>
    </>
  );
}

export default AddressesCards;
