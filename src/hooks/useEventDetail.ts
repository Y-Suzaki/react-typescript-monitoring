import { useState } from 'react';
import { useMessage } from './useMessage';

export const useEventDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [eventDetail, setEventDetail] = useState();
  const { showMessage } = useMessage();

  const apiDomain = process.env.REACT_APP_BACKOFFICE_API_DOMAIN;

  const getEventDetail = (event_id: number, onOpen: () => void) => {
    setIsLoading(true);

    setIsLoading(false);
    onOpen();
  };

  return {
    getEventDetail,
    eventDetail,
    isLoading,
  };
};
