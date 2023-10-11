import React, { useEffect, useState } from "react";
import {getAllRoutes} from "../database/database"

function useAddRoute (){

    const [routesList, setRoutesList] = useState();
    const [isNewRoute, setIsNewRoute] = useState();
    
    useEffect(() => {
        async function fetchData(){
     
            const list = await getAllRoutes();
            if (list){
                setRoutesList(list);
                  setIsNewRoute(false)     }  
        }
        fetchData();
     
    },[isNewRoute])

    return{routesList, setIsNewRoute}
}


export default useAddRoute;