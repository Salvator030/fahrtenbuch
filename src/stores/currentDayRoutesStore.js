import React, {useEffect, useState} from 'react';
import {useBetween} from 'use-between';
import useDatabase from '../stores/databaseStore';
import DrivenRoutesCards from '../Components/DateView/CurrentDayRoutes/DrivenRoutesCards/DrivenRoutesCards';
import {View, Text} from 'react-native';
import useCalender from './calenderStore';
import {sortDrivenRouteByLogicalOrder} from '../asserts/sortHelper';

export default function useCurrentDayRoutes() {
  const useShareDatabase = () => useBetween(useDatabase);
  const {drivenRoutes, getFullAddressById, getFullRouteById} =
    useShareDatabase();
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
    list.sort((a, b) => {
      const routeA = [
        getFullAddressById(getFullRouteById(a.route_id).startAdd_id),
        getFullAddressById(getFullRouteById(a.route_id).destAdd_id),
      ];
      const routeB = [
        getFullAddressById(getFullRouteById(b.route_id).startAdd_id),
        getFullAddressById(getFullRouteById(b.route_id).destAdd_id),
      ];
      console.log(routeA);
      return sortDrivenRouteByLogicalOrder(routeA, routeB);
    });
    let cards = list.map(route => (
      <DrivenRoutesCards key={route.dRoute_id} drivenRoute={route} />
    ));

    console.log('cards', cards.length);
    setDrivenRoutesCards(cards);
  }, [drivenRoutes, getFullAddressById, getFullRouteById, selectedDate]);

  console.log('d', drivenRoutesCards.length);
  return {drivenRoutesCards};
}
