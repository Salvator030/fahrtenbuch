import {useState} from 'react';

import useEditRouteModal from './editRouteStore';

export default function useEditRouteDistance() {
  const {editRoute} = useEditRouteModal();
  const [correctionOfDistans, setCorrectionOfDistans] = useState(false);

  return {};
}
