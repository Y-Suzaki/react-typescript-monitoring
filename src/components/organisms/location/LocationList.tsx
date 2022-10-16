import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Location } from '../../../types/api/location';

type Props = {
  locationList: Array<Location>;
};

export const LocationList: FC<Props> = memo(function LocationList(props) {
  const { locationList } = props;

  const headers = ['date_time', 'lat', 'lng', 'device_mode'];

  return (
    <Box bgColor={'white'} p={2} borderRadius={'md'}>
      <TableContainer overflowX="unset" overflowY="unset">
        <Table variant="simple" size="sm">
          <Thead position="sticky" top={-1} zIndex="docked">
            <Tr bg="gray.100">
              {headers.map((header) => (
                <Th key={header} borderWidth="1px" borderColor="gray.200" p={2}>
                  {header}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {locationList.map((location, index) => (
              <Tr key={index}>
                <Td key={location.date_time} borderWidth="1px" borderColor="gray.200" bg="white">
                  {location.date_time}
                </Td>
                <Td key={location.lat} borderWidth="1px" borderColor="gray.200" bg="white">
                  {location.lat}
                </Td>
                <Td key={location.lng} borderWidth="1px" borderColor="gray.200" bg="white">
                  {location.lng}
                </Td>
                <Td key={location.device_mode} borderWidth="1px" borderColor="gray.200" bg="white">
                  {location.device_mode}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
});
