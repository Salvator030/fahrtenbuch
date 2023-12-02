import {useBetween} from 'use-between';
import useNewRoute from './newRouteStore';
import {useState} from 'react';

export default function useDistance() {
  const useShareNewRoute = () => useBetween(useNewRoute);
  const {setViewDescription, setDistance} = useShareNewRoute();
  const [distanceInputValue, setDistanceInputValue] = useState('');
  const [error, setError] = useState('');

  const handelOnClickBackBtn = () => {
    setDistanceInputValue('');
    setDistance(0);
    setViewDescription('destinationAddress');
  };

  const checkDistance = () => {
    const tempDistance = distanceInputValue.trim().replace(',', '.');
    console.log(tempDistance);
    if (isNaN(tempDistance)) {
      console.log('if');
      setError('Bitte eine Zahl eingeben');
      setDistanceInputValue('');
      return false;
    } else {
      console.log('else');
      setError('');
      setDistance(parseFloat(tempDistance));
      return true;
    }
  };

  const handelOnClickNextBtn = () => {
    if (checkDistance()) {
      setViewDescription('save');
    }
  };

  return {
    distanceInputValue,
    setDistanceInputValue,
    checkDistance,
    handelOnClickBackBtn,
    handelOnClickNextBtn,
    error,
  };
}
