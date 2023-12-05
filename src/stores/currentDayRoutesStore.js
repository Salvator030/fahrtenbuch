import React, {useEffect, useState} from 'react';
import {useBetween} from 'use-between';
import useDatabase from '../stores/databaseStore';
import DrivenRoutesCards from '../Components/DateView/CurrentDayRoutes/DrivenRoutesCards/DrivenRoutesCards';
import {View, Text} from 'react-native';
import useCalender from './calenderStore';

export default function useCurrentDayRoutes() {
  const useShareDatabase = () => useBetween(useDatabase);
  const {drivenRoutes} = useShareDatabase();
  const useShareCalendar = () => useBetween(useCalender);
  const {selectedDate} = useShareCalendar();

  const [drivenRoutesCards, setDrivenRoutesCards] = useState([]);

  useEffect(() => {
    console.log('selectedDate', selectedDate);
    let list = drivenRoutes;
    list = list.filter(
      route =>
        route.date ===
        `${selectedDate.getDate()}.${selectedDate.getMonth()}.${selectedDate.getFullYear()}`,
    );
    let cards = list.map(route => (
      <DrivenRoutesCards key={route.dRoute_id} drivenRoute={route} />
    ));

    console.log('cards', cards.length);
    setDrivenRoutesCards(cards);
  }, [drivenRoutes, selectedDate]);

  console.log('d', drivenRoutesCards.length);
  return {drivenRoutesCards};
}
