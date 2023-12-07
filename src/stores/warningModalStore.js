import {useState} from 'react';

export default function useWarningModal() {
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [warningDescription, setWarningDescription] = useState('');
  const toggleShowWarning = () => {
    setShowWarningModal(!showWarningModal);
  };

  return {showWarningModal, warningDescription, setWarningDescription};
}
