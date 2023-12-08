import {useEffect, useState} from 'react';
import {useBetween} from 'use-between';
import useDatabase from './databaseStore';
import useAvailableRoutes from './availableRoutesStor';

export default function useWarningModal() {
  const useShareDatabase = () => useBetween(useDatabase);
  const {deleteRoute, setRouteHide} = useShareDatabase();

  const useShareAvailableRoutes = () => useBetween(useAvailableRoutes);
  const {
    selectedRoute,
    setSelectedRoute,
    toggleShowWarning,
    warningDescription,
  } = useShareAvailableRoutes();

  const [warningContent, setWarningContent] = useState('');
  const [deleteCheckboxValue, setDeleteCheckboxValue] = useState(false);

  const handelOnClickOkBtn = () => {
    console.log('a');
    if (warningDescription === 'deleteRoute') {
      if (deleteCheckboxValue) {
        deleteRoute(selectedRoute);
      } else {
        setRouteHide(selectedRoute, 1);
      }
      setSelectedRoute(0);
    }
    toggleShowWarning();
  };

  const handelOnClickBackBtn = () => {
    toggleShowWarning();
  };

  useEffect(() => {
    let text = '';
    switch (warningDescription) {
      case 'deleteRoute': {
        text =
          'Achtung, beim Löschen einer Strecke wird diese auch auch aus den Tagen gelöscht, \n' +
          'dies wird nicht empfohlen.\n' +
          'Beim verbergen der Strecke wird diese nicht mehr als verfügbare Strecke gelistet,\n' +
          'bleibt aber in den gefahreren Tagesstrecke vorhanden. ';
        break;
      }

      case 'deleteAddress': {
        text =
          'Achtung, beim Löschen einer Addresse werden auch alle strecken und gefahrenden Strecken\n' +
          'mit dieser Adresse Gelöscht löscht, \n' +
          'dies wird nicht empfohlen.\n' +
          'Beim verbergen der Adresse wird diese nicht mehr beim erstellen einer Strecke gelistet,\n' +
          'die mit der dieser Addresse ersteleten Strecken bleieben weiter hin vorhanden. ';
        break;
      }
      default: {
        text = '';
      }
    }
    setWarningContent(text);
  }, [warningDescription]);

  return {
    warningDescription,
    warningContent,

    deleteCheckboxValue,
    setDeleteCheckboxValue,
    handelOnClickBackBtn,
    handelOnClickOkBtn,
  };
}
