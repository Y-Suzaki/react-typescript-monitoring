import { useState } from 'react';
import { Location } from '../types/api/location';

export const useLocationList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [locationList, SetLocationList] = useState<Array<Location>>([]);

  const getLocationList = (imei: string, day: string) => {
    setIsLoading(true);
    SetLocationList([
      { date_time: '2022-12-12T00:00:00Z', lat: 35.12, lng: 140.12 },
      { date_time: '2022-12-13T00:00:00Z', lat: 36.12, lng: 141.12 },
      { date_time: '2022-12-14T00:00:00Z', lat: 37.12, lng: 142.12 },
    ]);
    setIsLoading(false);
  };

  return {
    getLocationList,
    locationList,
    isLoading,
  };
};
