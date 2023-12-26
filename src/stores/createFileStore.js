import {useState} from 'react';
import {useBetween} from 'use-between';
import useDatabase from './databaseStore';
import useMainView from './MainViewStore';
import {Text} from 'react-native';

export default function useCreateFile() {
  const useShareDatabase = () => useBetween(useDatabase);
  const {getDrivenRoutesBetweenDates} = useShareDatabase();
  const useShareMainView = () => useBetween(useMainView);
  const {createNewRoute, showWarningModal, printView, togglePrintView} =
    useShareMainView();

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [fileData, setFileData] = useState(<Text>'sdfsdf'</Text>);

  const onDateChange = (date, type) => {
    console.log(type);
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

  const onClickOkBtn = () => {
    console.log(
      getDrivenRoutesBetweenDates(selectedStartDate, selectedEndDate),
    );
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
