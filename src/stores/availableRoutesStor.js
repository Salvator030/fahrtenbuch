import React, {useEffect, useState} from 'react';
import useMainView from './MainViewStore';
import {useBetween} from 'use-between';
import useDatabase from './databaseStore';
import RouteCard from '../Components/AvailableRoutes/RouteCard/RouteCard';
import {sortByAlphabetAscending} from '../asserts/sortHelper';
import useCalender from './calenderStore';
import useWarningModal from './warningModalStore';
import {parseDate} from '../asserts/dateHelper';

export default function useAvailableRoutes() {
  const [routesCards, setRoutesCards] = useState([]);
  const [sortValue, setSortValue] = useState('startName');
  const [searchValue, setSearchValue] = useState('');
  const [selectedRoute, setSelectedRoute] = useState(0);
  const [hideRoutes, setHideRoutes] = useState(true);

  const useShareMainView = () => useBetween(useMainView);
  const {toggleCreateNewRoute, toggleShowWarning} = useShareMainView();

  const useShareDatabase = () => useBetween(useDatabase);
  const {routes, getFullAddressById, saveNewDrivenRoute} = useShareDatabase();

  const useShareWarningModal = () => useBetween(useWarningModal);
  const {setWarningDescription, setSelectedRouteWarning} =
    useShareWarningModal();

  const useShareCalender = () => useBetween(useCalender);
  const {selectedDate} = useShareCalender();

  const toggleHideRoutes = () => {
    setHideRoutes(!hideRoutes);
  };
  useEffect(() => {
    if (routes) {
      let list = routes;

      switch (sortValue) {
        case 'startName': {
          list.sort((a, b) =>
            sortByAlphabetAscending(
              getFullAddressById(a.startAdd_id).name,
              getFullAddressById(b.startAdd_id).name,
            ),
          );
          if (searchValue !== '') {
            list = list.filter(route =>
              getFullAddressById(route.startAdd_id)
                .name.toLowerCase()
                .startsWith(searchValue.toLowerCase()),
            );
          }

          break;
        }
        case 'startStreet': {
          list.sort((a, b) =>
            sortByAlphabetAscending(
              getFullAddressById(a.startAdd_id).street,
              getFullAddressById(b.startAdd_id).street,
            ),
          );
          if (searchValue !== '') {
            list = list.filter(route => {
              getFullAddressById(route.startAdd_id)
                .street.toLowerCase()
                .startsWith(searchValue.toLowerCase());
            });
          }

          break;
        }
        case 'startPlz': {
          list.sort((a, b) =>
            sortByAlphabetAscending(
              getFullAddressById(a.startAdd_id).plz,
              getFullAddressById(b.startAdd_id).plz,
            ),
          );
          if (searchValue !== '') {
            list = list.filter(route =>
              getFullAddressById(route.startAdd_id)
                .plz.toLowerCase()
                .startsWith(searchValue.toLowerCase()),
            );
          }
          break;
        }
        case 'startPlace': {
          list.sort((a, b) =>
            sortByAlphabetAscending(
              getFullAddressById(a.startAdd_id).place,
              getFullAddressById(b.startAdd_id).place,
            ),
          );
          if (searchValue !== '') {
            list = list.filter(route =>
              getFullAddressById(route.startAdd_id)
                .place.toLowerCase()
                .startsWith(searchValue.toLowerCase()),
            );
          }
          break;
        }
        case 'destName': {
          list.sort((a, b) =>
            sortByAlphabetAscending(
              getFullAddressById(a.destAdd_id).name,
              getFullAddressById(b.destAdd_id).name,
            ),
          );
          if (searchValue !== '') {
            list = list.filter(route =>
              getFullAddressById(route.destAdd_id)
                .name.toLowerCase()
                .startsWith(searchValue.toLowerCase()),
            );
          }
          break;
        }
        case 'destStreet': {
          list.sort((a, b) =>
            sortByAlphabetAscending(
              getFullAddressById(a.destAdd_id).street,
              getFullAddressById(b.destAdd_id).street,
            ),
          );
          if (searchValue !== '') {
            list = list.filter(route =>
              getFullAddressById(route.destAdd_id)
                .street.toLowerCase()
                .startsWith(searchValue.toLowerCase()),
            );
          }

          break;
        }
        case 'destPlz': {
          list.sort((a, b) =>
            sortByAlphabetAscending(
              getFullAddressById(a.destAdd_id).plz,
              getFullAddressById(b.destAdd_id).plz,
            ),
          );
          if (searchValue !== '') {
            list = list.filter(route =>
              getFullAddressById(route.destAdd_id)
                .plz.toLowerCase()
                .startsWith(searchValue.toLowerCase()),
            );
          }
          break;
        }
        case 'destPlace': {
          list.sort((a, b) =>
            sortByAlphabetAscending(
              getFullAddressById(a.destAdd_id).place,
              getFullAddressById(b.destAdd_id).place,
            ),
          );
          if (searchValue !== '') {
            list = list.filter(route =>
              getFullAddressById(route.destAdd_id)
                .place.toLowerCase()
                .startsWith(searchValue.toLowerCase()),
            );
          }
          break;
        }
        default: {
        }
      }
      if (hideRoutes) {
        list = list.filter(route => route.hide === 0);
      }

      const cards = list.map(route => {
        return (
          <RouteCard
            key={route.route_id}
            id={route.route_id}
            startAdd={getFullAddressById(route.startAdd_id)}
            destAdd={getFullAddressById(route.destAdd_id)}
            distance={route.distance}
            hide={route.hide}
          />
        );
      });
      setRoutesCards(cards);
    }
  }, [routes, sortValue, searchValue, hideRoutes, getFullAddressById]);

  const createNewDrivenRoute = () => {
    return {date: selectedDate, route_id: selectedRoute};
  };

  const handelOnClickPill = value => {
    setSortValue(value);
  };

  const handelOnClickRouteCard = id => {
    setSelectedRoute(id);
  };

  const handelOnClickAddDrivenRouteBtn = () => {
    saveNewDrivenRoute(createNewDrivenRoute());
  };

  const handelOnClickNewRouteBtn = () => toggleCreateNewRoute();

  const handelOnClickDeleteRoueBtn = () => {
    setWarningDescription('deleteRoute');
    setSelectedRouteWarning(selectedRoute);
    toggleShowWarning();
  };

  return {
    routesCards,
    sortValue,
    searchValue,
    setSearchValue,
    selectedRoute,
    setSelectedRoute,
    handelOnClickPill,
    handelOnClickNewRouteBtn,
    handelOnClickRouteCard,
    handelOnClickAddDrivenRouteBtn,
    handelOnClickDeleteRoueBtn,
    hideRoutes,
    toggleHideRoutes,
  };
}
