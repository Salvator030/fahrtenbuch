import CurrenDate from "../CurrentDate/CurrentDate";
import { CreateRouteView } from "../CreateRouteView/CreateRouteView";
import { useBetween } from "use-between";
import useCraeteRoute from "../../hooks/createRouteHook";
import useMassage from "../../hooks/massageHook";
import AddRoute from "../AddRout/AddRoute";
import MessageModal from "./MessageModal/MessageModal";
import useMainView from "../../hooks/mainViewHook";
export function MainView() {
  const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  const { showCreateRouteView } = useSharedCreateRoute();
  const useSharedMainView = () => useBetween(useMainView);
  const { showMassage, massageContent } = useSharedMainView();

  return (
    <>
      {showCreateRouteView ? (
        <CreateRouteView />
      ) : (
        <>
          <CurrenDate />
          <AddRoute />
        </>
      )}
      <MessageModal opened={showMassage} msgContent={massageContent} />
    </>
  );
}
