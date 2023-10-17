import { Button, Grid, Modal, Text } from "@mantine/core";
import { useBetween } from "use-between";
import useDatabases from "../../../hooks/databaseHook";
import useMainView from "../../../hooks/mainViewHook";
function MessageModal({ opened, msgContent }) {
  const useSharedDatabases = () => useBetween(useDatabases);
  const {persistDrivenRoute} = useSharedDatabases();

  const useSharedMainView = () => useBetween(useMainView);
  const { setShowMassage, setSaveAfterMassage} = useSharedMainView();

  const handelnOnClickOkBtn = () => {
    if (msgContent === "routeIsSetInDay"){
  
        persistDrivenRoute();
   setShowMassage(false);
    }
  }

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
        <>
          <Text>Diese Strecke ist bereits vorhanden, dennoch dem Tag hinzufügen?</Text>
        </>
      )}
      <Grid>
        <Grid.Col span={2}>
          <Button onClick={handelnOnClickOkBtn}>OK</Button>
        </Grid.Col>
        <Grid.Col span={2}>
          <Button onClick={handelOnClickCancelBtn}>Abbrechen</Button>
        </Grid.Col>
      </Grid>
    </Modal>
  );
}
export default MessageModal;
