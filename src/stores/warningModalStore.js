import {useEffect, useState} from 'react';
import {useBetween} from 'use-between';
import useDatabase from './databaseStore';
import useMainView from './MainViewStore';
import useFileHandler from './fileHandlerStore';

export default function useWarningModal() {
  const useShareDatabase = () => useBetween(useDatabase);
  const {
    deleteRoute,
    deleteDrivenRoute,
    setRouteHide,
    deleteAddress,
    setAddressHide,
  } = useShareDatabase();

  const useShareMainView = () => useBetween(useMainView);
  const {toggleShowWarning} = useShareMainView();

  const useSharedFileHandler = () => useBetween(useFileHandler);
  const {path} = useSharedFileHandler();

  const [selectedRouteWarning, setSelectedRouteWarning] = useState(0);
  const [selectedAddressesWarning, setSelectedAddressesWarning] = useState(0);
  const [selectedDrivenRouteWarning, setSelectedDrivenRouteWarning] =
    useState(0);

  const [warningDescription, setWarningDescription] = useState('');
  const [warningContent, setWarningContent] = useState('');
  const [deleteCheckboxValue, setDeleteCheckboxValue] = useState(false);

  const openDeleteDrivenRouteWarning = drivenRoute => {
    setSelectedDrivenRouteWarning(drivenRoute);
    setWarningDescription('deleteDrivenRoute');
    toggleShowWarning();
  };

  const openWarning = warn => {
    setWarningDescription(warn);
    toggleShowWarning();
  };

  const handelOnClickOkBtn = () => {
    if (warningDescription === 'deleteRoute') {
      if (deleteCheckboxValue) {
        deleteRoute(selectedRouteWarning);
      } else {
        setRouteHide(selectedRouteWarning, 1);
      }
    } else if (warningDescription === 'deleteDrivenRoute') {
      deleteDrivenRoute(selectedDrivenRouteWarning);
    } else {
      if (deleteCheckboxValue) {
        deleteAddress(selectedAddressesWarning);
      } else {
        setAddressHide(selectedAddressesWarning, 1);
      }
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
      case 'deleteDrivenRoute': {
        text = 'Gefahrene Strecke löschen? ';
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

      case 'routeExist': {
        text =
          'Diese Strecke exestiert berits.\n' +
          'Bitte einen anderen Start oder Zielort wählen, \n' +
          'oder die vorhandene strecke bearbeiten.';

        break;
      }

      case 'addressExist': {
        text =
          'Eine Adresse mit diesem namen exestiert berits.\n' +
          'Bitte einen anderen Namen wählen, \n' +
          'oder die vorhandene Adresse bearbeiten.';

        break;
      }
      case 'printRoutes': {
        text = 'Die Datei wurde gespeichert unter.\n\n' + `${path}`;

        break;
      }

      default: {
        text = '';
      }
    }
    setWarningContent(text);
  }, [path, warningDescription]);

  return {
    warningDescription,
    setWarningDescription,
    warningContent,
    setSelectedRouteWarning,
    setSelectedAddressesWarning,
    deleteCheckboxValue,
    setDeleteCheckboxValue,
    handelOnClickBackBtn,
    handelOnClickOkBtn,
    openDeleteDrivenRouteWarning,
    openWarning,
  };
}
