import { useEffect, useState } from "react";

function useMainView() {
  const [showMassage, setShowMassage] = useState(false);
  const [massageContent, setMassageContent] = useState("");
  const [saveAfterMassage, setSaveAfterMassage] = useState(false);
  return {
    showMassage,
    setShowMassage,
    massageContent,
    setMassageContent,
    saveAfterMassage,
    setSaveAfterMassage,
  };
}

export default useMainView;
