import { Button, Select, Table, Title } from "@mantine/core";
import { useState, useRef } from "react";
import "@mantine/core/styles.css";
import { getAddressList } from "../../Database/databaseHandler";

 let list = await getAddressList();
export function CreateRouteView() {
console.log(list);
  const [addressList, setAddressList] = useState( list);
const table = [<Table><Table.Th>Test</Table.Th></Table>]


  async function onClick() {
    console.log(addressList);
  }
  return (
    <>
      <Button onClick={onClick}>click</Button>
      <Title order={1}>Start</Title>
      <Select
        label="Start Addresse"
        placeholder="Bitte wählen"
        data={[addressList[1].name]}
 
      />
    </>
  );
}
