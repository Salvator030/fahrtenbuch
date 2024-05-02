import { useState } from "react";
import { useBetween } from "use-between";
import useAvailableRoutes from "./availableRoutesStor";
import useDatabase from "./databaseStore";

export default function useEditRouteModal () {
 
    const [editRouteModalVisible, setEdirRouteModalVisible] = useState(false);
    const [editRouteModalDiscription, setRouteModalDiscription] = useState("");
   
    const useShareDatabase = () => useBetween(useDatabase);
    const{getFullRouteById} = useShareDatabase();
 
    const useShareAvaibleRoutes = () => useBetween(useAvailableRoutes);
   const {selectedRoute} = useShareAvaibleRoutes();

   const [editRoute, setEditRoute ] = useState(selectedRoute? getFullRouteById(selectedRoute) : null);

    function toggleEditRouteModalVisible(){
        setEdirRouteModalVisible(!editRouteModalVisible);
    }
    const openEditRouteModal = () => {
        setRouteModalDiscription("editRoute");
        setEdirRouteModalVisible(true);
    }
    return {editRouteModalVisible, editRouteModalDiscription,openEditRouteModal,toggleEditRouteModalVisible, editRoute}
}