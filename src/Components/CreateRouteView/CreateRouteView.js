import { Button, Select, Title } from "@mantine/core";
import { useState, useRef } from "react";
import "@mantine/core/styles.css";
import { getAddressList } from "../../Database/databaseHandler";

export async function CreateRouteView() {
     const  getList =[ await getAddressList()];
  const [addressList, setAddressList] = useState(getList);
  



    async function onClick(){
         console.log(   await  getAddressList()    );
    }
  return (
    <>
    <Button onClick={onClick}>click</Button>
      <Title order={1}>Start</Title>
      <Select
        label="Start Addresse"
        placeholder="Bitte wählen"
        data={addressList}
      />
    </>
  );
}
