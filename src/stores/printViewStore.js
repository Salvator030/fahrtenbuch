import {useState} from 'react';
import {useBetween} from 'use-between';
import useDatabase from './databaseStore';
import useMainView from './MainViewStore';
import useFileHandler from './fileHandlerStore';
import {Text} from 'react-native';
import {parseToCsvString} from '../asserts/outputCsvHelper';
import {parseDateForFileName} from '../asserts/dateHelper';

export default function usePrintView() {
  const useShareDatabase = () => useBetween(useDatabase);
  const {getDrivenRoutesBetweenDates} = useShareDatabase();
  const useShareMainView = () => useBetween(useMainView);
  const {createNewRoute, showWarningModal, printView, togglePrintView} =
    useShareMainView();

  const {createFile} = useFileHandler();

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [fileData, setFileData] = useState(null);
  const [printName, setPrintName] = useState(true);
  const [printFullAddress, setPrintFullAddress] = useState(false);

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    }
  };

  const handelOnClickBackBtn = () => {
    togglePrintView();
  };

  const onClickOkBtn = async () => {
    let res = await getDrivenRoutesBetweenDates(
      selectedStartDate,
      selectedEndDate,
    );
    const csvStringtr = parseToCsvString(res, printName, printFullAddress);
    setFileData(<Text>{csvStringtr}</Text>);

    createFile(
      csvStringtr,
      parseDateForFileName(selectedStartDate, selectedEndDate),
    );
  };

  return {
    selectedStartDate,
    selectedEndDate,
    fileData,
    onDateChange,
    onClickOkBtn,
    handelOnClickBackBtn,
    printFullAddress,
    setPrintFullAddress,
    printName,
    setPrintName,
  };
}
