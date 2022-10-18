import { useState } from 'react';
import { Location } from '../types/api/location';
import axios from 'axios';
import { useMessage } from './useMessage';
import { useIdToken } from './useIdToken';

export const useLocationList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [locationList, setLocationList] = useState<Array<Location>>([]);
  const { showMessage } = useMessage();
  const { getIdToken } = useIdToken();
  const apiDomain = process.env.REACT_APP_BACKOFFICE_API_DOMAIN;

  const getLocationList = (imei: string, day: string) => {
    console.log('`*************************');
    setIsLoading(true);

    getIdToken()
      .then((token) => {
        axios.defaults.headers.common['Authorization'] = token;
      })
      .catch(() => {
        return;
      });

    axios
      .get<Array<Location>>(`${apiDomain}/locations`)
      .then((response) => {
        const data: Array<Location> = response.data.map((location) => ({
          date_time: location.date_time,
          lat: location.lat,
          lng: location.lng,
          device_mode: location.device_mode,
        }));
        console.log(data);
        setLocationList(data);
      })
      .catch((e) => {
        console.log(e);
        showMessage({ title: 'Failed to get location list.', status: 'error' });
      })
      .finally(() => setIsLoading(false));

    setIsLoading(false);
  };

  return {
    getLocationList,
    locationList,
    isLoading,
  };
};
