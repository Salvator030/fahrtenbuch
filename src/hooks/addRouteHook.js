import React, { useEffect, useState } from "react";
import {getAllRoutes} from "../database/database"

function useAddRoute (){

    const [routesList, setRoutesList] = useState();
    
    useEffect(() => {
        async function fetchData(){
            const list = await getAllRoutes();
            if (list){
                setRoutesList(list);
            }
        }
        fetchData();
    },[])

    return{routesList}
}


export default useAddRoute;