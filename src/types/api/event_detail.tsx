export type EventDetail = {
  event_id: number;
  date_time: string;
  event_type: number;
  lat: number;
  lng: number;
  download_urls: {
    front?: string;
    rear?: string;
    in?: string;
  };
};
