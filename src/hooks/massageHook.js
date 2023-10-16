import { useEffect, useState } from "react";
import { Button, Text } from "@mantine/core";
import { useBetween } from "use-between";
import useDatabases from "./databaseHook";

function useMassage() {

    // const useSharedDatabases = () => useBetween(useDatabases);
    // const {persistDrivenRoute} = useSharedDatabases();


 
  const [saveAfterMassage, setSaveAfterMassage] = useState(false);
  const [content, setContent] = useState(<></>);
  const [massageContent, setMassageContent] = useState("");

  useEffect(() => {
    switch (massageContent) {
      case "routeIsSetInDay": {
        setContent(
          <>
            <Text>Strecke ist im Tag bereits vorhanden,</Text>
            <Text>nochmals hinzufügen?</Text>
          </>
        );
        break;
      }
      default: {
      }
    }
  }, [massageContent]);

  const okBtn = () => {
    switch (massageContent) {
      case "routeIsSetInDay": {
        setSaveAfterMassage(true);
        // persistDrivenRoute();

        break;
      }
      default: {
      }
    }
  };

  return {

    saveAfterMassage,
    setSaveAfterMassage,
    content,
    setMassageContent,
  };
}

export default useMassage;
