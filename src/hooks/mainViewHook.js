import { useEffect, useState } from "react";

function useMainView() {
  const [showMassage, setShowMassage] = useState(false);

  return { showMassage, setShowMassage };
}

export default useMainView;