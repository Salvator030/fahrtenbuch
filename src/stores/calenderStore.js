import {useEffect, useState} from 'react';
import {useBetween} from 'use-between';
import useDatabase from './databaseStore';

export default function useCalender() {
  const date = new Date();
  const [selectedDate, setSelectedDate] = useState(date);
  const [selectedMonth, setSelectedMonth] = useState(
    new Date(date.getFullYear(), date.getMonth(), 1),
  );
  const [drivenRoutesByDate, setDrivenRoutesByDate] = useState([]);
  const [drivenRoutesByMonth, setDrivenRoutesByMonth] = useState([]);
  const useShareDatabase = () => useBetween(useDatabase);
  const {drivenRoutes, getFullAddressById} = useShareDatabase();

  useEffect(() => {
    let items = drivenRoutes.filter(
      route => route.date === Date.parse(selectedDate),
    );
    console.log('items ', items);
    setDrivenRoutesByDate(items);
  }, [drivenRoutes, selectedDate]);

  useEffect(() => {
    let monthEnd = new Date(
      selectedMonth.getFullYear(),
      selectedMonth.getMonth() + 1,
      0,
    );

    let items = drivenRoutes.filter(
      route =>
        route.date >= Date.parse(selectedMonth) &&
        route.date <= Date.parse(monthEnd),
    );
    items = items.map(item => {
      return {date: new Date(item.date), style: {backgroundColor: 'red'}};
    });
    console.log(items);
    setDrivenRoutesByMonth(items);
  }, [selectedMonth, drivenRoutes]);

  const changeSelectedDate = date => {
    setSelectedDate(date);
  };

  const handelMonthChange = date => {
    console.log(date);

    setSelectedMonth(new Date(date._d.getFullYear(), date._d.getMonth(), 1));
  };
  return {
    selectedDate,
    changeSelectedDate,
    drivenRoutesByDate,
    drivenRoutesByMonth,
    handelMonthChange,
  };
}
