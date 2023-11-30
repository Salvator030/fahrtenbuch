import {useBetween} from 'use-between';
import useNewRoute from './newRouteStore';
import {useState} from 'react';

export default function useDistance() {
  const useShareNewRoute = () => useBetween(useNewRoute);
  const {setViewDescription, setDistance} = useShareNewRoute();
  const [distanceInputValue, setDistanceInputValue] = useState('');
  const handelOnClickBackBtn = () => {
    setViewDescription('startAddress');
  };

  const handelOnClickNextBtn = () => {
    setDistance(distanceInputValue);
    setViewDescription('save');
  };

  return {
    distanceInputValue,
    setDistanceInputValue,
    handelOnClickBackBtn,
    handelOnClickNextBtn,
  };
}
