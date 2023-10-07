import { Button, Input, TextInput } from "@mantine/core";
import useCraeteRoute from "../../../hooks/createRouteHook";
import { useBetween } from "use-between";
import { useState, useRef } from "react";
export function DistanceInput() {
  const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  const { distance, setDistance, distanceInputRef } = useSharedCreateRoute();



  return (
    
    <TextInput
        ref={distanceInputRef}
        placeholder="Entfernng in"
        value={distance}
        onChange={setDistance}
        max={255}
      />
    
  );
} 
