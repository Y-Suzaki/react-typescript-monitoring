import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Location } from '../../../types/api/location';

type Props = {
  locationList: Array<Location>;
};

export const LocationList: FC<Props> = memo(function LocationList(props) {
  const { locationList } = props;
  return (
    <Box bgColor={'white'} p={2} borderRadius={'md'}>
      {locationList.map((location) => (
        <p key={location.date_time}>{location.date_time}</p>
      ))}
    </Box>
  );
});
