import React, {useCallback, useEffect, useState} from 'react';
import {useBetween} from 'use-between';
import useDatabase from '../stores/databaseStore';
import DrivenRoutesCards from '../Components/DateView/CurrentDayRoutes/DrivenRoutesCards/DrivenRoutesCards';
import {View, Text} from 'react-native';
import useCalender from './calenderStore';
import {sortDrivenRouteByLogicalOrder} from '../asserts/sortHelper';
import useWarningModal from './warningModalStore';

export default function useCurrentDayRoutes() {
  const useShareDatabase = () => useBetween(useDatabase);
  const {drivenRoutesByDate, getFullAddressById, getFullRouteById} =
    useShareDatabase();
  const useShareCalendar = () => useBetween(useCalender);
  const {selectedDate} = useShareCalendar();

  const useShareWarningModal = () => useBetween(useWarningModal);
  const {openDeleteDrivenRouteWarning} = useShareWarningModal();

  const [selectedDrivenRoute, setSelectedDrivenRoute] = useState(0);
  const [drivenRoutesCards, setDrivenRoutesCards] = useState([]);
  const [distanceAtDay, setDistanceAtDay] = useState(0);

  const handelOnClickDrivenRouteCard = dRoute_id => {
    setSelectedDrivenRoute(dRoute_id);
  };

  const handelOnClickDeleteBtn = () => {
    openDeleteDrivenRouteWarning(selectedDrivenRoute);
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
    let distance = 0;
    let cards = list.map(route => {
      distance += getFullRouteById(route.route_id).distance;
      return <DrivenRoutesCards key={route.dRoute_id} drivenRoute={route} />;
    });
    setDistanceAtDay(distance);
    setDrivenRoutesCards(cards);
  }, [
    drivenRoutesByDate,
    getFullAddressById,
    getFullRouteById,
    selectedDate,
    distanceAtDay,
  ]);

  return {
    drivenRoutesCards,
    selectedDrivenRoute,
    distanceAtDay,
    handelOnClickDrivenRouteCard,
    handelOnClickDeleteBtn,
  };
}
