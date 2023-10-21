import { Button, Checkbox, Grid, Modal, Text } from "@mantine/core";
import { useState } from "react";
import { useBetween } from "use-between";
import useDatabases from "../../../hooks/databaseHook";
import useMainView from "../../../hooks/mainViewHook";
function MessageModal({ opened, msgContent }) {
  const useSharedDatabases = () => useBetween(useDatabases);
  const {
    persistDrivenRoute,
    deleteSelectedDayRouteById,
    deleteDrivenRouteByRoute,
    deleteSelectedRoute,
    setSelectedRouteHideInRouteTblTrue,
  } = useSharedDatabases();

  const useSharedMainView = () => useBetween(useMainView);
  const { setShowMassage, setSaveAfterMassage } = useSharedMainView();

  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const handelnOnClickOkBtn = () => {
    switch (msgContent) {
      case "routeIsSetInDay": {
        persistDrivenRoute();
        setShowMassage(false);
        break;
      }
      case "deleteRouteWarning": {
        if (checked) {
          deleteDrivenRouteByRoute();
          deleteSelectedRoute();
          setShowMassage(false);
        } else {
          setSelectedRouteHideInRouteTblTrue();
          setShowMassage(false);
        }
      }
      default: {
      }
    }
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
      {msgContent === "route exist" && (
        <Text>Diese Strecke existiert bereits</Text>
      )}
      {msgContent === "addressNameIsExisting" && (
        <Text>Eine Addresse mit diesem Namen ist bereits vorhanden</Text>
      )}
      {msgContent === "deleteRouteWarning" && (
        <>
          <Text>Soll die Strecke komplet gelöscht werden?</Text>
          <Checkbox
            value={checked}
            onChange={toggleChecked}
            label="Strecke komplet Löschen"
          />
          <Text>!!! Wenn die Strecke komplet gelöscht wird,</Text>
          <Text> wird die Strecke auch aus den Tagen gelöscht !!!</Text>
        </>
      )}
      <Grid>
        <Grid.Col span={2}>
          {(msgContent === "routeIsSetInDay") |
            (msgContent === "deleteRouteWarning") && (
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
