import CurrenDate from "../CurrentDate/CurrentDate";
import { CreateRouteView } from "../CreateRouteView/CreateRouteView";
import { useBetween } from "use-between";
import useCraeteRoute from "../../hooks/createRouteHook";
import AddRoute from "../AddRout/AddRoute";
export function MainView() {
  const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  const { showCreateRouteView } = useSharedCreateRoute();
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
    </>
  );
}