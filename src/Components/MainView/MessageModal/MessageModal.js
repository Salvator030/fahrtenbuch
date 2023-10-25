import { Button, Checkbox, Grid, Modal, Text } from "@mantine/core";
import { useState } from "react";
import { useBetween } from "use-between";
import useDatabases from "../../../hooks/databaseHook";
import useMainView from "../../../hooks/mainViewHook";
import useCraeteRoute from "../../../hooks/createRouteHook";
function MessageModal({ opened, msgContent }) {
  const useSharedDatabases = () => useBetween(useDatabases);
  const {
    persistDrivenRoute,
    deleteSelectedDayRouteById,
    deleteDrivenRouteByRoute,
    deleteSelectedRoute,
    setSelectedRouteHideInRouteTblTrue,
    setAddressHideById,
    deleteAddressByIdAndHandelDbConsistent,
  } = useSharedDatabases();

  const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  const { startAddress,setStartAddress, destinationAddress, setDestinationAddress } = useSharedCreateRoute();

  const useSharedMainView = () => useBetween(useMainView);
  const { setShowMassage, setSaveAfterMassage } = useSharedMainView();

  const [checked, setChecked] = useState(false);
  const [checkedAdd, setCheckedAdd] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const toggleCheckedAdd = () => {
    setCheckedAdd(!checkedAdd);
  };

  const handelnOnClickOkBtn = () => {
    switch (msgContent) {
      case "routeIsSetInDay": {
        persistDrivenRoute();

        break;
      }
      case "deleteRouteWarning": {
        if (checked) {
          deleteDrivenRouteByRoute();
          deleteSelectedRoute();
        } else {
          setSelectedRouteHideInRouteTblTrue(1);
        }
        break;
      }

      case "deleteAddressWarning": {
        if (checkedAdd) { 
          if (!destinationAddress) {
            deleteAddressByIdAndHandelDbConsistent(startAddress.add_id);
            setStartAddress();
          } else {
            deleteAddressByIdAndHandelDbConsistent(destinationAddress.add_id);
            setDestinationAddress();
          }
          setCheckedAdd(false);
        }else{
          if (!destinationAddress) {
      
            setAddressHideById(startAddress.add_id, 1);
            setStartAddress();
          } else {
            setAddressHideById(destinationAddress.add_id, 1);
            setDestinationAddress();
          }
        }
        break;
      }
      case "routeExistButHide": {
        break;
      }
      default: {
      }
    }
    setShowMassage(false);
  };

  const handelOnClickCancelBtn = () => {
    setShowMassage(false);
  };

  return (
    <Modal
      opened={opened}
      withCloseButton={false}
      closeOnClickOutside={false}
      title="INFO"
    >
      {msgContent === "routeIsSetInDay" && (
        <Text>
          Diese Strecke ist bereits vorhanden, dennoch dem Tag hinzufügen?
        </Text>
      )}
      {msgContent === "routeExist" && (
        <Text>Diese Strecke existiert bereits</Text>
      )}
      {msgContent === "routeExistButHide" && (
        <>
          {" "}
          <Text>Diese Strecke existiert bereits</Text>
          <Text>Wird aber ausgeblendet!</Text>
        </>
      )}

      {msgContent === "addressNameIsExisting" && (
        <Text>Eine Addresse mit diesem Namen ist bereits vorhanden</Text>
      )}
      {msgContent === "deleteRouteWarning" && (
        <>
          <Text>Soll die Strecke komplet gelöscht werden?</Text>
          <Text>!!! Wird nicht empfohlen !!!</Text>
          <Checkbox
            value={checked}
            onChange={toggleChecked}
            label="Strecke komplet Löschen"
          />
          <Text>!!! Wenn die Strecke komplet gelöscht wird,</Text>
          <Text> wird die Strecke auch aus den Tagen gelöscht !!!</Text>
        </>
      )}
      {msgContent === "deleteAddressWarning" && (
        <>
          {" "}
          <Text>Soll die Addresse komplet gelöscht werden?</Text>
          <Text>!!! Wird nicht empfohlen !!!</Text>
          <Checkbox
            value={checkedAdd}
            onChange={toggleCheckedAdd}
            label="Addresse komplet Löschen"
          />
          <Text>!!! Wenn die Addresse komplet gelöscht wird,</Text>
          <Text> werden auch alle Strecken mit der Addresse gelöscht !!!</Text>
        </>
      )}
      <Grid>
        <Grid.Col span={2}>
          {msgContent !== "addressNameIsExisting" &&
            msgContent !== "routeExistButHide" && (
              <Button onClick={handelnOnClickOkBtn}>OK</Button>
            )}
        </Grid.Col>
        <Grid.Col span={2}>
          <Button onClick={handelOnClickCancelBtn}>Abbrechen</Button>
        </Grid.Col>
      </Grid>
    </Modal>
  );
}

export default MessageModal;
