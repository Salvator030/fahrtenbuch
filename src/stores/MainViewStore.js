import React, {useState} from 'react';
export default function useMainView() {
  const [createNewRoute, setCreateNewRoute] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [printView, setPrintView] = useState(false);
  const toggleShowWarning = () => {
    setShowWarningModal(!showWarningModal);
  };

  const toggleCreateNewRoute = () => {
    setCreateNewRoute(!createNewRoute);
  };

  const togglePrintView = () => {
    setPrintView(!printView);
  };
  const handelOnCLickNewRouteBtn = () => toggleCreateNewRoute();

  return {
    createNewRoute,
    toggleCreateNewRoute,
    handelOnCLickNewRouteBtn,
    showWarningModal,
    toggleShowWarning,
    printView,
    togglePrintView,
  };
}
