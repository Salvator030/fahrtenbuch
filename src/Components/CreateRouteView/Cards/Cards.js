import { Box, ScrollArea } from "@mantine/core";
import React, { useState, useEffect } from "react";
import Item from "./Item";
import useCraeteRoute from "../../../hooks/createRouteHook";
// import Card from "./Card";

function Cards() {
  const a = {
    name: "abc",
    street: "street",
    hnr: "12",
    plz: "12345",
    place: "place",
  };
  const { addressesList } = useCraeteRoute();

  const [cardList, setCardList] = useState();

  useEffect(() => {
 
    if (addressesList) {
      const items = addressesList.map(
        (address) =>
          address &&
          (
          (<Item address={address} key={address.add_id} />))
      );

      setCardList(items);
      console.log(cardList);

      console.log(addressesList);
      console.log(cardList);
    }
  }, [addressesList]);

  return (
    <>
      <ScrollArea w={400} h={500} type="always">
        <Box w={400}>{cardList}</Box>
      </ScrollArea>
    </>
  );
}

export default Cards;
