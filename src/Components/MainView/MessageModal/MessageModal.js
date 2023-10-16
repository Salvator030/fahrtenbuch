import { Button, Grid, Modal } from "@mantine/core";
import { useBetween } from "use-between";
import useMassage from "../../../hooks/massageHook";
function MessageModal({opened}){
    const useSharedMassage = () => useBetween(useMassage);
    const { showMassage, content } = useSharedMassage();

    return (
        <Modal 
        opened={opened}
        withCloseButton={false}
        closeOnClickOutside={false}
        title="INFO"
      >
        {content}
        <Grid>
          <Grid.Col span={2}>
            <Button>OK</Button>
          </Grid.Col>
          <Grid.Col span={2}>
            <Button>Abbrechen</Button>
          </Grid.Col>
        </Grid>
      </Modal>
    )
}
export default MessageModal;