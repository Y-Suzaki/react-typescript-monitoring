import { useState } from 'react';
import { useMessage } from './useMessage';
import { EventDetail } from '../types/api/event_detail';

export const useEventDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [eventDetail, setEventDetail] = useState<EventDetail | null>(null);
  const { showMessage } = useMessage();

  const apiDomain = process.env.REACT_APP_BACKOFFICE_API_DOMAIN;

  const getEventDetail = (event_id: number, onOpen: () => void) => {
    setIsLoading(true);

    const detail = {
      event_id: 3,
      date_time: '2022-10-10T00:00:00Z',
      lat: 35.19,
      lng: 145.01,
      event_type: 5,
      download_urls: {
        front: 'https://xxx.com/aaa.jpg',
        rear: 'https://xxx.com/bbb.jpg',
        in: 'https://xxx.com/ccc.jpg',
      },
    };
    setEventDetail(detail);
    setIsLoading(false);
    onOpen();
  };

  return {
    getEventDetail,
    eventDetail,
    isLoading,
  };
};
