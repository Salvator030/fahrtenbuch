import {useState} from 'react';
import {useBetween} from 'use-between';
import useDatabase from './databaseStore';
import useMainView from './MainViewStore';
import useFileHandler from './fileHandlerStore';
import {Text} from 'react-native';
import {parseToCsvString} from '../asserts/outputCsvHelper';

export default function useCreateFile() {
  const useShareDatabase = () => useBetween(useDatabase);
  const {getDrivenRoutesBetweenDates} = useShareDatabase();
  const useShareMainView = () => useBetween(useMainView);
  const {createNewRoute, showWarningModal, printView, togglePrintView} =
    useShareMainView();

  const {createFile} = useFileHandler();

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [fileData, setFileData] = useState(<Text>'sdfsdf'</Text>);

  const onDateChange = (date, type) => {
    console.log(date + ' ' + type);
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
    console.log(selectedStartDate + ' ' + selectedEndDate);
    let res = await getDrivenRoutesBetweenDates(
      selectedStartDate,
      selectedEndDate,
    );
    const csvStringtr = parseToCsvString(res);
    setFileData(<Text>{csvStringtr}</Text>);
    createFile(csvStringtr);
  };

  return {
    selectedStartDate,
    selectedEndDate,
    fileData,
    onDateChange,
    onClickOkBtn,
    handelOnClickBackBtn,
  };
}
