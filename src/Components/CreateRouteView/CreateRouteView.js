import {
  Box,
  Button,
  Card,
  Grid,
  ScrollArea,
  Select,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { useState, useRef } from "react";
import "@mantine/core/styles.css";
import { getAddressList } from "../../Database/databaseHandler";

let list = await getAddressList();
export function CreateRouteView() {
  console.log(list);
  const [addressList, setAddressList] = useState(list);
  const table = [
    <Table>
      <Table.Th>Test</Table.Th>
    </Table>,
  ];
 

  const Rows = addressList.map((address) => (
    <Table.Tr key={address.name}>
      <Table.Td>{address.name}</Table.Td>
      <Table.Td>{address.street}</Table.Td>
      <Table.Td>{address.hnr}</Table.Td>
      <Table.Td>{address.plz}</Table.Td>
      <Table.Td>{address.place}</Table.Td>
      <Table.Td>{address.info}</Table.Td>
    </Table.Tr>
  ));

  async function onClick() {
    console.log(addressList);
  }
  return (
    <>
      <Button onClick={onClick}>click</Button>
      <Table >
      <Table.Tr >
            <Table.Th>Name</Table.Th>
            <Table.Th>Starße</Table.Th>
            <Table.Th>Hnr</Table.Th>
            <Table.Th>PLZ</Table.Th>
            <Table.Th>Ort</Table.Th>
            <Table.Th>Info</Table.Th>
            </Table.Tr></Table>
      <Table.ScrollContainer minWidth={500} h={300} >
        <Table  highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Starße</Table.Th>
            <Table.Th>Hnr</Table.Th>
            <Table.Th>PLZ</Table.Th>
            <Table.Th>Ort</Table.Th>
            <Table.Th>Info</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{Rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </>
  );
}
