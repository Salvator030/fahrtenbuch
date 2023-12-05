import React, {useEffect, useState} from 'react';
import {useBetween} from 'use-between';
import useDatabase from '../stores/databaseStore';
import DrivenRoutesCards from '../Components/DateView/CurrentDayRoutes/DrivenRoutesCards/DrivenRoutesCards';
import {View, Text} from 'react-native';

export default function useCurrentDayRoutes() {
  const useShareDatabase = () => useBetween(useDatabase);
  const {drivenRoutes} = useShareDatabase();

  const [drivenRoutesCards, setDrivenRoutesCards] = useState([]);

  useEffect(() => {
    console.log('useCurrentDayRoutes', drivenRoutes);
    let cards = drivenRoutes.map(route => (
      <DrivenRoutesCards key={route.dRoute_id} drivenRoute={route} />
    ));

    console.log('cards', cards.length);
    setDrivenRoutesCards(cards);
  }, [drivenRoutes]);

  console.log('d', drivenRoutesCards.length);
  return {drivenRoutesCards};
}
