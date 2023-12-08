import React, {useEffect, useState} from 'react';
import {useBetween} from 'use-between';
import useDatabase from '../stores/databaseStore';
import DrivenRoutesCards from '../Components/DateView/CurrentDayRoutes/DrivenRoutesCards/DrivenRoutesCards';
import {View, Text} from 'react-native';
import useCalender from './calenderStore';
import {sortDrivenRouteByLogicalOrder} from '../asserts/sortHelper';

export default function useCurrentDayRoutes() {
  const useShareDatabase = () => useBetween(useDatabase);
  const {
    drivenRoutesByDate,
    getFullAddressById,
    getFullRouteById,
    deleteDrivenRoute,
  } = useShareDatabase();
  const useShareCalendar = () => useBetween(useCalender);
  const {selectedDate} = useShareCalendar();

  const [selectedDrivenRoute, setSelectedDrivenRoute] = useState(0);
  const [drivenRoutesCards, setDrivenRoutesCards] = useState([]);

  const handelOnClickDrivenRouteCard = dRoute_id => {
    setSelectedDrivenRoute(dRoute_id);
  };

  const handelOnClickDeleteBtn = () => {
    console.log('useCurrent.., handelOnClickDeleteBtn');
    deleteDrivenRoute(selectedDrivenRoute);
  };
  useEffect(() => {
    let list = drivenRoutesByDate;
    list.sort((a, b) => {
      const routeA = [
        getFullAddressById(getFullRouteById(a.route_id).startAdd_id),
        getFullAddressById(getFullRouteById(a.route_id).destAdd_id),
      ];
      const routeB = [
        getFullAddressById(getFullRouteById(b.route_id).startAdd_id),
        getFullAddressById(getFullRouteById(b.route_id).destAdd_id),
      ];

      return sortDrivenRouteByLogicalOrder(routeA, routeB);
    });
    let cards = list.map(route => (
      <DrivenRoutesCards key={route.dRoute_id} drivenRoute={route} />
    ));

    setDrivenRoutesCards(cards);
  }, [drivenRoutesByDate, getFullAddressById, getFullRouteById, selectedDate]);

  return {
    drivenRoutesCards,
    selectedDrivenRoute,
    handelOnClickDrivenRouteCard,
    handelOnClickDeleteBtn,
  };
}
